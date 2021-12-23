import faker from "faker";

import type { ArticleCommandCreateDTO, ArticleCommandUpdateDTO } from "@workspace/domain-articles";

import { schemaDriver } from "./app-model";
import {
   createArticleService,
   removeArticleByIDService,
   updateArticleByIDService
} from "./app-service";

describe("service", () => {
   let id: string | undefined;

   it("should create an article", async () => {
      const previous = await schemaDriver.find({});
      expect(previous.length).toBe(10);

      const dto: ArticleCommandCreateDTO = {
         title: faker.name.title(),
         description: faker.commerce.productDescription(),
         content: faker.name.jobDescriptor(),
         author: faker.name.firstName(),
         archiveDate: null
      };

      const result = await createArticleService(dto);
      expect(result).toBeTruthy();

      id = result._id;
   });

   it("should update an article", async () => {
      if (!id) {
         throw new Error("Invalid ID");
      }

      const dto: ArticleCommandUpdateDTO = {
         archiveDate: faker.date.recent().toString()
      };

      const result = await updateArticleByIDService(id, dto);
      expect(result).toBeTruthy();
   });

   it("should remove an article", async () => {
      if (!id) {
         throw new Error("Invalid ID");
      }

      const result = await removeArticleByIDService(id);
      expect(result).toBeTruthy();

      const future = await schemaDriver.findById(id);
      expect(future).toBeFalsy();
   });
});
