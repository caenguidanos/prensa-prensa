import { setupWorker } from "msw";

import { handlers } from "./msw-handlers";

export const worker = setupWorker(...handlers);
