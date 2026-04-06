const categorySchema = require("../models/categorySchema");
const productSchema = require("../models/productSchema");
const {
  uplodecloudinary,
  deletfromCloudinary,
} = require("../services/cloudinaryServices");
const { responseHandler } = require("../services/responseHandler");

const ENUM_SIZE = ["s", "m", "l", "xl", "2xl", "3xl"];


// ================= CREATE PRODUCT =================
const createNewProduct = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      category,
      price,
      discountPercentage,
      variants,
      tags,
    } = req.body;

    const thumbnail = req.files?.thumbnail;
    const images = req.files?.images;

    if (!title)
      return responseHandler.error(res, 400, "Title is required");

    if (!slug)
      return responseHandler.error(res, 400, "Slug is required");

    const formattedSlug = slug.toLowerCase().trim();

    const existingSlug = await productSchema.findOne({
      slug: formattedSlug,
    });

    if (existingSlug)
      return responseHandler.error(res, 400, "Slug already exists");

    if (!description)
      return responseHandler.error(res, 400, "Description is required");

    if (!category)
      return responseHandler.error(res, 400, "Category is required");

    const existingCategory = await categorySchema.findById(category);

    if (!existingCategory)
      return responseHandler.error(res, 400, "Invalid category");

    if (!price)
      return responseHandler.error(res, 400, "Price is required");

    // ========= VARIANTS =========
    const variantData = JSON.parse(variants);

    if (!Array.isArray(variantData) || variantData.length === 0) {
      return responseHandler.error(
        res,
        400,
        "At least one variant is required"
      );
    }

    const allSku = variantData.map((v) => v.sku);

    if (new Set(allSku).size !== allSku.length) {
      return responseHandler.error(res, 400, "Duplicate SKU found");
    }

    for (const item of variantData) {
      if (!item.sku)
        return responseHandler.error(res, 400, "SKU is required");

      if (!item.color)
        return responseHandler.error(res, 400, "Color is required");

      if (!item.size || !ENUM_SIZE.includes(item.size)) {
        return responseHandler.error(res, 400, "Invalid size");
      }

      if (!item.stock || item.stock < 1) {
        return responseHandler.error(
          res,
          400,
          "Stock must be at least 1"
        );
      }
    }

    // ========= THUMBNAIL =========
    if (!thumbnail || thumbnail.length === 0) {
      return responseHandler.error(
        res,
        400,
        "Thumbnail is required"
      );
    }

    const thumbnailRes = await uplodecloudinary(
      thumbnail[0],
      "products"
    );

    // ========= IMAGES =========
    let imagesUrl = [];

    if (images) {
      if (images.length > 4) {
        return responseHandler.error(
          res,
          400,
          "Maximum 4 images allowed"
        );
      }

      const uploadPromises = images.map((img) =>
        uplodecloudinary(img, "products")
      );

      const results = await Promise.all(uploadPromises);

      imagesUrl = results.map((r) => r.secure_url);
    }

    const newProduct = new productSchema({
      title,
      slug: formattedSlug,
      description,
      category,
      price,
      discountPercentage,
      variants: variantData,
      tags,
      thumbnail: thumbnailRes.secure_url,
      images: imagesUrl,
    });

    await newProduct.save();

    return responseHandler.success(
      res,
      201,
      "Product created successfully",
      newProduct
    );
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, 500, "Internal Server Error");
  }
};


// ================= GET ALL PRODUCTS =================
const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category;

    const pipeline = [
      { $match: { isActive: true } },
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
    ];

    if (category) {
      pipeline.push({ $match: { "category.name": category } });
    }

    pipeline.push(
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit }
    );

    const totalProducts = await productSchema.countDocuments({
      isActive: true,
    });

    const products = await productSchema.aggregate(pipeline);

    const totalPages = Math.ceil(totalProducts / limit);

    return responseHandler.success(res, 200, "All products", {
      products,
      pagination: {
        totalProducts,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    return responseHandler.error(res, 500, "Server error");
  }
};


// ================= SINGLE PRODUCT =================
const singleProductDetails = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await productSchema
      .findOne({ slug, isActive: true })
      .populate("category", "name")
      .select("-__v");

    if (!product) {
      return responseHandler.error(res, 404, "Product not found");
    }

    return responseHandler.success(
      res,
      200,
      "Product details",
      product
    );
  } catch (error) {
    return responseHandler.error(res, 500, "Internal server error");
  }
};


// ================= UPDATE PRODUCT =================
const updateProduct = async (req, res) => {
  try {
    const { slug } = req.params;

    const product = await productSchema.findOne({ slug });

    if (!product) {
      return responseHandler.error(res, 404, "Product not found");
    }

    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      variants,
      tags,
      isActive,
      destroyImg = [],
    } = req.body;

    const thumbnail = req.files?.thumbnail;
    const images = req.files?.images;

    if (title) product.title = title;
    if (description) product.description = description;
    if (category) product.category = category;
    if (price) product.price = price;
    if (discountPercentage)
      product.discountPercentage = discountPercentage;

    if (tags && Array.isArray(tags)) product.tags = tags;

    if (typeof isActive !== "undefined") {
      product.isActive = isActive === "true";
    }

    // ========= VARIANTS =========
    if (variants) {
      const variantData = JSON.parse(variants);

      const allSku = variantData.map((v) => v.sku);

      if (new Set(allSku).size !== allSku.length) {
        return responseHandler.error(res, 400, "Duplicate SKU found");
      }

      for (const item of variantData) {
        if (!item.sku || !item.color || !item.size) {
          return responseHandler.error(
            res,
            400,
            "Invalid variant data"
          );
        }

        if (!ENUM_SIZE.includes(item.size)) {
          return responseHandler.error(res, 400, "Invalid size");
        }

        if (!item.stock || item.stock < 1) {
          return responseHandler.error(res, 400, "Invalid stock");
        }
      }

      product.variants = variantData;
    }

    // ========= THUMBNAIL =========
    if (thumbnail) {
      const publicId = product.thumbnail.split("/").pop().split(".")[0];
      deletfromCloudinary(`products/${publicId}`);

      const upload = await uplodecloudinary(thumbnail[0], "products");

      product.thumbnail = upload.secure_url;
    }

    // ========= IMAGES =========
    let imagesUrl = [];

    let totalImages = product.images.length;

    if (destroyImg.length > 0) totalImages -= destroyImg.length;
    if (images) totalImages += images.length;

    if (totalImages > 4)
      return responseHandler.error(res, 400, "Max 4 images allowed");

    if (totalImages < 1)
      return responseHandler.error(res, 400, "At least 1 image required");

    if (images) {
      const uploadPromises = images.map((img) =>
        uplodecloudinary(img, "products")
      );

      const results = await Promise.all(uploadPromises);

      imagesUrl = results.map((r) => r.secure_url);
    }

    if (Array.isArray(destroyImg) && destroyImg.length > 0) {
      for (const url of destroyImg) {
        const publicId = url.split("/").pop().split(".")[0];
        deletfromCloudinary(`products/${publicId}`);
      }
    }

    const remainingImages = product.images.filter(
      (img) => !destroyImg.includes(img)
    );

    product.images = [...remainingImages, ...imagesUrl];

    await product.save();

    return responseHandler.success(
      res,
      200,
      "Product updated successfully",
      product
    );
  } catch (error) {
    return responseHandler.error(res, 500, "Server error");
  }
};

module.exports = {
  createNewProduct,
  getAllProducts,
  singleProductDetails,
  updateProduct,
};