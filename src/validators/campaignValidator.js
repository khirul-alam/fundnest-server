const categories = [
  "Education",
  "Medical",
  "Technology",
  "Environment",
  "Disaster Relief",
  "Animal Welfare",
  "Community",
  "Startup",
  "Others",
];

export const validateCampaign = (data) => {
  const errors = [];

  // Title
  if (!data.title?.trim()) {
    errors.push("Campaign title is required.");
  } else if (data.title.length < 10) {
    errors.push("Campaign title must be at least 10 characters.");
  } else if (data.title.length > 100) {
    errors.push("Campaign title cannot exceed 100 characters.");
  }

  // Description
  if (!data.description?.trim()) {
    errors.push("Campaign description is required.");
  } else if (data.description.length < 50) {
    errors.push("Description must be at least 50 characters.");
  } else if (data.description.length > 3000) {
    errors.push("Description cannot exceed 3000 characters.");
  }

  // Category
  if (!data.category) {
    errors.push("Category is required.");
  } else if (!categories.includes(data.category)) {
    errors.push("Invalid campaign category.");
  }

  // Goal Amount
  if (data.goalAmount === undefined || data.goalAmount === null) {
    errors.push("Goal amount is required.");
  } else if (isNaN(data.goalAmount)) {
    errors.push("Goal amount must be a number.");
  } else if (Number(data.goalAmount) < 100) {
    errors.push("Minimum goal amount is 100.");
  }

  // Image
  if (!data.image?.trim()) {
    errors.push("Campaign image is required.");
  }

  // Creator Name
  if (!data.creatorName?.trim()) {
    errors.push("Creator name is required.");
  }

  // Creator Email
  if (!data.creatorEmail?.trim()) {
    errors.push("Creator email is required.");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.creatorEmail)) {
      errors.push("Invalid email address.");
    }
  }

  // Deadline
  if (!data.deadline) {
    errors.push("Deadline is required.");
  } else {
    const deadline = new Date(data.deadline);

    if (deadline <= new Date()) {
      errors.push("Deadline must be a future date.");
    }
  }

  return {
    success: errors.length === 0,
    errors,
  };
};