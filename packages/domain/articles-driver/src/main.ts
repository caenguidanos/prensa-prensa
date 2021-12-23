import * as faker from "faker";
import { Schema, model, connect, connection, isValidObjectId } from "mongoose";

import type { Article } from "@workspace/domain-articles";

const MODEL_NAME = "article";

export type MongooseConnection = typeof import("mongoose");

const schema = new Schema<Omit<Article, "date">>({
   title: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   description: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   content: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   author: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   archiveDate: {
      type: String,
      trim: true,
      unique: false,
      required: false,
      default: null
   }
});

schema.set("timestamps", true);

export const schemaDriver = () => model(MODEL_NAME, schema);

export const isValidMongooseObjectId = isValidObjectId;

export async function connectClient(): Promise<typeof import("mongoose")> {
   const uri = process.env.MONGODB_URI;

   if (!uri) {
      throw new Error("Invalid URI for MongoDB connection.");
   }

   return connect(uri, { dbName: "prensa" });
}

export async function dropClientDatabase(): Promise<void> {
   await connection.db.dropDatabase();
}

export async function disconnectClient(client: typeof import("mongoose")): Promise<void> {
   await client.disconnect();
}

export function generateRandomCollection(q: number): Omit<Article, "date">[] {
   const collection = [];

   for (let i = 0; i < q; i++) {
      collection.push({
         title: faker.commerce.productName(),
         description: faker.commerce.productDescription(),
         content: faker.name.jobDescriptor(),
         author: faker.name.firstName(),
         archiveDate: null
      });
   }

   return collection;
}
