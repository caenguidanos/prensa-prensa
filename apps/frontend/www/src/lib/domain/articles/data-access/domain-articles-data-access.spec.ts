import faker from "faker";
import { HttpStatus } from "@nestjs/common/enums";

import * as articlesRepository from "./domain-articles-data-access";

import type {
   ArticleCommandCreatePayload,
   ArticleCommandUpdatePayload,
   ArticleQueryDTO
} from "../entity/domain-articles-entity";

describe("domainArticles dataAccess", () => {
   let id: string | undefined;

   const abortController = new AbortController();

   it("should query articles", async () => {
      try {
         const data: ArticleQueryDTO[] = await articlesRepository.queryArticles(
            abortController.signal
         );

         expect(data).toBeTruthy();
         expect(data.length).toBe(5);

         for (const d of data) {
            expect(d._id).toBeTruthy();
            expect(d.archiveDate).toBeNull();
         }

         id = data[2]._id;
      } catch (error) {
         throw error;
      }
   });

   it("should query articles by id", async () => {
      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const data: ArticleQueryDTO = await articlesRepository.queryArticleByID(
            id,
            abortController.signal
         );

         expect(data).toBeTruthy();

         id = undefined;
      } catch (error) {
         throw error;
      }
   });

   it("should not query articles by invalid id", async () => {
      try {
         await articlesRepository.queryArticleByID("1234", abortController.signal);
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });

   it("should command create article", async () => {
      const payload: ArticleCommandCreatePayload = {
         title: faker.commerce.productName(),
         description: faker.commerce.productDescription(),
         content: faker.name.jobDescriptor(),
         author: faker.name.firstName()
      };

      try {
         const data = await articlesRepository.commandCreateArticle(
            payload,
            abortController.signal
         );

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
      const payload: ArticleCommandUpdatePayload = {
         description: faker.commerce.productDescription()
      };

      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const data = await articlesRepository.commandUpdateArticleByID(
            id,
            payload,
            abortController.signal
         );

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
      const payload: ArticleCommandUpdatePayload = {
         description: faker.commerce.productDescription()
      };

      try {
         await articlesRepository.commandUpdateArticleByID("1234", payload, abortController.signal);
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });

   it("should command delete article", async () => {
      if (!id) {
         throw new Error("ID not defined");
      }

      try {
         const commandDelete = await articlesRepository.commandDeleteArticleByID(
            id,
            abortController.signal
         );

         expect(commandDelete).toBeTruthy();

         await articlesRepository.queryArticleByID(id, abortController.signal);
      } catch (error) {
         expect((error as Error).message).toBe(`${HttpStatus.NOT_FOUND}`);
      }
   });
});
