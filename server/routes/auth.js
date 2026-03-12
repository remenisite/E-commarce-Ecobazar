const express = require("express");
const { signup, verifyOtp, resentOtp, signin, forgatePass, resetPassword, getUserProfile, updateUserProfile, refreshAccessToken, } = require("../controllers/authController");
const { authMidlleware } = require("../middleware/authMiddleware");
const route = express.Router();
const multer  = require('multer')
const upload = multer()
// const upload = multer({ dest: 'uploads/' })

route.post("/signup", signup);
route.post("/verifyOtp", verifyOtp);
route.post("/resentOtp", resentOtp);
route.post("/signin",  signin);
route.post("/forgetPass",  forgatePass);
route.post("/resetpass/:token", resetPassword);
route.get("/profile", authMidlleware, getUserProfile );
route.put("/profile", authMidlleware, upload.single('avatar'), updateUserProfile );
route.post("/refreshTkn" , refreshAccessToken)
module.exports = route;
