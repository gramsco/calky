const { calculate } = require("./calculate");

describe("calculate", () => {
  test("Simple", () => {
    let a = 5;
    let b = 10;
    let sign = "*";
    let result = calculate(a, b, sign);
    expect(result).toBe(50);
  });
});
