/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 */

// Two pointers - O(n) time; O(1) space
function isPalindrome(s: string): boolean {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  const isValidChar = (s: string) =>
    (s.toLowerCase().charCodeAt(0) >= "a".charCodeAt(0) &&
      s.toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)) ||
    (s.charCodeAt(0) >= "0".charCodeAt(0) &&
      s.charCodeAt(0) <= "9".charCodeAt(0));

  while (leftPointer <= rightPointer) {
    const lChar = s[leftPointer];
    if (!isValidChar(lChar)) {
      leftPointer++;
      continue;
    }

    const rChar = s[rightPointer];
    if (!isValidChar(rChar)) {
      rightPointer--;
      continue;
    }

    if (lChar.toLowerCase() !== rChar.toLowerCase()) {
      return false;
    }

    leftPointer++;
    rightPointer--;
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
