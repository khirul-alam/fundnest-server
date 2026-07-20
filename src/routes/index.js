import express from "express";

const router = express.Router();

// Health Check Route
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FundNest Server is Running...",
    version: "1.0.0",
  });
});

export default router;