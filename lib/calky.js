const { calculate } = require("./calculator");
const { parser } = require("./parser/parser");

function calky(sentence) {
  let parsed = parser(sentence);
  const { a, b, sign } = parsed.operations[parsed.operations.length - 1];
  return calculate(a, b, sign);
}

module.exports = {
  calky,
};
