/**
 * 424. Longest Repeating Character Replacement
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */

// Sliding window - O(n) time; O(1) space
function characterReplacement(s: string, k: number): number {
  let startPointer = 0;
  let endPointer = 0;
  let longest = 0;

  // map will have at most 26 key value pairs (26 letters), doesn't scale with n
  // O(26) space, treat as O(1) space
  const map = new Map<string, number>(); // char -> occurrence count

  while (endPointer < s.length) {
    const endChar = s[endPointer];
    map.set(endChar, (map.get(endChar) ?? 0) + 1);

    const subStringLength = endPointer - startPointer + 1;

    // map will have at most 26 key value pairs, O(26) time treat as O(1) time
    let maxOccurrences = 0;
    map.forEach((val) => {
      maxOccurrences = Math.max(maxOccurrences, val);
    });

    // subStringLength - maxOccurrences is number of replacements we need to do
    // k is the maxium number of replacements we are allowed to do
    if (subStringLength - maxOccurrences > k) {
      const startChar = s[startPointer];
      map.set(startChar, map.get(startChar)! - 1);
      startPointer++;
    } else {
      // This is a valid longest repeating substring candidate
      longest = Math.max(longest, subStringLength);
    }

    // Increment endPointer regardless of wether we found a valid longest repeating substring candidate
    // or not, since otherwise we will count same endChar twice for occurrences
    // And even if there is a valid longest repeating substring candidate after we increment the startPointer
    // without incrementing the endPointer, it would have a length less than or same as the longest repeating substring
    endPointer++;
  }

  return longest;
}

// Brute force - O(n^2) time; O(1) space
function characterReplacement2(s: string, k: number): number {
  let longest = 0;

  // map will have at most 26 key value pairs (26 letters), doesn't scale with n
  // O(26) space, treat as O(1) space
  const map = new Map<string, number>();

  for (let i = 0; i < s.length - 1; i++) {
    const char = s[i];
    map.set(char, 1);

    for (let j = i + 1; j < s.length; j++) {
      const char2 = s[j];
      if (map.get(char2) !== undefined) {
        map.set(char2, map.get(char2)! + 1);
      } else {
        map.set(char2, 1);
      }

      // map will have at most 26 key value pairs, O(26) time treat as O(1) time
      let maxFrequency = 0;
      map.forEach((val) => {
        maxFrequency = Math.max(maxFrequency, val);
      });

      const subStringLength = j - i + 1;
      if (subStringLength - maxFrequency <= k) {
        // feasible non-repeating substring
        longest = Math.max(longest, subStringLength);
      }
    }

    map.clear();
  }

  return longest;
}
