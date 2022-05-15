const operations = require("../operations");
const { sentenceHasElements } = require("./sentenceHasElements");

function findSign(sentence) {
  const allowedSigns = Object.keys(operations);
  const [hasSign, sign] = sentenceHasElements(sentence, ...allowedSigns);
  if (hasSign) return sign;
  throw new Error("Wrong sign");
}

module.exports = { findSign };
