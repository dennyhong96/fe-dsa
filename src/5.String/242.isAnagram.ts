// O(n) time; O(n) space
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    map.set(sChar, (map.get(sChar) ?? 0) + 1);
    const tChar = t[i];
    map.set(tChar, (map.get(tChar) ?? 0) - 1);
  }

  for (const [_, count] of map) {
    if (count !== 0) return false;
  }
  return true;
}

// O(nlogn) time; O(1) space
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}
