import { ArticleMongooseSchema } from "./app-model";

import {
   getArticlesService,
   getArticlesDerivedNewService,
   getArticlesDerivedArchiveService,
   getArticleByIDService
} from "./app-service";

describe("service", () => {
   let sharedID: string | undefined;

   const articleClientFields = [
      "_id",
      "title",
      "description",
      "content",
      "author",
      "archiveDate",
      "date"
   ];

   it("should get all articles", async () => {
      const result = await getArticlesService();

      expect(result.length).toBe(10);

      for (const r of result) {
         expect(Object.keys(r)).toStrictEqual(articleClientFields);

         expect(r._id).toBeTruthy();
         expect(r.title).toBeTruthy();
         expect(r.description).toBeTruthy();
         expect(r.content).toBeTruthy();
         expect(r.author).toBeTruthy();
         expect(r.date).toBeTruthy();
         expect(r.archiveDate).toBeNull();
      }
   });

   it("should get all archived articles", async () => {
      const preUpdateData = await getArticlesService();

      const [a, b, c] = preUpdateData;

      await ArticleMongooseSchema.findByIdAndUpdate(a._id, {
         archiveDate: new Date()
      });
      await ArticleMongooseSchema.findByIdAndUpdate(b._id, {
         archiveDate: new Date()
      });
      await ArticleMongooseSchema.findByIdAndUpdate(c._id, {
         archiveDate: new Date()
      });

      sharedID = a._id;

      const result = await getArticlesDerivedArchiveService();

      expect(result.length).toBe(3);

      for (const r of result) {
         expect(Object.keys(r)).toStrictEqual(articleClientFields);

         expect(r._id).toBeTruthy();
         expect(r.title).toBeTruthy();
         expect(r.description).toBeTruthy();
         expect(r.content).toBeTruthy();
         expect(r.author).toBeTruthy();
         expect(r.date).toBeTruthy();
         expect(r.archiveDate).toBeTruthy();
      }
   });

   it("should get all new articles", async () => {
      const result = await getArticlesDerivedNewService();

      expect(result.length).toBe(7);

      for (const r of result) {
         expect(Object.keys(r)).toStrictEqual(articleClientFields);

         expect(r._id).toBeTruthy();
         expect(r.title).toBeTruthy();
         expect(r.description).toBeTruthy();
         expect(r.content).toBeTruthy();
         expect(r.author).toBeTruthy();
         expect(r.date).toBeTruthy();
         expect(r.archiveDate).toBeNull();
      }
   });

   it("should get article by id", async () => {
      if (!sharedID) {
         throw new Error("Invalid ID");
      }

      const r = await getArticleByIDService(sharedID);

      expect(r._id).toBeTruthy();
      expect(r.title).toBeTruthy();
      expect(r.description).toBeTruthy();
      expect(r.content).toBeTruthy();
      expect(r.author).toBeTruthy();
      expect(r.date).toBeTruthy();
   });

   it("should not get article by invalid id", async () => {
      const r = await getArticleByIDService("1234");

      expect(r).toBeNull();
   });
});
