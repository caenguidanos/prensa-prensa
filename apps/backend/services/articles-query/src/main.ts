import express from "express";

const app = express();

app.get("*", (req, res) => {
   return res.json({ message: "al2i" });
});

app.listen(3000, () => {
   console.log("Listening 3000");
});
