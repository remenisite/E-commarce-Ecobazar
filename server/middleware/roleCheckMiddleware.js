const { responseHandler } = require("../utils/responseHandler");

const roleCheckMiddleware = (...roles) => {
  return (req, res, next) => {
    try {
      if (roles.includes(req.user.role)) {
        return next();
      }
      return responseHandler.error(res, 400, "Invalid Request");
    } catch (error) {
      return responseHandler.error(res, 400, "Invalid Request");
    }
  };
};

module.exports = roleCheckMiddleware;
