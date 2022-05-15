const { parseOperations } = require("./parseOperations");
const { hasParentheses } = require("./parentheses");

function parser(sentence) {
  let [withParentheses] = hasParentheses(sentence);
  let operations = parseOperations(sentence, withParentheses);
  return {
    withParentheses,
    operations,
  };
}

module.exports = { parser };
