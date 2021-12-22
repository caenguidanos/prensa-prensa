export interface Article {
   title: string;
   description: string;
   content: string;
   author: string;
   date: string;
   archiveDate: string | null;
}

export interface ArticleSchema extends Omit<Article, "date"> {
   _id: string;
   createdAt: string;
   updatedAt: string;
}

export interface ArticleQueryDTO extends Article {
   _id: string;
}

export type ArticleCommandCreateDTO = Omit<Article, "date">;
export type ArticleCommandUpdateDTO = Partial<ArticleCommandCreateDTO>;

export function composeArticleQueryDTO(a: ArticleSchema): ArticleQueryDTO {
   return {
      _id: a._id,
      title: a.title,
      description: a.description,
      content: a.content,
      author: a.author,
      archiveDate: a.archiveDate,
      date: a.createdAt
   };
}
