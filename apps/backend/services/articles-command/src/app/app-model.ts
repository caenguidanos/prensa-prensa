import mongoose from "mongoose";

import type { Article } from "@workspace/domain-articles";

const schema = new mongoose.Schema<Omit<Article, "date">>({
   title: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   description: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   content: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   author: {
      type: String,
      trim: true,
      unique: false,
      required: true
   },
   archiveDate: {
      type: String,
      trim: true,
      unique: false,
      required: false,
      default: null
   }
});

schema.set("timestamps", true);

export const schemaDriver = mongoose.model("article", schema);
