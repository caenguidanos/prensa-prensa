import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import { controller } from "./app-controller";
import { methods } from "./app-middleware";

import * as mongodbConfig from "./config/mongo-db.config";

export async function createApp(): Promise<Express> {
   try {
      const server = express();

      server.use(helmet());
      server.use(cors());
      server.use(compression());
      server.use(morgan("tiny"));

      server.use("/v1", methods(["GET"]), controller);

      await mongodbConfig.connectClient();

      return server;
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
}
