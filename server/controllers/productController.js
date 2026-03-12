const categorySchema = require("../models/categorySchema");
const productSchema = require("../models/productSchema");
const { uploadtoCloude } = require("../services/cloudinaryServices");
const SIZE_ENUM = require("../utils/enum");
const { responseHandler } = require("../utils/responseHandler");

const createProduct = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      category,
      price,
      discountPercentage,
      varients,
      tags,
      isActive,
    } = req.body;
    const thumbnail = req.files?.thumbnail;
    const images = req.files?.images;
    if (!title) return responseHandler.error(res, 400, "title is not difine");
    if (!slug) return responseHandler.error(res, 400, "slug is not define");
    const isExistSlug = await productSchema.findOne({
      slug: slug.toLowerCase(),
    });
    if (isExistSlug)
      return responseHandler.error(res, 400, "slug already exist");
    if (!description)
      return responseHandler.error(res, 400, "description is not difine");
    if (!category)
      return responseHandler.error(res, 400, "category is not difine");
    const isvalidCategory = await categorySchema.findById(category);
    if (!isvalidCategory)
      return responseHandler.error(res, 400, "Invalid Category");
    if (!price) return responseHandler.error(res, 400, "price is not difine");
    const variantsData = JSON.parse(varients); //---------------------- temporary
    if (!Array.isArray(variantsData) || variantsData.length === 0)
      return responseHandler.error(res, 400, "Minimum 1 varients need");
    for (const varient of variantsData) {
      if (!varient.sku)
        return responseHandler.error(res, 400, "Sku is required");
      if (!varient.color)
        return responseHandler.error(res, 400, "color is required");
      if (!varient.size)
        return responseHandler.error(res, 400, "size is required");
      if (!SIZE_ENUM.includes(varient.size))
        return responseHandler.error(res, 400, "Invalid Size");
      if (!varient.stock || varient.stock < 1)
        return responseHandler.error(
          res,
          400,
          "stock is required and more then 1",
        );
    }
    const skus = variantsData.map((v) => v.sku);
    if (new Set(skus).size !== skus.length)
      return responseHandler.error(res, 400, "Sku  must unique");
    if (!thumbnail || thumbnail?.length === 0)
      return responseHandler.error(res, 400, "Product Thaumbnail is required");
    if (!images && images?.length > 4)
      return responseHandler.error(res, 400, "Minimum 4 picture need");
    const thumbnailUrl = await uploadtoCloude(thumbnail[0], "products");
    let imageUrl = [];
    if (images) {
      const resPromise = images.map(async (item) => {
        return uploadtoCloude(item, "products");
      });
      const result = await Promise.all(resPromise);
      imageUrl = result.map((r) => r.secure_url);
    }
    const newProduct = new productSchema({
      title,
      slug: slug.toLowerCase(),
      description,
      category,
      price,
      thumbnail: thumbnailUrl.secure_url,
      images: imageUrl,
      discountPercentage,
      varients: variantsData,
      tags,
      isActive,
    });
    newProduct.save();
    responseHandler.success(res, 201, "Product upload successfully");
  } catch (error) {
    responseHandler.error(res, 500, "Something went wrong");
  }
};

const getProduct = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const skip = (page - 1) * limit;
    const totalProducts = await productSchema.countDocuments();
    const pipeline = [
      {
        $match: {
          isActive: true,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      // {
      // $match:{
      //   "category.name":{$regex: category, $options: "i"}     ----------------- mongodb regeex
      // }
      // },
      // { $count: "count" },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ];
    if (category) {
      pipeline.push({
        $match: {
          "category.slug": category,
        },
      });
    }
    //  const productList = await productSchema
    // .find({ isActive: false })
    // .populate({
    // path: "category",
    // match: { name: category},
    // })
    // .skip(skip)
    // .limit(limit)
    // .sort({ createdAt: -1 });
    const productList = await productSchema.aggregate(pipeline);
    console.log(productList);
    const totalPages = Math.ceil(totalProducts / limit);
    return responseHandler.success(res, 200, {
      products: productList,
      pagination: {
        total: totalProducts,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    responseHandler.error(res, 500, "Something went wrong");
  }
};

const getProductDetails = async (req, res) => {
  try {
    const { slug } = req.params;
    const productDetails = await productSchema
      .findOne({ slug, isActive: true })
      .populate("category", "name")
      .select("-updatedAt -__v");
    if (!productDetails)
      return responseHandler.error(res, 404, "Product not found");

    return responseHandler.success(
      res,
      200,
      productDetails,
      "Product Details Fetched Successfully",
    );
  } catch (error) {
    return responseHandler.error(res, 500, error.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      varients,
      tags,
      isActive,
    } = req.body;
    const thumbnail = req.files?.thumbnail;
    const images = req.files?.images;
    const { slug } = req.params;
    const productData = await productSchema.findOne({ slug });
    if (title) productData.title = title;
    if (description) productData.description = description;
    if (category) productData.category = category;
    if (price) productData.price = price;
    if (discountPercentage) productData.discountPercentage = discountPercentage;
    if (tags &&tags?.length > 0 && Array.isArray(tags)) productData.tags = tags;
    if (isActive) productData.isActive = isActive == "true";
    const variantsData = JSON.parse(varients);
    if (!Array.isArray(variantsData) && variantsData.length > 0) {
      for (const varient of variantsData) {
        if (!varient.sku)
          return responseHandler.error(res, 400, "Sku is required");
        if (!varient.color)
          return responseHandler.error(res, 400, "color is required");
        if (!varient.size)
          return responseHandler.error(res, 400, "size is required");
        if (!SIZE_ENUM.includes(varient.size))
          return responseHandler.error(res, 400, "Invalid Size");
        if (!varient.stock || varient.stock < 1)
          return responseHandler.error(
            res,
            400,
            "stock is required and more then 1",
          );
      }
      const skus = variantsData.map((v) => v.sku);
      if (new Set(skus).size !== skus.length)
        return responseHandler.error(res, 400, "Sku  must unique");
      productData.varients = variantsData;
    }
    if (thumbnail) {
      const imgPublicId = productData.thumbnail.split("/").pop().split(".")[0];
      deleteToCloude(`products/${imgPublicId}`);
      const ImgRes = await uploadtoCloude(thumbnail, "products");
      productData.thumbnail0 = ImgRes.secure_url;
    }
    // if (images) {
    //   const resPromise = images.map(async (item) => {
    //     return uploadtoCloude(item, "products");
    //   });
    //   const result = await Promise.all(resPromise);
    //   imageUrl = result.map((r) => r.secure_url);
    // }
    productData.save();
    responseHandler.success(res, 200, productData, "Product Data Upload");
  } catch (error) {
    responseHandler.error(res, 500, "Something went wrong");
  }
};

module.exports = { createProduct, getProduct, getProductDetails, updateProduct,};
