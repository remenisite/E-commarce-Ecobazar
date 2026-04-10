const categorySchema = require("../models/categorySchema");
const { sendSuccess, sendError } = require("../services/responseHandler");

const roleCheckMiddleware = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user) return sendError(res, "User not authenticated", 401);

      if (roles.includes(req.user.role)) return next();

      return sendError(res, "Unauthorized access", 403);
    } catch (error) {
      console.log(error);
      return sendError(res, "Server error", 500);
    }
  };
};

const GetAllCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find({});
    return sendSuccess(res, "Categories fetched successfully", categories, 200);
  } catch (error) {
    console.log(error);
    return sendError(res, "Server error", 500);
  }
};

module.exports = { roleCheckMiddleware, GetAllCategories };