import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import { connectClient } from "@workspace/domain-articles-driver";

import { controller } from "./app-controller";
import { backendSign, methods } from "./app-middleware";

export async function createApp(): Promise<Express> {
   try {
      const server = express();

      server.use(helmet());
      server.use(cors());
      server.use(compression());
      server.use(morgan("tiny"));

      server.use("/v1", methods(["GET"]), backendSign("services-articles-query"), controller);

      await connectClient();

      return server;
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
}
