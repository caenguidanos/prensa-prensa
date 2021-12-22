import { test } from "@playwright/test";

test("Index Page", async ({ request }) => {
   const response = await request.get("/");

   const body = await response.text();

   console.log(body);
});
