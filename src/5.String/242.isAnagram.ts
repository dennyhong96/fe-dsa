// O(n * m) time; O(n * m) space;
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>(); // O(n) space;
  // O(n) time;
  for (const str of strs) {
    const keyArr: number[] = []; // O(m) space;
    // O(m) time; m is avg. length of the strings
    for (const char of str) {
      const charCode = char.charCodeAt(0);
      keyArr[charCode] = (keyArr[charCode] ?? 0) + 1;
    }
    const key = keyArr.toString();
    if (map.has(key)) {
      map.get(key)!.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()]; // O(n) time
}

// O(nlogn) time; O(1) space
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  return [...s].sort().join("") === [...t].sort().join("");
}
