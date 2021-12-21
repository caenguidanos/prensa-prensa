import { HttpStatus } from "@nestjs/common/enums";
import { rest } from "msw";

import { db } from "./domain-articles-msw-data";

import type { ArticleQueryDTO } from "../entity/domain-articles-entity";

const url = (p: string) => `http://localhost:3000${p}`;

export const handlers = [
   rest.get(url("/articles"), (req, res, ctx) => {
      const payload: ArticleQueryDTO[] = [];

      for (const dbArticle of db.articles.getAll()) {
         payload.push({
            _id: dbArticle._id,
            title: dbArticle.title,
            description: dbArticle.description,
            content: dbArticle.content,
            author: dbArticle.author,
            date: dbArticle.created_at,
            archiveDate: dbArticle.archiveDate as unknown as Date
         });
      }

      const queryParamNew = req.url.searchParams.get("new");

      if (!queryParamNew) {
         return res(ctx.json(payload));
      }

      return queryParamNew === "true"
         ? res(ctx.json(payload.filter((k) => !k.archiveDate)))
         : res(ctx.json(payload.filter((k) => !!k.archiveDate)));
   }),
   rest.get(url("/articles/:id"), (req, res, ctx) => {
      const selectedArticle = db.articles.findFirst({
         where: {
            _id: {
               equals: req.params["id"] as string
            }
         }
      });

      if (!selectedArticle) {
         return res(ctx.status(HttpStatus.NOT_FOUND, "Not Found"));
      }

      const payload: ArticleQueryDTO = {
         _id: selectedArticle._id,
         title: selectedArticle.title,
         description: selectedArticle.description,
         content: selectedArticle.content,
         author: selectedArticle.author,
         date: selectedArticle.created_at,
         archiveDate: selectedArticle.archiveDate as unknown as Date
      };

      return res(ctx.json(payload));
   }),
   rest.post(url("/articles"), (req, res, ctx) => {
      if (!req.headers.get("authorization")?.includes("Bearer ")) {
         return res(ctx.status(HttpStatus.UNAUTHORIZED, "Unauthorized"));
      }

      if (!req.body) {
         return res(ctx.status(HttpStatus.BAD_REQUEST, "Bad Request"));
      }

      const createdDoc = db.articles.create({
         ...JSON.parse(req.body as string),
         archiveDate: null
      });

      const payload: ArticleQueryDTO = {
         _id: createdDoc._id,
         title: createdDoc.title,
         description: createdDoc.description,
         content: createdDoc.content,
         author: createdDoc.author,
         date: createdDoc.created_at,
         archiveDate: createdDoc.archiveDate as unknown as Date
      };

      return res(ctx.json(payload));
   }),
   rest.patch(url("/articles/:id"), (req, res, ctx) => {
      if (!req.headers.get("authorization")?.includes("Bearer ")) {
         return res(ctx.status(HttpStatus.UNAUTHORIZED, "Unauthorized"));
      }

      if (!req.body) {
         return res(ctx.status(HttpStatus.BAD_REQUEST, "Bad Request"));
      }

      const updatedDoc = db.articles.update({
         where: {
            _id: {
               equals: req.params["id"] as string
            }
         },
         data: {
            ...JSON.parse(req.body as string)
         }
      });

      if (!updatedDoc) {
         return res(ctx.status(HttpStatus.NOT_FOUND, "Not Found"));
      }

      const payload: ArticleQueryDTO = {
         _id: updatedDoc._id,
         title: updatedDoc.title,
         description: updatedDoc.description,
         content: updatedDoc.content,
         author: updatedDoc.author,
         date: updatedDoc.created_at,
         archiveDate: updatedDoc.archiveDate as unknown as Date
      };

      return res(ctx.json(payload));
   }),
   rest.delete(url("/articles/:id"), (req, res, ctx) => {
      if (!req.headers.get("authorization")?.includes("Bearer ")) {
         return res(ctx.status(HttpStatus.UNAUTHORIZED, "Unauthorized"));
      }

      const deletedDoc = db.articles.delete({
         where: {
            _id: {
               equals: req.params["id"] as string
            }
         }
      });

      if (!deletedDoc) {
         return res(ctx.status(HttpStatus.NOT_FOUND, "Not Found"));
      }

      const payload: ArticleQueryDTO = {
         _id: deletedDoc._id,
         title: deletedDoc.title,
         description: deletedDoc.description,
         content: deletedDoc.content,
         author: deletedDoc.author,
         date: deletedDoc.created_at,
         archiveDate: deletedDoc.archiveDate as unknown as Date
      };

      return res(ctx.json(payload));
   })
];
