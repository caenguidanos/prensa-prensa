import mongoose from "mongoose";

const schema = new mongoose.Schema({
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

export const ArticleMongooseSchema = mongoose.model("article", schema);
