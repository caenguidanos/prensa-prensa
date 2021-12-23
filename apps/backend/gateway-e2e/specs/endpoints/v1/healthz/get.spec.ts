import { test, expect } from "@playwright/test";

test.describe("v1 healthz", () => {
   test("should return ok from backends", async ({ request }) => {
      const responses = await Promise.all([
         request.get("/v1/healthz"),
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

      const headersSet = new Set();

      for (const h of responses) {
         expect(h.ok()).toBe(true);

         const headers = h.headers();
         headersSet.add(headers["x-backend"]);
      }

      expect(headersSet.size).toBe(2);
   });
});
