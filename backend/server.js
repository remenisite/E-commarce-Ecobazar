const express = require("express");
const dbConfig = require("./dbConfig");
const route = require("./router");
require("dotenv").config();
const app = express();
const cookieParser = require("cookie-parser");
const cloudinaryConfig = require('./services/cloudinaryConfig')
const { webhook } = require('./Controllers/orderController')
const dns = require('dns');
dbConfig();
dns.setServers(['8.8.8.8', '8.8.4.4']);
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(route);
app.use(express.urlencoded({ extended: true }))
app.post("/webhook", express.raw({ type: "application/json" }), webhook)
cloudinaryConfig()
app.listen(8000, () => {
  console.log("SERVER OK");
});
