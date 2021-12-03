// O(m * n) time; O(m * n) space
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>(); // O(n) space

  // O(m)
  for (const str of strs) {
    // O(n) - avg. length of the strings
    const key: number[] = [];
    for (let s of str) {
      const index = s.charCodeAt(0) - "a".charCodeAt(0);
      const count = key[index];
      key[index] = count === undefined ? 0 : count + 1;
    }
    const serializedKey = JSON.stringify(key);

    const existingAnagrams = map.get(serializedKey);
    if (existingAnagrams) {
      existingAnagrams.push(str);
    } else {
      map.set(serializedKey, [str]);
    }
  }

  const result: string[][] = [];
  map.forEach((val) => result.push(val)); // O(n) time

  return result;
}

// O(m * nlog(n)) time; O(n) space
function groupAnagrams2(strs: string[]): string[][] {
  const map = new Map<string, string[]>(); // O(n) space

  // m
  for (const str of strs) {
    const key = [...str].sort().join(""); // nlog(n)
    const existingAnagrams = map.get(key);
    if (existingAnagrams) {
      existingAnagrams.push(str);
    } else {
      map.set(key, [str]);
    }
  }

  const result: string[][] = [];
  map.forEach((val) => result.push(val)); // O(n) time

  return result;
}
