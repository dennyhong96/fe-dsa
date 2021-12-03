// stack - O(n) time; O(n) space
function isValid(s: string): boolean {
  const closingToOpenningMap: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!closingToOpenningMap[char]) {
      // char is a openning paren
      stack.push(char);
    } else {
      // char is a closing paren
      const openning = closingToOpenningMap[char];
      const lastOpenning = stack.pop();
      if (lastOpenning !== openning) return false;
    }
  }

  return stack.length === 0;
}
