import fetch from "isomorphic-fetch";

import { createDb } from "$msw/data";
import { server } from "$msw/server";

import "@testing-library/jest-dom/extend-expect";

export function injectFetch(): void {
   globalThis.fetch = fetch as unknown as typeof globalThis.fetch;
}

beforeAll(() => {
   createDb();
   injectFetch();

   server.listen();
});

afterEach(() => {
   server.resetHandlers();
});

afterAll(() => {
   server.close();
});
