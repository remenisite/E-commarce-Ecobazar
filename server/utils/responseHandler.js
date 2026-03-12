const responseHandler = {
  success: (res, statusCode = 200, message = "Success", data = null) => {
    return res.status(statusCode).json({
      success: true,
      message,
      ...(data && { data }),
    });
  },

  error: (res, statusCode = 500, message = "Error", error = null) => {
    return res.status(statusCode).json({
      success: false,
      message,
      ...(error && { error }),
    });
  },
};

module.exports = { responseHandler };
