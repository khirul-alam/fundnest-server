import express from "express";
import { successResponse } from "../utils/response.js";

const router = express.Router();

router.get("/", (req, res) => {
  return successResponse(
    res,
    {
      server: "FundNest Backend",
      status: "Running",
    },
    "Server is running successfully."
  );
});

export default router;