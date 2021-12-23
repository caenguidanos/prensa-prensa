import express from "express";

import type { ArticleCommandCreateDTO, ArticleCommandUpdateDTO } from "@workspace/domain-articles";

import * as service from "./app-service";

const controller = express.Router();

controller.post("/", async (req, res) => {
   try {
      const body =
         typeof req.body === "string"
            ? (JSON.parse(req.body) as ArticleCommandCreateDTO)
            : (req.body as ArticleCommandCreateDTO);

      const dto = await service.createArticleService(body);

      res.json(dto).end();
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

controller.get("/healthz", (_req, res) => {
   try {
      res.send("OK").end();
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

controller.patch("/:id", async (req, res) => {
   try {
      const body =
         typeof req.body === "string"
            ? (JSON.parse(req.body) as ArticleCommandUpdateDTO)
            : (req.body as ArticleCommandUpdateDTO);

      const dto = await service.updateArticleByIDService(req.params.id, body);

      if (dto) {
         return res.json(dto).end();
      }

      return res.status(404).send("Not Found").end();
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

controller.delete("/:id", async (req, res) => {
   try {
      const dto = await service.removeArticleByIDService(req.params.id);

      if (dto) {
         return res.json(dto).end();
      }

      return res.status(404).send("Not Found").end();
   } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
   }
});

export { controller };
