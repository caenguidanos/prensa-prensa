import { ArticleMongooseSchema } from "./app-model.js";

export async function getArticlesService() {
   return ArticleMongooseSchema.find({});
}
