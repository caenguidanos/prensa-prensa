import express from "express";

import * as service from "./app-service";

const controller = express.Router();

controller.get("/", async (_req, res) => {
   try {
      const dto = await service.getArticlesService();

      res.json(dto).end();
   } catch (error) {
      res.status(500).send("Internal Server Error");
   }
});

controller.get("/:id", async (req, res) => {
   try {
      const dto = await service.getArticleByIDService(req.params.id);

      if (dto) {
         return res.json(dto).end();
      }

      return res.status(404).send("Not Found").end();
   } catch (error) {
      res.status(500).send("Internal Server Error");
   }
});

controller.get("/derived/:type", async (req, res) => {
   try {
      const derivedType = req.params.type;

      const validDerivedTypes = ["new", "archive"];

      if (!derivedType) {
         res.status(400).send("Bad Request").end();
      }

      if (!validDerivedTypes.includes(derivedType)) {
         res.status(400).send("Bad Request").end();
      }

      if (derivedType === "new") {
         const dto = await service.getArticlesDerivedNewService();

         res.json(dto).end();
      }

      if (derivedType === "archive") {
         const dto = await service.getArticlesDerivedArchiveService();

         res.json(dto).end();
      }
   } catch (error) {
      res.status(500).send("Internal Server Error");
   }
});

controller.get("/healtz", (_req, res) => {
   try {
      res.send("OK").end();
   } catch (error) {
      res.status(500).send("Internal Server Error");
   }
});

export { controller };
