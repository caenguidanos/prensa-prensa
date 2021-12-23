import fetch from "isomorphic-fetch";

import { createDb } from "$msw/data";
import { server } from "$msw/server";

import "@testing-library/jest-dom/extend-expect";

export function injectFetch(): void {
   globalThis.fetch = fetch as unknown as typeof globalThis.fetch;
}

export function injectEnvironment(): void {
   process.env.NEXT_PUBLIC_API_URL = "http://localhost:4000";
}

beforeAll(() => {
   createDb();

   injectFetch();
   injectEnvironment();

   server.listen();
});

afterEach(() => {
   server.resetHandlers();
});

afterAll(() => {
   server.close();
});
