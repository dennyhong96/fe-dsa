// O(n) time; O(1) space;
function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, boolean>();
  let len = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map.has(char)) {
      while (map.has(char)) {
        const lChar = s[l];
        map.delete(lChar);
        l++;
      }
    }
    map.set(char, true);
    len = Math.max(len, i - l + 1);
  }
  return len;
}

export {};
