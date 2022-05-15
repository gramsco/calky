const calky = require(".");

describe("calky", () => {
  describe("Basic operations", () => {
    it("works", () => {
      // additions
      expect(calky("5 + 9")).toBe(14);
      expect(calky("5 + 10")).toBe(15);
      expect(calky("10 + 12")).toBe(22);

      // difference
      expect(calky("10 - 5")).toBe(5);
      expect(calky("200 - 100")).toBe(100);

      // multiplications
      expect(calky("5 x 2")).toBe(10);
      expect(calky("5 x 15")).toBe(75);

      // divison
      expect(calky("5 / 2")).toBe(2.5);
      expect(calky("15 / 5")).toBe(3);

      // power
      expect(calky("5 ^ 2")).toBe(25);
      expect(calky("2 ^ 2")).toBe(4);
    });
  });

  describe("With parentheses", () => {
    it("works with parentheses", () => {
      expect(calky("(5 + 3) x 5")).toBe(40);
      expect(calky("(2 + 3) ^ 2")).toBe(25);
    });
  });
});
