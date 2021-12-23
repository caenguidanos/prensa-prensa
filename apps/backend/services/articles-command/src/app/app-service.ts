import mongoose from "mongoose";

import {
   ArticleCommandCreateDTO,
   ArticleCommandUpdateDTO,
   ArticleQueryDTO,
   ArticleSchema,
   composeArticleQueryDTO
} from "@workspace/domain-articles";

import { schemaDriver } from "./app-model";

export async function createArticleService(dto: ArticleCommandCreateDTO): Promise<ArticleQueryDTO> {
   const doc = new schemaDriver(dto);
   const saved = await doc.save();
   return composeArticleQueryDTO(saved as unknown as ArticleSchema);
}

export async function updateArticleByIDService(
   _id: string,
   dto: ArticleCommandUpdateDTO
): Promise<ArticleQueryDTO | null> {
   if (!mongoose.isValidObjectId(_id)) {
      return null;
   }

   const existsDoc = await schemaDriver.exists({ _id });

   if (existsDoc) {
      const doc = await schemaDriver.findByIdAndUpdate(_id, dto, { new: true });
      return composeArticleQueryDTO(doc as unknown as ArticleSchema);
   }

   return null;
}

export async function removeArticleByIDService(_id: string): Promise<ArticleQueryDTO | null> {
   if (!mongoose.isValidObjectId(_id)) {
      return null;
   }

   const existsDoc = await schemaDriver.exists({ _id });

   if (existsDoc) {
      const doc = await schemaDriver.findByIdAndRemove(_id);
      return composeArticleQueryDTO(doc as unknown as ArticleSchema);
   }

   return null;
}
