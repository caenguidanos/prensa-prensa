import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import v1AppController from "./v1/app-v1.controller.js";

export function start() {
   try {
      const server = express();

      server.use(helmet());
      server.use(cors());
      server.use(compression());
      server.use(morgan("tiny"));

      server.use("/v1", v1AppController);

      const PORT = process.env.PORT || 3000;

      return server.listen(PORT, () => {
         console.log(`Listening :${PORT}`);
      });
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
}
