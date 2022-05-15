const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const minus = (a, b) => a - b;
const divide = (a, b) => a / b;
const pow = (a, b) => a ** b;

const operations = {
  "+": add,
  "-": minus,
  "*": multiply,
  "/": divide,
  "^": pow,
  x: multiply,
};

module.exports = operations;
