/**
 * 647. Palindromic Substrings
 *https://leetcode.com/problems/palindromic-substrings/
 */

// O(n^2) time; O(1) space;
function countSubstrings(s: string): number {
  let palindromeCount = 0;

  // Check isPalinDrome from middle to edges
  const updatePalinDromeCount = (l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      palindromeCount++;
      l--;
      r++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    updatePalinDromeCount(i, i);
    updatePalinDromeCount(i, i + 1);
  }
  return palindromeCount;
}

// Brute force - O(n^3) time; O(1) space
function countSubstrings2(s: string): number {
  // Check isPalinDrome from edges to middle
  const isPalinDrome = (l: number, r: number) => {
    while (l <= r) {
      const lChar = s[l];
      const rChar = s[r];
      if (lChar !== rChar) return false;
      l++;
      r--;
    }
    return true;
  };

  let palindromeCount = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalinDrome(i, j)) {
        palindromeCount++;
      }
    }
  }

  return palindromeCount;
}
