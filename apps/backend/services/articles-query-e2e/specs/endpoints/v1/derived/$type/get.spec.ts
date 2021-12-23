import { test, expect } from "@playwright/test";

test.describe("v1 getArticlesByType", () => {
   test("should be set x-backend header", async ({ request }) => {
      const response = await request.get("/v1");

      const headers = response.headers();

      expect(headers).toHaveProperty("x-backend", "services-articles-query");
   });

   test("should return $archive articles", async ({ request }) => {
      const response = await request.get("/v1/derived/archive");
      expect(response.ok()).toBe(true);

      const body = await response.json();
      expect(body.length).toBe(0);
   });

   test("should return $new articles", async ({ request }) => {
      const response = await request.get("/v1/derived/new");
      expect(response.ok()).toBe(true);

      const body = await response.json();
      expect(body.length).toBe(10);

      for (const h of body) {
         expect(h.archiveDate).toBeNull();
      }
   });
});
