export interface Article {
   title: string;
   description: string;
   content: string;
   author: string;
   date: Date | string;
   archiveDate: Date | string | null;
}

export interface ArticleSchema extends Omit<Article, "date"> {
   _id: string;
   createdAt: string;
   updatedAt: string;
}

export interface ArticleQueryDTO extends Article {
   _id: string;
}

export type ArticleCommandCreatePayload = Omit<Article, "date" | "archiveDate">;
export type ArticleCommandUpdatePayload = Partial<Omit<Article, "date">>;
