/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

// Two pointers - O(n) time; O(1) space
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>(); // set will has at most 26 items in it, it doesn't scale with n, so O(1) space.
  let maxLength = 0;
  let startPointer = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Remove everything before and include duplicate char
    // This doesn't add to time complexity becuase we do it at most 26 times
    // So it doesn't scale with n
    while (set.has(char)) {
      set.delete(s[startPointer]);
      startPointer++;
    }

    set.add(char);
    const length = i - startPointer + 1;
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
}

// O(n^2) time; O(n) space;
function lengthOfLongestSubstring2(s: string): number {
  let store: Record<string, number> = {}; // char -> index

  let longestSubstringLength = 0;
  let currSubstringLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (store[char] === undefined) {
      currSubstringLength++;
    } else {
      const lastSeenIndex = store[char];
      let removedCount = 0;
      Object.entries(store).forEach(([char, index]) => {
        if (index >= lastSeenIndex) return;
        removedCount++;
        delete store[char];
      });
      currSubstringLength = currSubstringLength - removedCount;
    }

    store[char] = i;
    longestSubstringLength = Math.max(
      longestSubstringLength,
      currSubstringLength
    );
  }

  return longestSubstringLength;
}
