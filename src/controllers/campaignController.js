import {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  getFeaturedCampaigns,
  getLatestCampaigns,
  getEndingSoonCampaigns,
} from "../services/campaignService.js";

import { validateCampaign } from "../validators/campaignValidator.js";

import {
  successResponse,
  errorResponse,
} from "../utils/response.js";

/**
 * ==========================================
 * Create Campaign
 * POST /api/v1/campaigns
 * ==========================================
 */
export const createCampaignController = async (req, res) => {
  try {
    // Validate Request Body
    const validation = validateCampaign(req.body);

    if (!validation.success) {
      return errorResponse(
        res,
        "Validation Failed",
        400,
        validation.errors
      );
    }

    // Save Campaign
    const result = await createCampaign(req.body);

    return successResponse(
      res,
      result,
      "Campaign created successfully.",
      201
    );
  } catch (error) {
    console.error("Create Campaign Error:", error);

    return errorResponse(
      res,
      "Failed to create campaign.",
      500,
      error.message
    );
  }
};

/**
 * ==========================================
 * Get All Campaigns
 * GET /api/v1/campaigns
 * ==========================================
 */
export const getAllCampaignsController = async (req, res) => {
  try {
    const campaigns = await getAllCampaigns();

    return successResponse(
      res,
      campaigns,
      "Campaigns fetched successfully."
    );
  } catch (error) {
    console.error("Get Campaigns Error:", error);

    return errorResponse(
      res,
      "Failed to fetch campaigns.",
      500,
      error.message
    );
  }
};

/**
 * ==========================================
 * Get Campaign By ID
 * GET /api/v1/campaigns/:id
 * ==========================================
 */
export const getCampaignByIdController = async (req, res) => {
  try {
    const campaign = await getCampaignById(req.params.id);

    if (!campaign) {
      return errorResponse(
        res,
        "Campaign not found.",
        404
      );
    }

    return successResponse(
      res,
      campaign,
      "Campaign fetched successfully."
    );
  } catch (error) {
    console.error("Get Campaign Error:", error);

    return errorResponse(
      res,
      "Failed to fetch campaign.",
      500,
      error.message
    );
  }
};
/**
 * ==========================================
 * Get Featured Campaigns
 * GET /api/v1/campaigns/featured
 * ==========================================
 */

export const getFeaturedCampaignsController = async (req, res) => {
  try {
    const campaigns = await getFeaturedCampaigns();

    return successResponse(
      res,
      campaigns,
      "Featured campaigns fetched successfully."
    );
  } catch (error) {
    console.error("Featured Campaign Error:", error);

    return errorResponse(
      res,
      "Failed to fetch featured campaigns.",
      500,
      error.message
    );
  }
};
/**
 * ==========================================
 * Get Latest Campaigns
 * GET /api/v1/campaigns/latest
 * ==========================================
 */

export const getLatestCampaignsController = async (req, res) => {
  try {
    const campaigns = await getLatestCampaigns();

    return successResponse(
      res,
      campaigns,
      "Latest campaigns fetched successfully."
    );
  } catch (error) {
    console.error("Latest Campaign Error:", error);

    return errorResponse(
      res,
      "Failed to fetch latest campaigns.",
      500,
      error.message
    );
  }
};
/**
 * ==========================================
 * Get Ending Soon Campaigns
 * GET /api/v1/campaigns/ending-soon
 * ==========================================
 */

export const getEndingSoonCampaignsController = async (req, res) => {
  try {
    const campaigns = await getEndingSoonCampaigns();

    return successResponse(
      res,
      campaigns,
      "Ending soon campaigns fetched successfully."
    );
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      "Failed to fetch ending soon campaigns.",
      500,
      error.message
    );
  }
};