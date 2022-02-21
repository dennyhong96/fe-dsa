// O(n^2) time; O(1) space - Two Pointers - check palindrome from middle to edges
function longestPalindrome(s: string): string {
  let maxRange: [number, number] | null = null;

  // O(n) time; O(1) space; check isPalinDrome with "from middle to sides" approach
  const updateLongestSubstr = (l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (!maxRange || r - l + 1 > maxRange[1] - maxRange[0] + 1) {
        maxRange = [l, r];
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    updateLongestSubstr(i, i); // check for potential odd palindrome
    updateLongestSubstr(i, i + 1); // check for potential even palindrome
  }

  // Build and return substr
  let result = "";
  if (!maxRange) return result;
  for (let i = maxRange[0]; i <= maxRange[1]; i++) {
    result += s[i];
  }
  return result;
}

// O(n^3) time; O(1) space; - Brute force (check isPalinDrome form edges to middle)
function longestPalindrome1(s: string): string {
  let maxRange: [number, number] | null = null;

  // O(n) time; O(1) space;
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

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (isPalinDrome(i, j)) {
        if (!maxRange || j - i + 1 > maxRange[1] - maxRange[0] + 1) {
          maxRange = [i, j];
        }
      }
    }
  }

  // Build and return substr
  let result = "";
  if (!maxRange) return result;
  for (let i = maxRange[0]; i <= maxRange[1]; i++) {
    result += s[i];
  }
  return result;
}
