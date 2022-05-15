const { calculate } = require("../calculator");
const { findElements } = require("./findElements");
const { findSign } = require("./findSign");
const { fillParenthesis, getLeftSide } = require("./parentheses");

function parseOperations(sentence, withParentheses) {
  if (!withParentheses) {
    const sign = findSign(sentence);
    const [a, b] = findElements(sentence, sign);
    return [{ sign, a, b }];
  }

  const operations = [];
  const leftSide = getLeftSide(sentence);

  const [leftOperation] = parseOperations(leftSide);
  operations.push(leftOperation);

  const { a, b, sign } = leftOperation;
  const computedLeft = calculate(a, b, sign);

  const newOperation = fillParenthesis(sentence, leftSide, computedLeft);
  const [rightOperation] = parseOperations(newOperation);
  operations.push(rightOperation);

  return operations;
}

exports.parseOperations = parseOperations;
