import { createCollection } from "$lib/domain/articles/mock/domain-articles-msw-data";

function createDb(): void {
   createCollection();
}

export { createDb };
