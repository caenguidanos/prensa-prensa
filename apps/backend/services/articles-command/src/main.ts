import url from "url";
import process from "process";

import { createApp } from "./app/server";

const isExecuted: boolean = process.argv[1] === url.fileURLToPath(import.meta.url);

if (isExecuted) {
   if (process.env.NODE_ENV === "test") {
      const app = await createApp();

      const PORT = process.env.PORT || 3000;

      app.listen(PORT, async () => {
         console.log(`Listening :${PORT}`);
      });
   }

   if (process.env.NODE_ENV === "development") {
      const dotenv = await import("dotenv");

      dotenv.config();

      const { default: mongodbSetup } = await import("./mock/mongodb/app/global-setup");
      const { default: mongodbTeardown } = await import("./mock/mongodb/app/global-teardown");

      await mongodbSetup();

      const app = await createApp();

      const PORT = process.env.PORT || 3000;

      const server = app.listen(PORT, async () => {
         console.log(`Listening :${PORT}`);
      });

      server.on("close", async () => {
         await mongodbTeardown();
      });
   }

   if (process.env.NODE_ENV === "production") {
      const app = await createApp();

      const PORT = process.env.PORT || 3000;

      app.listen(PORT, async () => {
         console.log(`Listening :${PORT}`);
      });
   }
}
