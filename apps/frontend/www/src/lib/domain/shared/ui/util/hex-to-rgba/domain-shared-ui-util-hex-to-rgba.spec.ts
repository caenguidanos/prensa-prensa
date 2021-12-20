import { hexToRgba } from "./domain-shared-ui-util-hex-to-rgba";

describe("domainSharedUi utilHexToRgba", () => {
   it("should transform white hex color to rgba", () => {
      const hex = "#ffffff";
      const result = hexToRgba(hex, 1);

      expect(result).toStrictEqual([255, 255, 255, 1]);
   });

   it("should transform black hex color to rgba", () => {
      const hex = "#000000";
      const result = hexToRgba(hex, 1);

      expect(result).toStrictEqual([0, 0, 0, 1]);
   });

   it("should not transform malformed hex color to rgba", () => {
      const hex = "#00000";
      const error = new TypeError("Invalid hex format");

      expect(() => hexToRgba(hex, 1)).toThrowError(error);
   });

   it("should not transform invalid hex color to rgba", () => {
      const hex = "C00000";
      const error = new TypeError("Invalid hex format");

      expect(() => hexToRgba(hex, 1)).toThrowError(error);
   });
});
