const { verifyTkn } = require("../services/helpers");
const { responseHandler } = require("../utils/responseHandler");


const authMidlleware = async (req, res, next) => {
  try {
    const token = req.cookies;
    if (!token["X-AS-Tkn"]) return responseHandler.error(res, 400, "Invalid Request");
    const decoded = verifyTkn(token["X-AS-Tkn"]);
    if (!decoded) return responseHandler.error(res, 400, "Invalid Request");
    req.user = decoded;
    next();
  } catch (error) {
    responseHandler.error(res, "Something went wrong", 500);
  }
};

module.exports = { authMidlleware };
