import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import indexRoutes from "./routes/index.js";

import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

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

app.use("/api/v1", indexRoutes);

// ======================
// 404 Middleware
// ======================

app.use(notFound);

// ======================
// Global Error Handler
// ======================

app.use(errorHandler);

export default app;