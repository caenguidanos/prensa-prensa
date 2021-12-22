// Get from shared lib
type Article = any;

export function composeArticleForClient(article: Article) {
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
