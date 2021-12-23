import faker from "faker";
import { factory, nullable, primaryKey } from "@mswjs/data";

import type { Article } from "@workspace/domain-articles";

export const db = factory({
   articles: {
      title: faker.commerce.productName,
      description: faker.commerce.productDescription,
      content: faker.name.jobDescriptor,
      author: faker.name.firstName,
      archiveDate: nullable(String),
      _p: primaryKey(faker.datatype.uuid)
   }
});

export function createCollection(q: number): Omit<Article, "date">[] {
   for (let i = 0; i < q; i++) {
      db.articles.create({ archiveDate: null });
   }

   const collection: Omit<Article, "date">[] = [];

   for (const h of db.articles.getAll()) {
      collection.push({
         title: h.title,
         description: h.description,
         content: h.content,
         author: h.author,
         archiveDate: null
      });
   }

   return collection;
}
