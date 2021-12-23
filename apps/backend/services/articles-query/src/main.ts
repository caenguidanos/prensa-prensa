import process from "process";

import { createApp } from "./app/server";

async function bootstrap() {
   const PORT = process.env.PORT || 4001;
   
   if (process.env.NODE_ENV === "development") {
      const dotenv = await import("dotenv");
      dotenv.config();

      const { default: mongodbSetup } = await import("./mock/mongodb/app/global-setup");
      const { default: mongodbTeardown } = await import("./mock/mongodb/app/global-teardown");

      await mongodbSetup();

      const app = await createApp();   

      const server = app.listen(PORT, () => console.log(`Listening :${PORT}`));

      server.on("close", async () => {
         await mongodbTeardown();
      });
   }
   
   if (process.env.NODE_ENV === "production") {
      const app = await createApp();

      app.listen(PORT, () => console.log(`Listening :${PORT}`))
   }
}

if (require.main == module) {
   bootstrap();
}
