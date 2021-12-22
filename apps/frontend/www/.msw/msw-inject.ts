if (process.env.NODE_ENV !== "production") {
   if (typeof window === "undefined") {
      const { server } = await import("./msw-server");
      const { createDb } = await import("./msw-data");

      createDb();
      server.listen();
   } else {
      const { worker } = await import("./msw-browser");
      const { createDb } = await import("./msw-data");

      createDb();
      await worker.start();
   }
}

export {};
