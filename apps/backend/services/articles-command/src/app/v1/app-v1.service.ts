import type { Request, Response } from "express";

export function getArticlesService(_req: Request, res: Response): void {
   res.json({ service: "query", data: [] });
}
