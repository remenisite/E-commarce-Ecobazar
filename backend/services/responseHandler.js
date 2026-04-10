const sendError = (
  res,
  message = "Internal Server Error",
  statusCode = 500,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const sendSuccess = (
  res,
  message = "Success",
  dataOrStatusCode = null,
  statusCode = 200,
) => {
  // Handle case where data is omitted and statusCode is passed as 3rd param
  let data = dataOrStatusCode;
  let finalStatusCode = statusCode;

  if (typeof dataOrStatusCode === "number") {
    data = null;
    finalStatusCode = dataOrStatusCode;
  }

  if (data) {
    return res.status(finalStatusCode).json({
      success: true,
      message,
      data,
    });
  }
  return res.status(finalStatusCode).json({
    success: true,
    message,
  });
};

module.exports = { sendError, sendSuccess };
