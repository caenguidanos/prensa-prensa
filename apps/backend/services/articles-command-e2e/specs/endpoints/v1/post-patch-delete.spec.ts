import { test, expect } from "@playwright/test";

test.describe("v1 createArticle", () => {
   let id: string | undefined;

   test("should be set x-backend header", async ({ request }) => {
      const response = await request.get("/v1/healthz");

      const headers = response.headers();

      expect(headers).toHaveProperty("x-backend", "services-articles-command");
   });

   test("should create an article", async ({ request }) => {
      const response = await request.post("/v1", {
         data: {
            title: "hh",
            description: "kk",
            content: "pp",
            author: "ññ",
            archiveDate: null
         }
      });

      expect(response.ok()).toBe(true);

      const body = await response.json();
      expect(body).toBeTruthy();

      id = body._id;
   });

   test("should update an article", async ({ request }) => {
      const response = await request.patch(`/v1/${id}`, {
         data: {
            archiveDate: new Date().toString()
         }
      });

      expect(response.ok()).toBe(true);

      const body = await response.json();
      expect(body).toBeTruthy();
      expect(body.archiveDate).toBeTruthy();
   });

   test("should remove an article", async ({ request }) => {
      const response = await request.delete(`/v1/${id}`);

      expect(response.ok()).toBe(true);

      const body = await response.json();
      expect(body).toBeTruthy();
   });
});
