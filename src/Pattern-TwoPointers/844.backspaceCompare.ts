// build string in reverse (two pointers) - O(n+m) time; O(1) space;
function backspaceCompare(s: string, t: string): boolean {
  const buildString = (word: string): string => {
    let skip = 0;
    let chars: string[] = [];
    for (let i = word.length - 1; i >= 0; i--) {
      const char = word[i];
      if (char === "#") {
        skip++;
      } else {
        if (skip > 0) {
          skip--;
        } else {
          chars.unshift(char);
        }
      }
    }
    return chars.join("");
  };
  return buildString(s) === buildString(t);
}

// build string - O(n+m) time; O(1) space;
function backspaceCompare1(s: string, t: string): boolean {
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
  return buildString(s) === buildString(t);
}

export {};
