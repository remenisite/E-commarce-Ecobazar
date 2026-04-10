const jwt = require("jsonwebtoken");
// const { use } = require("react");
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
    process.env.JWT_SEC,
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
    process.env.JWT_SEC,
    { expiresIn: "15d" },
  );
};
const generateRstTkn = () => {
  const resetToken = crypto.randomBytes(16).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  return { resetToken, hashedToken };

  // return Buffer.from(`${user}`).toString("base64"); // ---- create vuffer
};
const hashRstTkn = (token) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  return hashedToken;
};

const verifyRstTkn = (token) => {
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  return { hashedToken };
  // return Buffer.from(VerifyTkn, "base64").toString("utf-8").split(":");
};

const VerifyTkn = (token) => {
  try {
    var decoded = jwt.verify(token, process.env.JWT_SEC);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateOTP,
  generateAccTkn,
  generateRefTkn,
  VerifyTkn,
  generateRstTkn,
  verifyRstTkn,
  hashRstTkn,
};
