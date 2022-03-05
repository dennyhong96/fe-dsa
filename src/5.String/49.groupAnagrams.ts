// O(n * m) time; O(n * m) space;
export function groupAnagrams(strs: string[]): string[][] {
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
