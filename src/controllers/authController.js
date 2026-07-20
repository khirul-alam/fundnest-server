import { generateToken } from "../utils/jwt.js";
import { successResponse } from "../utils/response.js";

export const createJWT = async (req, res) => {
  const user = req.body;

  const token = generateToken({
    email: user.email,
  });

  return successResponse(
    res,
    {
      token,
    },
    "JWT Generated Successfully"
  );
};