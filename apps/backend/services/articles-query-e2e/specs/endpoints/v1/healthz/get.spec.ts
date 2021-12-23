import { test, expect } from "@playwright/test";

test.describe("v1 healthz", () => {
   test("should be set x-backend header", async ({ request }) => {
      const response = await request.get("/v1");

      const headers = response.headers();

      expect(headers).toHaveProperty("x-backend", "services-articles-query");
   });

   test("should return OK", async ({ request }) => {
      const response = await request.get("/v1/healthz");

      expect(response.ok()).toBe(true);

      const body = await response.text();
      expect(body).toBe("OK");
   });
});
