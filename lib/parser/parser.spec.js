const { parser } = require("./parser");

describe("Parser", () => {
  it("returns a parsed version of the operations", () => {
    let s = "5 + 4";
    expect(parser(s)).toEqual({
      withParentheses: false,
      operations: [{ sign: "+", a: 5, b: 4 }],
    });

    let s2 = "(5 + 2) x 5";
    expect(parser(s2)).toEqual({
      withParentheses: true,
      operations: [
        { sign: "+", a: 5, b: 2 },
        { sign: "x", a: 7, b: 5 },
      ],
    });
  });
});
