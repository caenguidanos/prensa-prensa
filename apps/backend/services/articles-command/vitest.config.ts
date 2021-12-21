import { defineConfig } from "vite";

export default defineConfig({
   test: {
      testTimeout: 30 * 1000,
      setupFiles: ["./vitest.setup.ts"]
   }
});
