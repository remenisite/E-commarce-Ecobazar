const express = require("express");
const { signup, verifyOtp, resentOtp, signin, forgetPass, resetPass } = require("../controller/authcontroller");

const route = express.Router();

route.post("/signup" , signup)
route.post("/verify" , verifyOtp)
route.post("/resent" , resentOtp)
route.post("/signin" , signin)
route.post("/forget" , forgetPass)
route.post("/resetpass/:token" , resetPass)


module.exports = route;
