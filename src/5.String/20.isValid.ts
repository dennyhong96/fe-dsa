// stack - O(n) time; O(n) space
export function isValid(s: string): boolean {
  const closeToOpenning: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openParenStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!closeToOpenning[char]) {
      // char is a openning paren
      openParenStack.push(char);
    } else {
      // char is a closing paren
      const openning = closeToOpenning[char];
      const lastOpenning = openParenStack.pop();
      if (!lastOpenning || openning !== lastOpenning) return false;
    }
  }

  return openParenStack.length === 0;
}
