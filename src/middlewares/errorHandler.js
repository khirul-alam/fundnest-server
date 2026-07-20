import { errorResponse } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  return errorResponse(
    res,
    err.message || "Internal Server Error",
    err.statusCode || 500
  );
};

export default errorHandler;