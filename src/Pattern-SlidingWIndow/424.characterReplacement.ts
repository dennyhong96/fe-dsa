// O(n) time; O(1) space;
export function characterReplacement(s: string, k: number): number {
  const map = new Map<string, number>(); // O(26) space - char -> count
  let maxLength = 0;
  let l = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) ?? 0) + 1);
    if (canReplace(map, k)) {
      maxLength = Math.max(maxLength, i - l + 1);
    } else {
      const lChar = s[l];
      while (s[l] === lChar) {
        map.set(lChar, map.get(lChar)! - 1);
        l++;
      }
    }
  }
  return maxLength;
}

// O(26) time; O(1) space;
function canReplace(map: Map<string, number>, k: number) {
  let maxOccurance = 0;
  let totalOccurance = 0;
  for (const [_, count] of map) {
    totalOccurance += count;
    maxOccurance = Math.max(maxOccurance, count);
  }
  return totalOccurance - maxOccurance <= k;
}

// Brute force - O(n^2) time; O(1) space
function characterReplacement2(s: string, k: number): number {
  let maxLength = 1;

  // map will have at most 26 key value pairs (26 letters), doesn't scale with n
  // O(26) space, treat as O(1) space
  const map = new Map<string, number>();

  for (let i = 0; i < s.length - 1; i++) {
    map.clear();
    const char = s[i];
    map.set(char, 1);

    for (let j = i + 1; j < s.length; j++) {
      const char2 = s[j];
      map.set(char2, (map.get(char2) ?? 0) + 1);

      let maxOccurance: number = 0;
      for (const [_, val] of map) {
        // map will have at most 26 key value pairs, O(26) time treat as O(1) time
        maxOccurance = Math.max(maxOccurance, val);
      }

      const substrLength = j - i + 1;
      if (substrLength - maxOccurance <= k) {
        maxLength = Math.max(maxLength, substrLength);
      }
    }
  }

  return maxLength;
}

// O(26*n) time; O(26) space;
function characterReplacement1(s: string, k: number): number {
  const map = new Map<string, number>(); // O(26) space - char -> count

  let l = 0;
  let r = 0;
  let length = 0;

  while (r < s.length) {
    const char = s[r];
    map.set(char, (map.get(char) ?? 0) + 1);

    let mostOccranceCharCount = -Infinity;
    let totalOccranceCount = 0;
    for (const [_, count] of map) {
      totalOccranceCount += count;
      mostOccranceCharCount = Math.max(mostOccranceCharCount, count);
    } // O(26) time;
    let needToReplaceCount = totalOccranceCount - mostOccranceCharCount;

    if (needToReplaceCount <= k) {
      length = Math.max(length, r - l + 1);
      r++;
    } else {
      const lChar = s[l];
      l++;
      map.set(lChar, map.get(lChar)! - 1);
      map.set(char, map.get(char)! - 1); // added back in next iteration
    }
  }
  return length;
}
