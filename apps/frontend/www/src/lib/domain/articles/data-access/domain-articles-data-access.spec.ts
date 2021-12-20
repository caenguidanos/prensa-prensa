import faker from "faker";
import { HttpStatus } from "@nestjs/common/enums";

import * as articlesRepository from "./domain-articles-data-access";

import type {
   QueryArticlesDTO,
   CommandCreateArticlePayload,
   CommandUpdateArticlePayload
} from "../entity/domain-articles-entity";

describe("domainArticles dataAccess", () => {
   let id: string | undefined;

   it("should query articles", async () => {
      try {
         const data: QueryArticlesDTO[] = await articlesRepository.queryArticles();

         expect(data).toBeTruthy();
         expect(data.length).toBe(30);

         for (const d of data) {
            expect(d._id).toBeTruthy();
            expect(d.archiveDate).toBeNull();
         }

         id = data[15]._id;
      } catch (error) {
         throw error;
      }
   });

   it("should query articles by id", async () => {
      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const data: QueryArticlesDTO = await articlesRepository.queryArticleByID(id);

         expect(data).toBeTruthy();

         id = undefined;
      } catch (error) {
         throw error;
      }
   });

   it("should not query articles by invalid id", async () => {
      try {
         await articlesRepository.queryArticleByID("1234");
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });

   it("should command create article", async () => {
      const payload: CommandCreateArticlePayload = {
         title: faker.commerce.productName(),
         description: faker.commerce.productDescription(),
         content: faker.name.jobDescriptor(),
         author: faker.name.firstName()
      };

      try {
         const data = await articlesRepository.commandCreateArticle(payload);

         expect(data).toBeTruthy();

         expect(data._id).toBeTruthy();
         expect(data.title).toBeTruthy();
         expect(data.description).toBeTruthy();
         expect(data.content).toBeTruthy();
         expect(data.date).toBeTruthy();
         expect(data.archiveDate).toBeNull();

         id = data._id;
      } catch (error) {
         throw error;
      }
   });

   it("should command update article", async () => {
      const payload: CommandUpdateArticlePayload = {
         description: faker.commerce.productDescription()
      };

      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const data = await articlesRepository.commandUpdateArticleByID(id, payload);

         expect(data).toBeTruthy();

         expect(data._id).toBe(id);
         expect(data.title).toBeTruthy();
         expect(data.description).toBe(payload.description);
         expect(data.content).toBeTruthy();
         expect(data.date).toBeTruthy();
         expect(data.archiveDate).toBeNull();

         id = data._id;
      } catch (error) {
         throw error;
      }
   });

   it("should not command update article with invalid id", async () => {
      const payload: CommandUpdateArticlePayload = {
         description: faker.commerce.productDescription()
      };

      try {
         await articlesRepository.commandUpdateArticleByID("1234", payload);
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });

   it("should command delete article", async () => {
      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const commandDelete = await articlesRepository.commandDeleteArticleByID(id);

         expect(commandDelete).toBeTruthy();

         await articlesRepository.queryArticleByID(id);
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });
});
