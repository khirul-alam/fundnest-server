import { errorResponse } from "../utils/response.js";

const notFound = (req, res) => {
  return errorResponse(res, "Route Not Found", 404);
};

export default notFound;