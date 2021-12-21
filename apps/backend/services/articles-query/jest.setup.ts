import mongoose from "mongoose";

import { getAllCollection } from "./src/mock/mongodb/articles.mock";
import { ArticleMongooseSchema } from "./src/app/app-model";

let connection: typeof mongoose | undefined;

beforeEach(async () => {
   connection = await mongoose.connect(process.env.MONGODB_URI, { dbName: "prensa" });
   await ArticleMongooseSchema.insertMany(getAllCollection(10));
});

afterEach(async () => {
   await connection.disconnect();
});
