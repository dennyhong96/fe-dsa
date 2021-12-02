// Sliding window - O(n) time; O(1) space
function minWindow(s: string, t: string): string {
  let minWindowSubstring: string | null = null;

  const tMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    tMap.set(c, (tMap.get(c) ?? 0) + 1);
  }
  const needCharCount = tMap.size;

  const sMap = new Map<string, number>();

  let leftPointer = 0;
  let rightPointer = 0;

  let hasCharCount = 0;
  while (rightPointer < s.length) {
    const rChar = s[rightPointer];
    if (tMap.get(rChar) !== undefined) {
      sMap.set(rChar, (sMap.get(rChar) ?? 0) + 1);
      if (sMap.get(rChar)! === tMap.get(rChar)!) {
        hasCharCount++;
      }
    }

    while (hasCharCount === needCharCount) {
      const substr = s.slice(leftPointer, rightPointer + 1);

      if (
        minWindowSubstring === null ||
        substr.length < minWindowSubstring.length
      ) {
        minWindowSubstring = substr;
      }

      const lChar = s[leftPointer];
      if (tMap.get(lChar) !== undefined) {
        sMap.set(lChar, sMap.get(lChar)! - 1);
        if (sMap.get(lChar)! < tMap.get(lChar)!) {
          hasCharCount--;
        }
      }

      leftPointer++;
    }

    rightPointer++;
  }

  return minWindowSubstring ?? "";
}

// Sliding window - O(n) time; O(1) space
function minWindow2(s: string, t: string): string {
  let minWindowSubstring: string | null = null;

  let leftPointer = 0;
  let rightPointer = 0;

  const sMap = new Map<string, number>();

  const tMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    tMap.set(c, (tMap.get(c) ?? 0) + 1);
  }

  while (rightPointer < s.length) {
    const substring = s.substring(leftPointer, rightPointer + 1);
    const rChar = s[rightPointer];
    sMap.set(rChar, (sMap.get(rChar) ?? 0) + 1);

    let hasAll = true;
    tMap.forEach((val, key) => {
      if (sMap.get(key) === undefined || sMap.get(key)! < val) {
        hasAll = false;
      }
    });

    if (hasAll) {
      if (!minWindowSubstring || substring.length < minWindowSubstring.length) {
        minWindowSubstring = substring;
      }
      const lChar = s[leftPointer];
      sMap.set(lChar, sMap.get(lChar)! - 1);
      sMap.set(rChar, sMap.get(rChar)! - 1);
      leftPointer++;
    } else {
      rightPointer++;
    }
  }

  return minWindowSubstring ?? "";
}
