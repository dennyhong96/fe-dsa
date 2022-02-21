// O(n) time; O(1) space;
function minWindow(s: string, t: string): string {
  if (s === t) return s;
  if (s.length < t.length) return "";

  let minRange: [number, number] | null = null;
  const sMap = new Map<string, number>(); // O(26) space; char -> count
  const tMap = new Map<string, number>(); // O(26) space; char -> count

  // setup tMap for later hasAllChars() comparasions
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, (tMap.get(char) ?? 0) + 1);
  }

  console.log(tMap);

  let l = 0;
  for (let i = 0; i < s.length; i++) {
    // expand sliding window
    const char = s[i];
    sMap.set(char, (sMap.get(char) ?? 0) + 1);

    // shrink sliding window
    while (hasAllChars(sMap, tMap)) {
      // update minRange, we potentially has the result
      const currMinLength = !minRange
        ? Infinity
        : minRange[1] - minRange[0] + 1;
      const length = i - l + 1;
      if (length < currMinLength) {
        minRange = [l, i];
      }
      // mvoe left bound to right
      const lChar = s[l];
      sMap.set(lChar, sMap.get(lChar)! - 1);
      l++;
    }
  }

  // build result from range
  let result = "";
  if (!minRange) return result;
  for (let i = minRange[0]; i <= minRange[1]; i++) {
    result += s[i];
  }
  return result;
}

// O(26) time; O(1) space;
// returns whether sMap includes all chars and counts of tMap
function hasAllChars(
  sMap: Map<string, number>,
  tMap: Map<string, number>
): boolean {
  for (const [char, count] of tMap) {
    if (!sMap.has(char) || sMap.get(char)! < count) return false;
  }
  return true;
}

// Sliding window - O(n) time; O(1) space
function minWindow1(s: string, t: string): string {
  let minWindowSubstr = "";

  const tMap = new Map<string, number>(); // O(26) -> O(1) space;
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, (tMap.get(char) ?? 0) + 1);
  }
  const charEntriesCount = tMap.size;
  let hasCharEntiresCount = 0;

  let leftPointer = 0;
  let rightPointer = 0;

  const sMap = new Map<string, number>(); // O(26) -> O(1) space;
  while (rightPointer < s.length) {
    const char = s[rightPointer];
    if (tMap.get(char) !== undefined) {
      sMap.set(char, (sMap.get(char) ?? 0) + 1);
      if (sMap.get(char)! === tMap.get(char)!) {
        hasCharEntiresCount++;
      }
    }

    // We have a potential solution
    while (hasCharEntiresCount === charEntriesCount) {
      const substr = s.slice(leftPointer, rightPointer + 1);
      if (!minWindowSubstr || substr.length < minWindowSubstr.length) {
        minWindowSubstr = substr;
      }

      const leftChar = s[leftPointer];
      if (tMap.get(leftChar) !== undefined) {
        sMap.set(leftChar, sMap.get(leftChar)! - 1);
        if (sMap.get(leftChar)! < tMap.get(leftChar)!) {
          hasCharEntiresCount--;
        }
      }

      leftPointer++;
    }

    rightPointer++;
  }

  return minWindowSubstr;
}

// Brute force - O(n^2) time; O(1) space;
function minWindow2(s: string, t: string): string {
  if (s === t) return s;
  let minWindowSubstr = "";
  const mapT = new Map<string, number>(); // O(26) space -> O(1) space
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    mapT.set(char, (mapT.get(char) ?? 0) + 1);
  }
  const mapS = new Map<string, number>(); // O(26) space -> O(1) space
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const char = s[j];
      const substr = s.slice(i, j + 1);
      mapS.set(char, (mapS.get(char) ?? 0) + 1);
      let isSubstring = true;
      // O(26) time -> O(1) time
      for (const [char, count] of mapT) {
        if (!mapS.get(char) || mapS.get(char)! < count) {
          isSubstring = false;
        }
      }
      if (isSubstring) {
        if (!minWindowSubstr || substr.length < minWindowSubstr.length) {
          minWindowSubstr = substr;
        }
      }
    }
    mapS.clear();
  }
  return minWindowSubstr;
}
