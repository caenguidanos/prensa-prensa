const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   testMatch: ["**/src/lib/**/*.spec.{ts,tsx}"],
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: [
      "src/lib/**/*.{ts,tsx}",
      "!**/mock/**",
      "!**/entity/**",
      "!**/msw/**",
      "!**/api/**",
      "!**/index.ts", // lib entrypoint,
      "!**/*.stories.*"
   ],
   coverageDirectory: "./coverage/jest",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 0, // 🔥
         functions: 0, // 🔥
         lines: 0, // 🔥
         statements: 0 // 🔥
      }
   },
   moduleNameMapper: {
      "^\\$msw/server$": "<rootDir>/msw/msw-server.ts",
      "^\\$msw/data$": "<rootDir>/msw/msw-data.ts",
      "^\\$stitches$": "<rootDir>/stitches.config.ts",
      "^\\$lib/(.*)$": "<rootDir>/src/lib/$1"
   }
};

module.exports = createJestConfig(customJestConfig);
