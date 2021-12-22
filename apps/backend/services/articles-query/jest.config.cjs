module.exports = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   testMatch: ["**/src/**/*.spec.ts"],
   globalSetup: "<rootDir>/jest.global-setup.ts",
   globalTeardown: "<rootDir>/jest.global-teardown.ts",
   passWithNoTests: true,
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: ["src/app/**/*.ts"],
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
   preset: "ts-jest/presets/default-esm"
};
