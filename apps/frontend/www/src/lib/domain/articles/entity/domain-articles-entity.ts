export interface Article {
   title: string;
   description: string;
   content: string;
   author: string;
   date: Date | string;
   archiveDate: Date | string | null;
}

export interface ArticleSchema extends Article {
   _id: string;
   created_at: string;
   updated_at: string;
}

export interface QueryArticlesDTO extends Article {
   _id: string;
}

export type CommandCreateArticlePayload = Omit<Article, "date" | "archiveDate">;
export type CommandUpdateArticlePayload = Partial<Omit<Article, "date">>;
