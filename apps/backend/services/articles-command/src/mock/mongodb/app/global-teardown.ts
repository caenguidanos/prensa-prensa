import type { MongoMemoryServer } from "mongodb-memory-server";

export default async function globalTeardown() {
   const instance: MongoMemoryServer = globalThis.__MONGO__;
   await instance.stop();
}
