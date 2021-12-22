import { test, expect } from "@playwright/test";

test.describe("v1 healthz", () => {
   test("should not accept PUT method", async ({ request }) => {
      const response = await request.put("/v1/healthz");

      expect(response.ok()).toBe(false);
      expect(response.status()).toBe(405);
   });

   test("should not accept POST method", async ({ request }) => {
      const response = await request.post("/v1/healthz");

      expect(response.ok()).toBe(false);
      expect(response.status()).toBe(405);
   });

   test("should not accept PATCH method", async ({ request }) => {
      const response = await request.patch("/v1/healthz");

      expect(response.ok()).toBe(false);
      expect(response.status()).toBe(405);
   });

   test("should not accept DELETE method", async ({ request }) => {
      const response = await request.delete("/v1/healthz");

      expect(response.ok()).toBe(false);
      expect(response.status()).toBe(405);
   });

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
