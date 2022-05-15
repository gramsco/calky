function sentenceHasElements(sentence, ...elements) {
  for (let element of elements) {
    if (sentence.includes(element)) {
      return [true, element];
    }
  }
  return [false, null];
}

exports.sentenceHasElements = sentenceHasElements;
