import {
   schemaDriver,
   connectClient,
   dropClientDatabase,
   disconnectClient,
   MongooseConnection,
   generateRandomCollection
} from "@workspace/domain-articles-driver";

let client: MongooseConnection | undefined;

beforeAll(async () => {
   client = await connectClient();
   await schemaDriver().insertMany(generateRandomCollection(10));
});

afterAll(async () => {
   await dropClientDatabase();
   await disconnectClient(client);
});
