const userSchema = require("../models/userSchema");
const { sendEmail } = require("../services/emailServices");
const { emailTemplate, resetTamplate } = require("../services/emailTamplate");
const {
  generateOTP,
  generateAccTkn,
  generateRefTkn,
  generateRstTkn,
  hashRstTkn,
  verifyToken,
  GenerateACCTkn,
} = require("../services/helpers");
const { responseHandler } = require("../services/responseHandler");
const { isvelidEmail, isvalidPassword } = require("../utils/validation");
const { uplodecloudinary, deletfromCloudinary } = require("../services/cloudinaryServices");


// ---------------- Signup ----------------
const signup = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;

    if (!email) return responseHandler.error(res, 400, "Email is required");
    if (!isvelidEmail(email)) return responseHandler.error(res, 400, "Invalid email");
    if (!password) return responseHandler.error(res, 400, "Password is required");
    if (!isvalidPassword(password)) return responseHandler.error(res, 400, "Invalid password");

    const existingUser = await userSchema.findOne({ email });
    if (existingUser) return responseHandler.error(res, 400, "User already exists with this email");

    const otp = generateOTP();
    const user = new userSchema({
      fullName,
      email,
      password,
      phone,
      address,
      otp,
      otpExpires: Date.now() + 2 * 60 * 1000, // 2 mins
    });

    await user.save();

    await sendEmail({
      email,
      subject: "Verify Your Email",
      otp,
      template: emailTemplate,
    });

    responseHandler.success(res, 201, "Signup successful. Please verify your email.");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


// ---------------- Verify OTP ----------------
const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (!otp) return responseHandler.error(res, 400, "OTP is required");
    if (!email) return responseHandler.error(res, 400, "Email is required");

    const user = await userSchema.findOne({
      email,
      otp: Number(otp),
      otpExpires: { $gt: new Date() },
      isVerified: false,
    });

    if (!user) return responseHandler.error(res, 400, "Invalid or expired OTP");

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    responseHandler.success(res, 200, "Email verified successfully");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


// ---------------- Resend OTP ----------------
const resentOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return responseHandler.error(res, 400, "Email is required");

    const user = await userSchema.findOne({ email, isVerified: false });
    if (!user) return responseHandler.error(res, 400, "User not found or already verified");

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 2 * 60 * 1000;

    await user.save();

    await sendEmail({
      email,
      subject: "Resend OTP",
      otp,
      template: emailTemplate,
    });

    responseHandler.success(res, 200, "OTP sent successfully to your email");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


// ---------------- Signin ----------------
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return responseHandler.error(res, 400, "Email is required");
    if (!isvelidEmail(email)) return responseHandler.error(res, 400, "Invalid email");
    if (!password) return responseHandler.error(res, 400, "Password is required");
    if (!isvalidPassword(password)) return responseHandler.error(res, 400, "Invalid password");

    const user = await userSchema.findOne({ email });
    if (!user) return responseHandler.error(res, 400, "User not found");

    const matchPass = await user.comparePassword(password);
    if (!matchPass) return responseHandler.error(res, 400, "Incorrect password");
    if (!user.isVerified) return responseHandler.error(res, 400, "Email is not verified");

    const AccTkn = generateAccTkn(user);
    const RefTkn = generateRefTkn(user);

    res.cookie("R-XS-Token", AccTkn, { httpOnly: true, secure: false, maxAge: 3600000 });
    res.cookie("R-RF-Token", RefTkn, { httpOnly: true, secure: false, maxAge: 3600000 });

    responseHandler.success(res, 200, "Signin successful");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


const forgetPass = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return responseHandler.error(res, 400, "Email is required");
    if (!isvelidEmail(email)) return responseHandler.error(res, 400, "Invalid email");

    const user = await userSchema.findOne({ email });
    if (!user) return responseHandler.error(res, 400, "User not found");

    const { resetToken, hashedToken } = generateRstTkn();

    user.resetPasstkn = hashedToken;
    user.resetExpires = Date.now() + 2 * 60 * 1000;
    await user.save();

    const resetLink = `${process.env.CLIENT_URL || "http://localhost:3000"}/auth/resetpass/${resetToken}`;
    await sendEmail({
      email,
      subject: "Reset Your Password",
      otp: resetLink,
      template: resetTamplate,
    });

    responseHandler.success(res, 200, "Password reset link sent to your email");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


const resetPass = async (req, res) => {
  try {
    const { newPass } = req.body;
    const { token } = req.params;

    if (!token) return responseHandler.error(res, 400, "Invalid reset token");
    if (!newPass) return responseHandler.error(res, 400, "New password is required");

    const hashedToken = hashRstTkn(token);

    const user = await userSchema.findOne({ resetPasstkn: hashedToken, resetExpires: { $gt: Date.now() } });
    if (!user) return responseHandler.error(res, 400, "Invalid or expired reset token");

    user.password = newPass;
    user.resetPasstkn = undefined;
    user.resetExpires = undefined;

    await user.save();

    responseHandler.success(res, 200, "Password updated successfully");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const GetUserProfile = async (req, res) => {
  try {
    const user = await userSchema.findById(req.user._id).select("-password -otp -otpExpires -resetExpires -resetPasstkn");
    if (!user) return responseHandler.error(res, 404, "User not found");

    responseHandler.success(res, 200, "User profile fetched successfully", user);
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { phone, fullName } = req.body;
    const avatar = req.file;
    const user = await userSchema.findById(req.user._id);

    if (!user) return responseHandler.error(res, 404, "User not found");

    if (avatar) {
      if (user.avatar) {
        const imgPublicId = user.avatar.split("/").pop().split(".")[0];
        await deletfromCloudinary(`avatar/${imgPublicId}`);
      }
      const response = await uplodecloudinary(avatar, "avatar");
      user.avatar = response.secure_url;
    }

    if (phone) user.phone = phone;
    if (fullName) user.fullName = fullName;

    await user.save();

    responseHandler.success(res, 200, "User profile updated successfully", user);
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};

const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.["R-RF-Token"] || req.headers.authorization;
    if (!refreshToken) return responseHandler.error(res, 400, "Refresh token missing");

    const decoded = verifyToken(refreshToken);
    if (!decoded) return responseHandler.error(res, 401, "Invalid refresh token");

    const accessToken = GenerateACCTkn(decoded);
    res.cookie("R-XS-Token", accessToken, { httpOnly: true, secure: false, maxAge: 3600000 });

    responseHandler.success(res, 200, "Access token refreshed successfully");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Internal Server Error");
  }
};


module.exports = {
  signup,
  verifyOtp,
  resentOtp,
  signin,
  forgetPass,
  resetPass,
  GetUserProfile,
  updateUserProfile,
  refreshAccessToken,
};