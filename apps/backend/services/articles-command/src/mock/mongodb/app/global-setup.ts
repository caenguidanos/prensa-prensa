import { MongoMemoryServer } from "mongodb-memory-server";

import {
   schemaDriver,
   connectClient,
   dropClientDatabase,
   disconnectClient,
   generateRandomCollection
} from "@workspace/domain-articles-driver";

export default async function globalSetup() {
   const instance = await MongoMemoryServer.create();

   const uri = instance.getUri();

   globalThis.__MONGO__ = instance;

   process.env.MONGODB_URI = uri.slice(0, uri.lastIndexOf("/"));

   const client = await connectClient();
   await dropClientDatabase();
   await disconnectClient(client);

   await connectClient();
   await schemaDriver().insertMany(generateRandomCollection(10));
}
