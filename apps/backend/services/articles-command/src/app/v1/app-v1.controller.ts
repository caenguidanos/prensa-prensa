import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
   const version = req.url;

   return res.json({ hey: "joe", version });
});

export default router;
