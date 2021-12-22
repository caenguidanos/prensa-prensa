import faker from "faker";
import { factory, primaryKey, nullable } from "@mswjs/data";

export const db = factory({
   articles: {
      _id: primaryKey(faker.datatype.uuid),
      title: faker.commerce.productName,
      description: faker.commerce.productDescription,
      content: faker.name.jobDescriptor,
      author: faker.name.firstName,
      archiveDate: nullable(String),
      created_at: faker.date.recent,
      updated_at: faker.date.recent
   }
});

export function createCollection(l: number): void {
   for (let i = 0; i < l; i++) {
      db.articles.create({ archiveDate: null });
   }
}

export function createDocument() {
   return db.articles.create({ archiveDate: null });
}
