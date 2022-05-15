const { sentenceHasElements } = require("./sentenceHasElements");

const LEFT_PAREN = "(";
const RIGHT_PAREN = ")";
const NOTHING = "";
const GLOBAL_REGEXP = "g";

function hasParentheses(sentence) {
  return sentenceHasElements(sentence, LEFT_PAREN, RIGHT_PAREN);
}

const anyPar = new RegExp(`\\${LEFT_PAREN}|\\${RIGHT_PAREN}`, GLOBAL_REGEXP);

function stripParentheses(str) {
  return str.replaceAll(anyPar, NOTHING);
}

function fillParenthesis(str, left, computed) {
  let withoutPar = stripParentheses(str);
  return withoutPar.replace(left, computed);
}

function getLeftSide(sentence) {
  const [leftSide] = sentence.split(RIGHT_PAREN);
  return stripParentheses(leftSide);
}

module.exports = {
  hasParentheses,
  fillParenthesis,
  getLeftSide,
};
