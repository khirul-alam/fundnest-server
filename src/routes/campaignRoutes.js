import express from "express";

import {
  createCampaignController,
  getAllCampaignsController,
  getCampaignByIdController,
  getFeaturedCampaignsController,
  getLatestCampaignsController,
  getEndingSoonCampaignsController,
} from "../controllers/campaignController.js";

const router = express.Router();

// ==========================================
// Create Campaign
// POST /api/v1/campaigns
// ==========================================
router.post("/", createCampaignController);

// ==========================================
// Featured Campaigns
// GET /api/v1/campaigns/featured
// ==========================================
router.get("/featured", getFeaturedCampaignsController);

// ==========================================
// Latest Campaigns
// GET /api/v1/campaigns/latest
// ==========================================
router.get("/latest", getLatestCampaignsController);

// ==========================================
// Ending Soon Campaigns
// GET /api/v1/campaigns/ending-soon
// ==========================================
router.get("/ending-soon", getEndingSoonCampaignsController);

// ==========================================
// Get All Campaigns
// GET /api/v1/campaigns
// ==========================================
router.get("/", getAllCampaignsController);

// ==========================================
// Get Single Campaign
// GET /api/v1/campaigns/:id
// ==========================================
router.get("/:id", getCampaignByIdController);

export default router;