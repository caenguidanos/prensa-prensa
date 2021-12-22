import { createCollection } from "$lib/domain/articles/mock/domain-articles-msw-data";

function createDb(): void {
   createCollection(5);
}

export { createDb };
