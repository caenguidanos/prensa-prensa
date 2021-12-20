import { createCollection as createArticlesCollection } from "$lib/domain/articles/mock/domain-articles-msw-data";

function createDb(): void {
   createArticlesCollection();
}

export { createDb };
