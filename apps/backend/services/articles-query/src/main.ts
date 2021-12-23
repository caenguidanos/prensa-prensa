import process from "process";

import { createApp } from "./app/server";

async function bootstrap(): Promise<void> {
   const PORT = process.env.PORT || 4001;

   if (process.env.NODE_ENV === "test") {
      const app = await createApp();

      app.listen(PORT);
   }

   if (process.env.NODE_ENV === "development") {
      const dotenv = await import("dotenv");
      dotenv.config();

      const { mongodbMemoryServer } = await import("./mock/mongodb/server.mock");
      const mongodbMemoryServerInstance = await mongodbMemoryServer();
      await mongodbMemoryServerInstance.setup();

      const app = await createApp();

      app.listen(PORT).on("close", async () => {
         await mongodbMemoryServerInstance.teardown();
      });
   }

   if (process.env.NODE_ENV === "production") {
      const app = await createApp();

      app.listen(PORT);
   }
}

if (require.main === module) {
   bootstrap();
}
