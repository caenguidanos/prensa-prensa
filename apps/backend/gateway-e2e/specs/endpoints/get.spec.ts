import { test, expect } from "@playwright/test";

test.describe("v1 healthz", () => {
   test("should get healthy backends by round-robin", async ({ request }) => {
      const backendHeaders = new Set();

      const responses = await Promise.all([
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz"),
         request.get("/v1/healthz")
      ]);

      for (const r of responses) {
         expect(r.ok()).toBe(true);
         const headers = r.headers();
         backendHeaders.add(headers["x-backend"]);
      }

      expect(backendHeaders.size).toBe(2);
   });
});
