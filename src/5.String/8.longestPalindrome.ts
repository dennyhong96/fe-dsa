// Brute force - O(n^3)
function longestPalindrome(s: string): string {
  let longestSubstring = "";
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

function isPalinDrome(s: string, startIndex: number, endIndex: number) {
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
}
