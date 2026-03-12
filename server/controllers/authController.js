const userSchema = require("../models/userSchema");
const { isvelidEmail, isvalidPassword } = require("../utils/authValidation");
const { sendEmail } = require("../services/emailServices");
const { emailTemp } = require("../services/emailTemp");
const upload = require("../middleware/uploadMiddleware");
const {
  generateOTP,
  generateAccTkn,
  generateRefTkn,
  generateRstPassTkn,
  hashResetToken,
  verifyTkn,
} = require("../services/helpers");
const { responseHandler } = require("../utils/responseHandler");
const { uploadtoCloude, deleteToCloude } = require("../services/cloudinaryServices");

const signup = async (req, res) => {
  try {
    const { fullName, email, password, phone, address } = req.body;
    if (!email) responseHandler.error(res, 400, "give email");
    if (!isvelidEmail(email))
      return responseHandler.error(res, 400, "give valid email");
    if (!password) return responseHandler.error(res, 400, "give password");
    if (!isvalidPassword(password))
      return responseHandler.error(res, 400, "give Storng password");
    const exixtingUser = await userSchema.findOne({ email });
    if (exixtingUser)
      return responseHandler.error(res, 400, "user already exixst");

    const genOtp = generateOTP();
    const user = new userSchema({
      fullName,
      email,
      password,
      phone,
      address,
      otp: genOtp,
      otpExpires: Date.now() + 2 * 60 * 1000,
    });
    sendEmail({
      email,
      subject: "Email Verification",
      otp: genOtp,
      template: emailTemp,
    });
    user.save();

    responseHandler.success(
      res,
      201,
      "new user created , please verify your email",
    );
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp, email } = req.body;
    if (!otp) return responseHandler.error(res, 400, "Otp is required");
    if (!email) return responseHandler.error(res, 400, "Invalid requiest");
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
    user.save();
    responseHandler.success(res, 200, "Verified successfully");
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500, err.message);
  }
};

const resentOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return responseHandler.error(res, 400, "Invalid requiest");
    const user = await userSchema.findOne({
      email,
      isVerified: false,
    });
    if (!user) return responseHandler.error(res, 400, "Invalid or expired OTP");
    const genOtp = generateOTP();
    ((user.otp = genOtp),
      (user.otpExpires = Date.now() + 2 * 60 * 1000),
      user.save());
    sendEmail({
      email,
      subject: "Email Verification",
      otp: genOtp,
      tempalate: emailTemp,
    });
    responseHandler.success(res, 200, "Otp send to your email successfully.");
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return responseHandler.error(res, 400, "give email");
    if (!isvelidEmail(email))
      return responseHandler.error(res, 400, "give valid email");
    if (!password) return responseHandler.error(res, 400, "give password");
    if (!isvalidPassword(password))
      return responseHandler.error(res, 400, "give valid password");
    const exixtingUser = await userSchema.findOne({ email });
    if (!exixtingUser) return responseHandler.error(res, 400, "user not found");
    const matchPass = await exixtingUser.comparePassword(password);
    if (!matchPass) return responseHandler.error(res, 400, "Wrong Password");
    if (!exixtingUser.isVerified)
      return responseHandler.error(res, 400, "Email is not verified.");
    const accTkn = generateAccTkn(exixtingUser);
    const refTkn = generateRefTkn(exixtingUser);
    res.cookie("X-AS-Tkn", accTkn, {
      httpOnly: false,
      secure: false,
      maxAge: 3600000,
    });
    res.cookie("X-RF-Tkn", refTkn, {
      httpOnly: false,
      secure: false,
      maxAge: 3600000,
    });
    responseHandler.success(res, 200, "signin Successfull");
  } catch (error) {
    console.log(error);
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const forgatePass = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) responseHandler.error(res, 400, "give email");
    if (!isvelidEmail(email))
      return responseHandler.error(res, 400, "give valid email");
    if (!password) return responseHandler.error(res, 400, "give password");
    if (!isvalidPassword(password))
      return responseHandler.error(res, 400, "give Storng password");
    const exixtingUser = await userSchema.findOne({ email });
    if (!exixtingUser)
      return responseHandler.error(res, 400, "Email is not registered");
    const { resetToken, hashedToken } = generateRstPassTkn();
    exixtingUser.resetPassTkn = hashedToken;
    exixtingUser.resetExpires = Date.now() + 2 * 60 * 1000;
    exixtingUser.save();
    const RESET_PASSWORD_LINK = `${process.env.CLIENT_URL || "http://localhost:3000"}/auth/resetpass/${resetToken}`;
    sendEmail({
      email,
      subject: "Reset Your Password",
      otp: RESET_PASSWORD_LINK,
      tempalate: emailTemp.resetPassEmailTemp,
    });
    responseHandler.success(
      res,
      200,
      "Find the reset password link in your email",
      true,
    );
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { token } = req.params;
    if (!newPassword)
      return responseHandler.error(res, 400, "New Password is required");
    if (!token) return responseHandler.error(res, 404, "Page not found");
    const hashedToken = hashResetToken(token);
    const exixtingUser = await userSchema.findOne({
      resetPassTkn: hashedToken,
      resetExpires: { $gt: Date.now() },
    });
    if (!exixtingUser)
      return responseHandler.error(res, 400, "Invalid Request");
    exixtingUser.password = newPassword;
    exixtingUser.resetPassTkn = undefined;
    exixtingUser.resetExpires = undefined;
    exixtingUser.save();

    responseHandler.success(res, 200, "Password updated successfylly");
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userProfile = await userSchema
      .findById(req.user._id)
      .select(
        "-password -otp -otpExpires -resetPassToken -resetExpire -updatedAt",
      );
    if (!userProfile) return responseHandler.error(res, 400, "Invalid Request");

    responseHandler.success(res, 200, "", userProfile);
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { fullName, phone, address } = req.body;
    const userId = req.user._id;
    const avatar = req.file
    const user = await userSchema.findById(userId).select("-password -otp -otpExpires -resetPassToken -resetExpire -updatedAt")
    if (avatar) {
      const imgPublicId = user.avatar.split("/").pop().split(".")[0];
      deleteToCloude(`avatar/${imgPublicId}`);
      const ImgRes = await uploadtoCloude(avatar , "avatar");
      user.avatar = ImgRes.secure_url;
    }
    user.save()
    if (fullName) user.fullName = fullName;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    responseHandler.success(res, 201, "", user);
  } catch (error) {
    console.log(error);
    responseHandler.error(res, 500, "Something went wrong");
  }
};

const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.["X-RF-Tkn"] || req.headers.authorization;
    if (!refreshToken) return responseHandler.error(res , 401 , "Refresh token missing")
    const decoded = verifyTkn(refreshToken)
    if(!decoded) return;
    const accessToken = generateAccTkn(decoded)

        res.cookie("X-AS-Tkn", accTkn, {
      httpOnly: false,
      secure: false,
      maxAge: 3600000,
    }).send({success: true});
  } catch (error) {
    console.log(error);
     responseHandler.error(res, 500, "Something went wrong");

  }
};

module.exports = {
  signup,
  verifyOtp,
  resentOtp,
  signin,
  forgatePass,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  refreshAccessToken
};
