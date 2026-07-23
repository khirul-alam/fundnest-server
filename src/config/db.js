import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db = null;

// Connect MongoDB
export const connectDB = async () => {
  try {
    await client.connect();

    db = client.db("fundnestDB");

    await db.command({ ping: 1 });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
    process.exit(1);
  }
};

// Get Database Instance
export const getDB = () => {
  if (!db) {
    throw new Error("Database not connected.");
  }

  return db;
};