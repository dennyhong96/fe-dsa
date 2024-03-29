// O(n) time; O(1) space;
export function lengthOfLongestSubstring(s: string): number {
  let charSet = new Set<string>(); // chars
  let maxLength = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Shrink window until we don't have char in charSet
    while (charSet.has(char)) {
      const lChar = s[l];
      charSet.delete(lChar);
      l++;
    }

    charSet.add(char);
    maxLength = Math.max(maxLength, i - l + 1);
  }
  return maxLength;
}

// Two pointers - O(n) time; O(1) space
function lengthOfLongestSubstring1(s: string): number {
  const set: Set<string> = new Set(); // set will has at most 26 items in it, it doesn't scale with n, so O(1) space.
  let pointerA = 0;
  let pointerB = 0;
  let maxLength = 0;
  while (pointerB < s.length) {
    const charB = s[pointerB];

    // Remove everything before and include duplicate char
    // This doesn't add to time complexity becuase we do it at most 26 times
    // So it doesn't scale with n
    while (set.has(charB)) {
      const charA = s[pointerA];
      set.delete(charA);
      pointerA++;
    }

    set.add(charB);
    pointerB++;
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
}

// Brute force O(n^2) time; O(n) space;
function lengthOfLongestSubstring2(s: string): number {
  let store: Record<string, number> = {}; // char -> index

  let longestSubstrLength = 0;
  let runningSubstrLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (store[char] === undefined) {
      runningSubstrLength++;
    } else {
      const lastSeenIndex = store[char];
      let removedCount = 0;
      Object.entries(store).forEach(([char, index]) => {
        if (index >= lastSeenIndex) return;
        removedCount++;
        delete store[char];
      });
      runningSubstrLength = runningSubstrLength - removedCount;
    }

    store[char] = i;
    longestSubstrLength = Math.max(longestSubstrLength, runningSubstrLength);
  }

  return longestSubstrLength;
}
