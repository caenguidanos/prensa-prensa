import mongoose from "mongoose";

export async function connectClient(): Promise<void> {
   const uri = process.env.MONGODB_URI;

   if (!uri) {
      throw new Error("Invalid URI for MongoDB connection.");
   }

   await mongoose.connect(uri, { dbName: "prensa" });
}
