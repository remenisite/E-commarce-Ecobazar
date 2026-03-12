const express = require("express");
const route = express.Router();
const authRoute = require("./auth");
const productRoute = require("./product");

route.get("/", (req, res) => {
  res.send("fron server");
});
route.use("/auth", authRoute);
route.use("/product", productRoute);
route.use("/category", require("./category"));
route.use((req, res) => {
  res.send({ message: "404 not found" });
});

module.exports = route;
