function findElements(sentence, sign) {
  const [a, b] = sentence.split(` ${sign} `).map(Number);
  return [a, b];
}

module.exports = { findElements };
