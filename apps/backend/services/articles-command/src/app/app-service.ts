import mongoose from "mongoose";

import { ArticleMongooseSchema } from "./app-model";

export async function getArticleByIDService(_id: string) {
   if (!mongoose.isValidObjectId(_id)) {
      return null;
   }

   const existsDoc = await ArticleMongooseSchema.exists({ _id });

   if (existsDoc) {
      const data = await ArticleMongooseSchema.findById(_id);

      return mapArticleToClient(data);
   }

   return null;
}

export async function getArticlesService() {
   const data = await ArticleMongooseSchema.find({});

   return mapArticlesToClient(data);
}

export async function getArticlesDerivedArchiveService() {
   const data = await ArticleMongooseSchema.find({ archiveDate: { $ne: null } });

   return mapArticlesToClient(data);
}

export async function getArticlesDerivedNewService() {
   const data = await ArticleMongooseSchema.find({ archiveDate: { $eq: null } });

   return mapArticlesToClient(data);
}

// from shared lib
type Article = any;

function mapArticleToClient(article: Article) {
   return {
      _id: article._id,
      title: article.title,
      description: article.description,
      content: article.content,
      author: article.author,
      archiveDate: article.archiveDate,
      date: article.createdAt
   };
}

function mapArticlesToClient(data: Article[]) {
   return data.map((article) => {
      return {
         _id: article._id,
         title: article.title,
         description: article.description,
         content: article.content,
         author: article.author,
         archiveDate: article.archiveDate,
         date: article.createdAt
      };
   });
}
