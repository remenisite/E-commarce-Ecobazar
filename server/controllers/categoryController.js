const categorySchema = require("../models/categorySchema");
const { uploadtoCloude } = require("../services/cloudinaryServices");
const { responseHandler } = require("../utils/responseHandler");

const createCategory = async (req, res) => {
  try {
    const { name, slug, description } = req.body;
    if (!name) return responseHandler.error(res, 400, "name Name Requred");
    if (!slug) return responseHandler.error(res, 400, "slug Name Requred");
    if (!req.file)
      return responseHandler.error(res, 400, "Images Taambneil Requred");
    const existSlug = await categorySchema.findOne({ slug });
    if (existSlug) return responseHandler.error(res, 400, "Category slug Already Axisxt");
    const ImgRes = await uploadtoCloude(req.file, "categories");
    const category = categorySchema({
      name,
      slug,
      description,
      thumbnail: ImgRes.secure_url,
    });
    category.save();
    responseHandler.success(res, 201, "", category);
  } catch (error) {
    responseHandler.error(res, 500, "Something went wrong");
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find({});

    responseHandler.success(res, 201, "", categories);
  } catch (error) {
    responseHandler.error(res, 500, "Something went wrong");
  }
};

module.exports = { createCategory, getAllCategories };
