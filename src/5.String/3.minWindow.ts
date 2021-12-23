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

// Two pointers - O(n) time; O(1) space;
function minWindow1(s: string, t: string): string {
  let minWindowSubstr = "";
  const mapT = new Map<string, number>(); // O(26) space -> O(1) space
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    mapT.set(char, (mapT.get(char) ?? 0) + 1);
  }

  const mapS = new Map<string, number>(); // O(26) space -> O(1) space
  let leftPointer = 0;
  let rightPointer = 0;

  while (rightPointer < s.length) {
    const substr = s.slice(leftPointer, rightPointer + 1);
    const char = s[rightPointer];
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
      const leftChar = s[leftPointer];
      mapS.set(leftChar, mapS.get(leftChar)! - 1);
      mapS.set(char, mapS.get(char)! - 1); // -1 since we are adding it back into mapS next iteration
      leftPointer++;
    } else {
      rightPointer++;
    }
  }
  return minWindowSubstr;
}

// Brute force - O(n^2) time; O(1) space;
function minWindow3(s: string, t: string): string {
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
