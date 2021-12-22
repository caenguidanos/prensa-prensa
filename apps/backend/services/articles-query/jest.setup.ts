import mongoose from "mongoose";

import { createCollection } from "./src/mock/mongodb/articles.mock";
import { schemaDriver } from "./src/app/app-model";

let connection: typeof mongoose | undefined;

beforeAll(async () => {
   connection = await mongoose.connect(process.env.MONGODB_URI, { dbName: "prensa" });
   await schemaDriver.insertMany(createCollection(10));
});

afterAll(async () => {
   await mongoose.connection.db.dropDatabase();
   await connection.disconnect();
});
