import express from "express";
import { getFeaturedCampaigns } from "../controllers/campaignController.js";

const router = express.Router();

router.get("/featured", getFeaturedCampaigns);

export default router;