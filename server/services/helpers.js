const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

const generateAccTkn = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_TKN,
    { expiresIn: "1h" },
  );
};

const generateRefTkn = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_TKN,
    { expiresIn: "15d" },
  );
};

const generateRstPassTkn = (user) => {
    const resetToken = crypto.randomBytes(16).toString("hex");
      const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  return { resetToken, hashedToken };
};

const hashResetToken = (token) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  return hashedToken;
};

const verifyTkn = (token) => {
  try {
    var decoded = jwt.verify(token, process.env.JWT_TKN);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = { generateOTP, generateAccTkn, generateRefTkn, verifyTkn , generateRstPassTkn , hashResetToken };
