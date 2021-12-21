import { ArticleMongooseSchema } from "./app-model";

describe("service", () => {
   it("should get all articles", async () => {
      const x = await ArticleMongooseSchema.find({});
      console.log(x);
   });
});
