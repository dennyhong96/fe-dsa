// O(n) time; O(1) space;
// reverse each word first, store to a result, then reverse the result
export function reverseWordsInSentence(sentence: string) {
  // will the sentence have leading and trailing spaces? handles leading and trailing spaces
  // does the sentence contain punctuations? If so, how to handle?
  // is it garrantied that words are seperated by single spaces? handles multiple spaces
  let result = "";
  let cursor = 0;
  while (cursor < sentence.length) {
    const char = sentence[cursor];
    // Add empty char to the result
    if (char === " ") {
      result += char;
      cursor++;
      continue;
    }
    // Get the start and end index of the current word
    let cursor2 = cursor;
    while (cursor2 < sentence.length - 1 && sentence[cursor2 + 1] !== " ") {
      cursor2++;
    }
    // Add the reverse of the current word to the result
    result += reverseBetween(cursor, cursor2, sentence);
    // Move cursor to the index after the end index of current word
    cursor = cursor2 + 1;
  }
  result = reverseBetween(0, result.length - 1, result);
  return result;
}

function reverseBetween(
  startIndex: number,
  endIndex: number,
  text: string
): string {
  let result = "";
  for (let i = startIndex; i <= endIndex; i++) {
    const char = text[i];
    result = char + result;
  }
  return result;
}

// Example
console.log(reverseWordsInSentence("denny is going to get it"));

// O(n) time; O(n) space;
export function reverseWordsInSentence1(sentence: string) {
  // will the sentence have leading and trailing spaces?
  // does the sentence contain punctuations? If so, how to handle?
  // is it garrantied that words are seperated by single spaces? handles multiple spaces
  return sentence.split(/\s+/g).reverse().join(" ");
}
