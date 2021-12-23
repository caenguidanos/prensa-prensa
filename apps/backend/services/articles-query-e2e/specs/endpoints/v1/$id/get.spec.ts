import { test, expect } from "@playwright/test";

test.describe("v1 getAllArticlesByID", () => {
   test("should be set x-backend header", async ({ request }) => {
      const response = await request.get("/v1");

      const headers = response.headers();

      expect(headers).toHaveProperty("x-backend", "services-articles-query");
   });

   test("should retrieve article by ID", async ({ request }) => {
      const firstResponse = await request.get("/v1");
      expect(firstResponse.ok()).toBe(true);

      const [a] = await firstResponse.json();

      const secondResponse = await request.get(`/v1/${a._id}`);
      expect(secondResponse.ok()).toBe(true);

      const b = await secondResponse.json();

      for (const h in a) {
         expect(a[h]).toBe(b[h]);
      }
   });

   test("should not retrieve article by invalid ID", async ({ request }) => {
      const response = await request.get(`/v1/invalid_id`);

      expect(response.ok()).toBe(false);
      expect(response.status()).toBe(404);
   });
});
