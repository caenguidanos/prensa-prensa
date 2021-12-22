import type { NextFunction, Request, RequestHandler, Response } from "express";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function methods(value: HttpMethod[]): RequestHandler {
   return (req: Request, res: Response, next: NextFunction) => {
      const currMethod = req.method as HttpMethod;

      if (value.includes(currMethod)) {
         return next();
      }

      return res.status(405).send("Method Not Allowed").end();
   };
}

export function backendSign(h: string): RequestHandler {
   return (_req: Request, res: Response, next: NextFunction) => {
      res.setHeader("x-backend", h);

      return next();
   };
}
