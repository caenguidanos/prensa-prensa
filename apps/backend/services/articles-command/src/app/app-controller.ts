import express from "express";

import * as service from "./app-service.js";

const router = express.Router();

router.get("/", async (_req, res) => {
   const dto = await service.getArticlesService();

   res.json({ dto, uri: process.env.MONGO_DB_URI });
});

export default router;
