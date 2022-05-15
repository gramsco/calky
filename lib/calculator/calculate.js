const operations = require("../operations/");

function findOperation(sign) {
  if (sign in operations) return operations[sign];
  throw new Error("Not a valid sign");
}

function calculate(a, b, sign) {
  const operation = findOperation(sign);
  return operation(a, b);
}

module.exports = {
  calculate,
};
