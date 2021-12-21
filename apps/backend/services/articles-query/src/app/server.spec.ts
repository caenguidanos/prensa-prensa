import { describe, expect, it } from "vitest";

import { start } from "./server";

describe("server", () => {
   it("should run", () => {
      const server = start();

      const { address, port } = server.address() as any;

      expect(address).toBe("::");
      expect(port).toBe(3000);

      server.close();
   });
});
