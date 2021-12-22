import path from "path";

import type { PlaywrightTestConfig } from "@playwright/test";

export default {
   preserveOutput: "always",
   testDir: "specs",
   testMatch: "**/*.spec.ts",
   retries: 2,
   timeout: 30 * 1000,
   outputDir: path.join(process.cwd(), "coverage", "out"),
   reporter: [
      [
         "html",
         {
            outputFolder: path.join(process.cwd(), "coverage", "html"),
            open: "never"
         }
      ],
      ["list"]
   ],
   use: {
      baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
      trace: "retry-with-trace"
   },
   webServer: {
      command: "pnpm dev --filter backend-gateway",
      port: 3000,
      timeout: 30 * 1000,
      reuseExistingServer: true,
      env: {
         PORT: 3000 as unknown
      }
   }
} as PlaywrightTestConfig;
