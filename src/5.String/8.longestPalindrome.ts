/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

// O(n^2) time; O(1) space
function longestPalindrome(s: string): string {
  const longestSubstrRange: number[] = [];

  // O(n) time; O(1) space; check isPalinDrome with "from middle to sides" approach
  const updateLongestSubstr = (leftPointer: number, rightPointer: number) => {
    while (
      leftPointer >= 0 &&
      rightPointer < s.length &&
      s[leftPointer] === s[rightPointer]
    ) {
      const substrLength = rightPointer - leftPointer + 1;
      if (
        !longestSubstrRange.length ||
        substrLength > longestSubstrRange[1] - longestSubstrRange[0] + 1
      ) {
        longestSubstrRange[0] = leftPointer;
        longestSubstrRange[1] = rightPointer;
      }
      leftPointer--;
      rightPointer++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    updateLongestSubstr(i, i); // check for potential odd palindrome
    updateLongestSubstr(i, i + 1); // check for potential even palindrome
  }

  // Build and return substr
  if (!longestSubstrRange.length) return "";
  let resultSubstr = "";
  for (let i = 0; i < s.length; i++) {
    if (i >= longestSubstrRange[0] && i <= longestSubstrRange[1]) {
      resultSubstr += s[i];
    }
  }
  return resultSubstr;
}

// Brute force (check isPalinDrome with "from sides to middle" approach) - O(n^3) time; O(1) space;
function longestPalindrome1(s: string): string {
  const longestSubstrRange: number[] = [];

  // O(n) time; O(1) space;
  const isPalinDrome = (startIndex: number, endIndex: number) => {
    while (startIndex <= endIndex) {
      const lChar = s[startIndex];
      const rChar = s[endIndex];
      if (lChar !== rChar) return false;
      startIndex++;
      endIndex--;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (isPalinDrome(i, j)) {
        if (
          !longestSubstrRange.length ||
          j - i + 1 > longestSubstrRange[1] - longestSubstrRange[0] + 1
        ) {
          longestSubstrRange[0] = i;
          longestSubstrRange[1] = j;
        }
      }
    }
  }

  if (!longestSubstrRange.length) return "";
  let resultSubstr = "";
  for (let i = 0; i < s.length; i++) {
    if (i >= longestSubstrRange[0] && i <= longestSubstrRange[1]) {
      resultSubstr += s[i];
    }
  }
  return resultSubstr;
}
