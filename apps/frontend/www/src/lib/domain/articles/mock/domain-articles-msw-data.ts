import faker from "faker";
import { factory, primaryKey, nullable } from "@mswjs/data";

import type { Article } from "../entity/domain-articles-entity";

export const db = factory({
   articles: {
      _id: primaryKey(faker.datatype.uuid),
      title: faker.commerce.productName,
      description: faker.commerce.productDescription,
      content: faker.name.jobDescriptor,
      author: faker.name.firstName,
      archiveDate: nullable(Date),
      created_at: faker.date.recent,
      updated_at: faker.date.recent
   }
});

export function createCollection(): void {
   for (let i = 0; i < 5; i++) {
      db.articles.create({ archiveDate: null });
   }
}
