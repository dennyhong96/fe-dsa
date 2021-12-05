/**
 * 647. Palindromic Substrings
 *https://leetcode.com/problems/palindromic-substrings/
 */

// O(n^2) time; O(1) space
function countSubstrings(s: string): number {
  let palindromeCount = 0;

  const getPalindromeCountForIndex = (
    leftPointer: number,
    rightPointer: number
  ) => {
    let palindromeCountForIndex = 0;
    while (leftPointer >= 0 && rightPointer < s.length) {
      if (s[leftPointer] === s[rightPointer]) {
        palindromeCountForIndex++;
        leftPointer--;
        rightPointer++;
      } else {
        break; // If it's not a palindrome now it'll never become a palindrome later
      }
    }
    return palindromeCountForIndex;
  };

  for (let i = 0; i < s.length; i++) {
    // Handle case if substring is a potential odd palindrome
    let leftPointer = i;
    let rightPointer = i;
    palindromeCount += getPalindromeCountForIndex(leftPointer, rightPointer);

    // Handle case if substring is a potential even palindrome
    leftPointer = i;
    rightPointer = i + 1;
    palindromeCount += getPalindromeCountForIndex(leftPointer, rightPointer);
  }

  return palindromeCount;
}

// Brute force - O(n^3) time; O(1) space
function countSubstrings2(s: string): number {
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
