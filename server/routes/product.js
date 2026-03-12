const express = require("express");
const route = express.Router();
const {
  createProduct,
  getProduct,
  getProductDetails,
  updateProduct,
} = require("../controllers/productController");
const { authMidlleware } = require("../middleware/authMiddleware");
const roleCheckMiddleware = require("../middleware/roleCheckMiddleware");
const multer = require("multer");
const upload = multer();
route.post("/upload", authMidlleware, roleCheckMiddleware("admin", "user", "editor"), upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  createProduct,
);

route.get("/allProducts", getProduct);
route.get("/:slug", getProductDetails);
route.post("/update/:slug", authMidlleware, roleCheckMiddleware("admin", "editor"), upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  updateProduct,
);

module.exports = route;
