import mongoose from "mongoose";

import { getAllCollection } from "./src/mock/mongodb/articles.mock";
import { ArticleMongooseSchema } from "./src/app/app-model";

let connection: typeof mongoose | undefined;

beforeAll(async () => {
   connection = await mongoose.connect(process.env.MONGODB_URI, { dbName: "prensa" });
   await ArticleMongooseSchema.insertMany(getAllCollection(10));
});

afterAll(async () => {
   await mongoose.connection.db.dropDatabase();
   await connection.disconnect();
});
