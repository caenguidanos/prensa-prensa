import express from "express";

import { getArticlesService } from "./app-v1.service.js";

const router = express.Router();

router.get("/", (req, res) => getArticlesService(req, res));

export default router;
