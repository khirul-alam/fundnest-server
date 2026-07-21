import { successResponse } from "../utils/response.js";

export const getFeaturedCampaigns = async (req, res) => {
  const campaigns = [
    {
      id: 1,
      title: "Build a Smart Village Library",
      category: "Education",
      image:
        "https://picsum.photos/600/400?random=1",
      raised: 7500,
      goal: 10000,
    },
    {
      id: 2,
      title: "Plant One Million Trees",
      category: "Environment",
      image:
        "https://picsum.photos/600/400?random=2",
      raised: 5200,
      goal: 10000,
    },
    {
      id: 3,
      title: "Healthcare For Everyone",
      category: "Healthcare",
      image:
        "https://picsum.photos/600/400?random=3",
      raised: 8900,
      goal: 12000,
    },
  ];

  return successResponse(
    res,
    campaigns,
    "Featured campaigns fetched successfully."
  );
};