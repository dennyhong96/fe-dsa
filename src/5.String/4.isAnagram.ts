/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */

// O(n) time; O(1) space
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>(); // O(1) space since at most size of 26
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    map.set(sChar, (map.get(sChar) ?? 0) + 1);
  }

  let isAna = true;
  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (!map.get(tChar)) {
      isAna = false;
      break;
    }
    map.set(tChar, (map.get(tChar) ?? 0) - 1);
  }

  return isAna;
}

// O(n) time; O(1) space
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}
