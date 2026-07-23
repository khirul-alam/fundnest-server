import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const COLLECTION = "campaigns";

// Create Campaign
export const createCampaign = async (campaignData) => {
  const db = getDB();

  const result = await db.collection(COLLECTION).insertOne({
    ...campaignData,
    raisedAmount: 0,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result;
};

// Get All Campaigns
export const getAllCampaigns = async () => {
  const db = getDB();

  return await db
    .collection(COLLECTION)
    .find()
    .sort({ createdAt: -1 })
    .toArray();
};

// Get Campaign By ID
export const getCampaignById = async (id) => {
  const db = getDB();

  return await db.collection(COLLECTION).findOne({
    _id: new ObjectId(id),
  });
};

// Delete Campaign
export const deleteCampaign = async (id) => {
  const db = getDB();

  return await db.collection(COLLECTION).deleteOne({
    _id: new ObjectId(id),
  });
};
// ==========================================
// Get Featured Campaigns
// ==========================================

export const getFeaturedCampaigns = async () => {
  const db = getDB();

  return await db
    .collection(COLLECTION)
    .find(
      { status: "pending" },
      {
        projection: {
          title: 1,
          category: 1,
          image: 1,
          goalAmount: 1,
          raisedAmount: 1,
          deadline: 1,
          creatorName: 1,
        },
      }
    )
    .sort({ createdAt: -1 })
    .limit(6)
    .toArray();
};
// ==========================================
// Get Latest Campaigns
// ==========================================

export const getLatestCampaigns = async () => {
  const db = getDB();

  return await db
    .collection(COLLECTION)
    .find(
      { status: "pending" },
      {
        projection: {
          title: 1,
          category: 1,
          image: 1,
          goalAmount: 1,
          raisedAmount: 1,
          deadline: 1,
          creatorName: 1,
        },
      }
    )
    .sort({ createdAt: -1 })
    .limit(8)
    .toArray();
};
// ==========================================
// Get Ending Soon Campaigns
// ==========================================

export const getEndingSoonCampaigns = async () => {
  const db = getDB();

  return await db
    .collection(COLLECTION)
    .find(
      {
        status: "pending",
        deadline: {
          $gte: new Date().toISOString().split("T")[0],
        },
      },
      {
        projection: {
          title: 1,
          category: 1,
          image: 1,
          goalAmount: 1,
          raisedAmount: 1,
          deadline: 1,
          creatorName: 1,
        },
      }
    )
    .sort({ deadline: 1 })
    .limit(6)
    .toArray();
};