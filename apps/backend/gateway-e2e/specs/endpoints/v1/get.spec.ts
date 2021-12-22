import { test } from "@playwright/test";

test("Index Page", async ({ request }) => {
   const response = await request.get("/v1");

   const body = await response.json();

   console.log(body);
});
