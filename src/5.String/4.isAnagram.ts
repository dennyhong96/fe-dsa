/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */

// O(n) time; O(1) space
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (map.get(char) === undefined) continue;
    if (map.get(char)! > 1) {
      map.set(char, map.get(char)! - 1);
    } else {
      map.delete(char);
    }
  }
  return map.size === 0;
}

// O(nlogn) time; O(1) space
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}
