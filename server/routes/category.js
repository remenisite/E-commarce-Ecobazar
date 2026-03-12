const express = require("express");
const { createCategory, getAllCategories } = require("../controllers/categoryController");
const route = express.Router();
const multer  = require('multer');
const { authMidlleware } = require("../middleware/authMiddleware");
const roleCheckMiddleware = require("../middleware/roleCheckMiddleware");

const upload = multer()

route.post("/create", authMidlleware, roleCheckMiddleware("admin"), upload.single("thumbnail"), createCategory);
route.get("/getAll" , getAllCategories)

module.exports = route;
