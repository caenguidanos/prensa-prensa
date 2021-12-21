import url from "url";
import process from "process";

import { start } from "./app/server.js";

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
   if (process.env.NODE_ENV !== "production") {
      const { config } = await import("dotenv");
      config();
   }

   start();
}
