import faker from "faker";
import { factory, nullable, primaryKey } from "@mswjs/data";

const db = factory({
   articles: {
      title: faker.commerce.productName,
      description: faker.commerce.productDescription,
      content: faker.name.jobDescriptor,
      author: faker.name.firstName,
      archiveDate: nullable(Date),
      _p: primaryKey(faker.datatype.uuid)
   }
});

export function createCollection(q: number) {
   for (let i = 0; i < q; i++) {
      db.articles.create({ archiveDate: null });
   }
}

export function getAllCollection(q: number) {
   createCollection(q);

   return db.articles.getAll().map((k) => {
      const w = { ...k };
      delete w._p;
      return w;
   });
}
