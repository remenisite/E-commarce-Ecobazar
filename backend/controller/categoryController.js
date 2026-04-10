const categorySchema = require("../models/categorySchema");
const { uplodecloudinary } = require("../services/cloudinaryServices");
const { responseHandler } = require("../services/responseHandler");


// ================= CREATE CATEGORY =================
const createNewCategory = async (req, res) => {
  try {
    const { name, description, slug } = req.body;

    if (!name) {
      return responseHandler.error(res, 400, "Category name is required");
    }

    if (!slug) {
      return responseHandler.error(res, 400, "Slug is required");
    }

    if (!req.file) {
      return responseHandler.error(
        res,
        400,
        "Category thumbnail is required"
      );
    }

    const existingCategory = await categorySchema.findOne({ slug });

    if (existingCategory) {
      return responseHandler.error(
        res,
        400,
        "Category already exists"
      );
    }

    const uploadRes = await uplodecloudinary(req.file, "thumbnail");

    const category = new categorySchema({
      name,
      description,
      slug,
      thumbnail: uploadRes.secure_url,
    });

    await category.save();

    return responseHandler.success(
      res,
      201,
      "Category created successfully"
    );
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, 500, "Server error");
  }
};

module.exports = { createNewCategory };