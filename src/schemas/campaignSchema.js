export const campaignSchema = {
  title: {
    type: "string",
    required: true,
    minLength: 10,
    maxLength: 100,
  },

  slug: {
    type: "string",
    required: true,
  },

  description: {
    type: "string",
    required: true,
    minLength: 50,
    maxLength: 3000,
  },

  category: {
    type: "string",
    required: true,
  },

  goalAmount: {
    type: "number",
    required: true,
    min: 100,
  },

  raisedAmount: {
    type: "number",
    default: 0,
  },

  image: {
    type: "string",
    required: true,
  },

  creatorName: {
    type: "string",
    required: true,
  },

  creatorEmail: {
    type: "string",
    required: true,
  },

  deadline: {
    type: "date",
    required: true,
  },

  status: {
    type: "string",
    default: "pending",
  },

  createdAt: {
    type: "date",
  },

  updatedAt: {
    type: "date",
  },
};