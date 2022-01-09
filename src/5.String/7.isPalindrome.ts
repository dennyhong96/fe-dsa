/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

// Two pointers - O(n) time; O(1) space
function isPalindrome(s: string): boolean {
  const isValidChar = (char: string) => {
    return (
      (char.charCodeAt(0) >= "a".charCodeAt(0) &&
        char.charCodeAt(0) <= "z".charCodeAt(0)) ||
      (char.charCodeAt(0) >= "0".charCodeAt(0) &&
        char.charCodeAt(0) <= "9".charCodeAt(0))
    );
  };
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    const lChar = s[l].toLowerCase();
    if (!isValidChar(lChar)) {
      l++;
      continue;
    }
    const rChar = s[r].toLowerCase();
    if (!isValidChar(rChar)) {
      r--;
      continue;
    }
    if (lChar !== rChar) return false;
    l++;
    r--;
  }
  return true;
}

// "Brute force" - O(2n)
function isPalindrome2(s: string): boolean {
  const isValidChar = (s: string) =>
    (s.toLowerCase().charCodeAt(0) >= "a".charCodeAt(0) &&
      s.toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)) ||
    (s.charCodeAt(0) >= "0".charCodeAt(0) &&
      s.charCodeAt(0) <= "9".charCodeAt(0));

  let forward = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isValidChar(char)) forward += char.toLowerCase();
  }

  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (isValidChar(char)) reversed += char.toLowerCase();
  }

  return forward === reversed;
}

export {};

// abcba
// abba
