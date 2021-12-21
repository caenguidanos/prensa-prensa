import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export default async function globalSetup() {
   const instance = await MongoMemoryServer.create();
   const uri = instance.getUri();

   globalThis.__MONGO__ = instance;

   process.env.MONGODB_URI = uri.slice(0, uri.lastIndexOf("/"));

   await mongoose.connect(`${process.env.MONGODB_URI}`, { dbName: "prensa" });
   await mongoose.connection.db.dropDatabase();
   await mongoose.disconnect();
}