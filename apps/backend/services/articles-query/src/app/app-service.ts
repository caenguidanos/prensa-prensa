import mongoose from "mongoose";

import { ArticleMongooseSchema } from "./app-model";
import { composeArticleForClient } from "./util/app-util-map-article";

export async function getArticleByIDService(_id: string) {
   if (!mongoose.isValidObjectId(_id)) {
      return null;
   }

   const existsDoc = await ArticleMongooseSchema.exists({ _id });

   if (existsDoc) {
      const data = await ArticleMongooseSchema.findById(_id);

      return composeArticleForClient(data);
   }

   return null;
}

export async function getArticlesService() {
   const data = await ArticleMongooseSchema.find({});

   return data.map((k) => composeArticleForClient(k));
}

export async function getArticlesDerivedArchiveService() {
   const data = await ArticleMongooseSchema.find({ archiveDate: { $ne: null } });

   return data.map((k) => composeArticleForClient(k));
}

export async function getArticlesDerivedNewService() {
   const data = await ArticleMongooseSchema.find({ archiveDate: { $eq: null } });

   return data.map((k) => composeArticleForClient(k));
}
