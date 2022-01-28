// O(26*n) time; O(26) space;
function characterReplacement(s: string, k: number): number {
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

export {};
