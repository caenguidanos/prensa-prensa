import { HttpStatus } from "@nestjs/common/enums";
import { rest } from "msw";

import { db } from "./domain-articles-msw-data";

import type { ArticleQueryDTO } from "@workspace/domain-articles";

const url = (p: string) => `http://localhost:3000/articles${p}`;

export const handlers = [
   rest.get(url("/"), (_req, res, ctx) => {
      const payload: ArticleQueryDTO[] = [];

      for (const dbArticle of db.articles.getAll()) {
         payload.push({
            _id: dbArticle._id,
            title: dbArticle.title,
            description: dbArticle.description,
            content: dbArticle.content,
            author: dbArticle.author,
            date: dbArticle.created_at.toString(),
            archiveDate: dbArticle.archiveDate
         });
      }

      return res(ctx.json(payload));
   }),
   rest.get(url("/derived/new"), (_req, res, ctx) => {
      const payload: ArticleQueryDTO[] = [];

      for (const dbArticle of db.articles.getAll()) {
         payload.push({
            _id: dbArticle._id,
            title: dbArticle.title,
            description: dbArticle.description,
            content: dbArticle.content,
            author: dbArticle.author,
            date: dbArticle.created_at.toString(),
            archiveDate: dbArticle.archiveDate
         });
      }

      return res(ctx.json(payload.filter((k) => !k.archiveDate)));
   }),
   rest.get(url("/derived/archive"), (_req, res, ctx) => {
      const payload: ArticleQueryDTO[] = [];

      for (const dbArticle of db.articles.getAll()) {
         payload.push({
            _id: dbArticle._id,
            title: dbArticle.title,
            description: dbArticle.description,
            content: dbArticle.content,
            author: dbArticle.author,
            date: dbArticle.created_at.toString(),
            archiveDate: dbArticle.archiveDate
         });
      }

      return res(ctx.json(payload.filter((k) => !!k.archiveDate)));
   }),
   rest.get(url("/:id"), (req, res, ctx) => {
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
         date: selectedArticle.created_at.toString(),
         archiveDate: selectedArticle.archiveDate
      };

      return res(ctx.json(payload));
   }),
   rest.post(url("/"), (req, res, ctx) => {
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
         date: createdDoc.created_at.toString(),
         archiveDate: createdDoc.archiveDate
      };

      return res(ctx.json(payload));
   }),
   rest.patch(url("/:id"), (req, res, ctx) => {
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
         date: updatedDoc.created_at.toString(),
         archiveDate: updatedDoc.archiveDate
      };

      return res(ctx.json(payload));
   }),
   rest.delete(url("/:id"), (req, res, ctx) => {
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
         date: deletedDoc.created_at.toString(),
         archiveDate: deletedDoc.archiveDate
      };

      return res(ctx.json(payload));
   })
];
