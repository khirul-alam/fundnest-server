import express from "express";

import authRoutes from "./authRoutes.js";

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

router.use("/auth", authRoutes);

export default router;