import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import indexRoutes from "./routes/index.js";

dotenv.config();

const app = express();

// ======================
// Middlewares
// ======================

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// ======================
// Routes
// ======================

app.use("/", indexRoutes);

// ======================
// 404 Route
// ======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;