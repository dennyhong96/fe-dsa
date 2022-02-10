// O(n*m) time; O(n) space; m is avg. length of strs
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const keyArr: (number | undefined)[] = [];
    for (const char of str) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      keyArr[index] = (keyArr[index] ?? 0) + 1;
    }
    const keyStr = keyArr.toString();
    if (map.has(keyStr)) {
      map.get(keyStr)!.push(str);
    } else {
      map.set(keyStr, [str]);
    }
  }
  return [...map.values()];
}

// O(m * nlogn) time; O(m) space;
function groupAnagrams2(strs: string[]): string[][] {
  const map = new Map<string, Array<string>>(); // O(m) space
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const key = [...str].sort().join(""); // O(nlogn) time
    if (map.get(key) !== undefined) {
      map.get(key)!.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()];
}

// Brute force - O(n^2) time; O(1) space;
function groupAnagrams3(strs: string[]): string[][] {
  // O(nlogn) time;
  const isAnaGram = (s: string, t: string) =>
    [...s].sort().join("") === [...t].sort().join("");

  const result: string[][] = [];
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let existingGroup: string[] | null = null;
    for (let j = 0; j < result.length; j++) {
      const [example] = result[j];
      if (isAnaGram(str, example)) {
        existingGroup = result[j];
        break;
      }
    }
    if (existingGroup) {
      existingGroup.push(str);
    } else {
      result.push([str]);
    }
  }
  return result;
}
