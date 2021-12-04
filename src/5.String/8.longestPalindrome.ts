/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

// O(n^2) time; O(1) space
function longestPalindrome(s: string): string {
  let longestPalindromeRange: number[] = [];

  const checkAndUpdateLongestPalindrome = (
    leftPointer: number,
    rightPointer: number
  ) => {
    // Check if a substring is palindrome from middle -> two sides
    while (
      leftPointer >= 0 &&
      rightPointer < s.length &&
      s[leftPointer] === s[rightPointer]
    ) {
      const length = rightPointer - leftPointer + 1;
      if (
        longestPalindromeRange.length !== 2 ||
        length > longestPalindromeRange[1] - longestPalindromeRange[0] + 1
      ) {
        longestPalindromeRange = [leftPointer, rightPointer];
      }
      leftPointer--;
      rightPointer++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // Hanle odd length palindrome
    let leftPointer = i;
    let rightPointer = i;
    checkAndUpdateLongestPalindrome(leftPointer, rightPointer);

    // Handle even length palindrome
    leftPointer = i;
    rightPointer = i + 1;
    checkAndUpdateLongestPalindrome(leftPointer, rightPointer);
  }

  // Build result palindrome substring
  let longestPalindrome = "";
  if (longestPalindromeRange.length === 2) {
    for (
      let i = longestPalindromeRange[0];
      i <= longestPalindromeRange[1];
      i++
    ) {
      longestPalindrome += s[i];
    }
  }

  return longestPalindrome;
}

// Brute force - O(n^3)
function longestPalindrome2(s: string): string {
  let longestSubstring = "";

  const isPalinDrome = (s: string, startIndex: number, endIndex: number) => {
    let isPalindrome = true;
    while (startIndex <= endIndex) {
      const lChar = s[startIndex];
      const rChar = s[endIndex];
      if (lChar !== rChar) {
        isPalindrome = false;
        break;
      }
      startIndex++;
      endIndex--;
    }
    return isPalindrome;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      const isPa = isPalinDrome(s, i, j);
      const length = j - i + 1;
      if (isPa && length > longestSubstring.length) {
        longestSubstring = s.slice(i, j + 1);
        break;
      }
    }
  }
  return longestSubstring;
}
