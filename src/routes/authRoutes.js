import express from "express";
import { createJWT } from "../controllers/authController.js";

const router = express.Router();

router.post("/jwt", createJWT);

export default router;