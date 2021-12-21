import { describe, expect, it } from "vitest";

describe("v1", () => {
   describe.concurrent("service", () => {
      it("should run", () => {
         expect(true).toBe(true);
      });
   });
});
