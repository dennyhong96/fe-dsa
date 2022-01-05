/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 */

// stack - O(n) time; O(n) space
function isValid(s: string): boolean {
  const closeToOpenning: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!closeToOpenning[char]) {
      // char is a openning paren
      stack.push(char);
    } else {
      // char is a closing paren
      const openning = closeToOpenning[char];
      const lastOpenning = stack.pop();
      if (!lastOpenning || openning !== lastOpenning) return false;
    }
  }

  return stack.length === 0;
}
