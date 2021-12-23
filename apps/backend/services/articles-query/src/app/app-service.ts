import { schemaDriver, isValidMongooseObjectId } from "@workspace/domain-articles-driver";
import { ArticleQueryDTO, ArticleSchema, composeArticleQueryDTO } from "@workspace/domain-articles";

export async function getArticleByIDService(_id: string): Promise<ArticleQueryDTO | null> {
   if (!isValidMongooseObjectId(_id)) {
      return null;
   }

   const existsDoc = await schemaDriver().exists({ _id });

   if (existsDoc) {
      const data = await schemaDriver().findById(_id);
      return composeArticleQueryDTO(data as unknown as ArticleSchema);
   }

   return null;
}

export async function getArticlesService(): Promise<ArticleQueryDTO[]> {
   const data = await schemaDriver().find({});
   return data.map((k) => composeArticleQueryDTO(k as unknown as ArticleSchema));
}

export async function getArticlesDerivedArchiveService(): Promise<ArticleQueryDTO[]> {
   const data = await schemaDriver().find({ archiveDate: { $ne: null } });
   return data.map((k) => composeArticleQueryDTO(k as unknown as ArticleSchema));
}

export async function getArticlesDerivedNewService(): Promise<ArticleQueryDTO[]> {
   const data = await schemaDriver().find({ archiveDate: { $eq: null } });
   return data.map((k) => composeArticleQueryDTO(k as unknown as ArticleSchema));
}
