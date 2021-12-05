/**
 * 5. Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 */

// O(n^2) time; O(1) space
function longestPalindrome(s: string): string {
  let longestPalinDromeRange: number[] = [];

  const updateLongestPalinDrome = (
    leftPointer: number,
    rightPointer: number
  ) => {
    while (
      leftPointer >= 0 &&
      rightPointer < s.length &&
      s[leftPointer] === s[rightPointer]
    ) {
      const length = rightPointer - leftPointer + 1;
      if (
        longestPalinDromeRange.length !== 2 ||
        length > longestPalinDromeRange[1] - longestPalinDromeRange[0] + 1
      ) {
        longestPalinDromeRange = [leftPointer, rightPointer];
      }
      leftPointer--;
      rightPointer++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // Check for potential odd palindrome substring
    let leftPointer = i;
    let rightPointer = i;
    updateLongestPalinDrome(leftPointer, rightPointer);

    // Check for potential even palindrome substring
    leftPointer = i;
    rightPointer = i + 1;
    updateLongestPalinDrome(leftPointer, rightPointer);
  }

  let longestPalinDrome = "";
  if (longestPalinDromeRange.length === 2) {
    for (
      let i = longestPalinDromeRange[0];
      i <= longestPalinDromeRange[1];
      i++
    ) {
      longestPalinDrome += s[i];
    }
  }

  return longestPalinDrome;
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
