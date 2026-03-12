const express = require("express");
require("dotenv").config();
const port = 8000;
const app = express();
const cors = require("cors");
var cookieParser = require("cookie-parser");
const dbConfig = require("./dbConfig");
const route = require("./routes");
const cloudinaryConfig = require("./services/cloudinaryConfig");

dbConfig();
cloudinaryConfig();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log("server ok");
});
