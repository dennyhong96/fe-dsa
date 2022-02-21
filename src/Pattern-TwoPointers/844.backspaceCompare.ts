// O(n) time; O(1) space;
export function backspaceCompare(s: string, t: string): boolean {
  return getEditorText(s) === getEditorText(t);
}

// O(n) time; O(1) space;
function getEditorText(str: string): string {
  // the idea to traverse from end to start of the string
  // so that it's easier to record number of chars we need to skip over
  let result = "";
  let skipCount = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char === "#") {
      skipCount++;
      continue;
    }
    if (skipCount > 0) {
      skipCount--;
    } else {
      result = char + result;
    }
  }
  return result;
}

// build string - O(n+m) time; O(1) space;
function backspaceCompare1(s: string, t: string): boolean {
  return buildString(s) === buildString(t);
}

const buildString = (word: string): string => {
  let chars: string[] = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (char === "#") {
      if (chars.length) {
        chars.pop();
      }
    } else {
      chars.push(char);
    }
  }
  return chars.join("");
};
