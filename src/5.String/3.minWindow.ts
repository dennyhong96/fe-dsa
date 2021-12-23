// Sliding window - O(n) time; O(1) space
function minWindow(s: string, t: string): string {
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

// O(n) time; O(1) space;
function minWindow1(s: string, t: string): string {
  let minWindowSubstr = "";

  const tMap = new Map<string, number>(); // O(26) -> O(1) space;
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, (tMap.get(char) ?? 0) + 1);
  }

  let leftPointer = 0;
  let rightPointer = 0;

  const sMap = new Map<string, number>(); // O(26) -> O(1) space;
  while (rightPointer < s.length) {
    const char = s[rightPointer];
    sMap.set(char, (sMap.get(char) ?? 0) + 1);

    // Check if our substring has all the chars from t
    let hasAllChars = true;
    for (const [c, n] of tMap) {
      if (sMap.get(c) === undefined || sMap.get(c)! < n) {
        hasAllChars = false;
        break;
      }
    }

    if (hasAllChars) {
      // if we have all the chars from t, we try to move leftPointer right
      // so we potentially have a shorter substring next iteration
      const substr = s.slice(leftPointer, rightPointer + 1);
      if (!minWindowSubstr || substr.length < minWindowSubstr.length) {
        minWindowSubstr = substr;
      }
      const leftChar = s[leftPointer];
      sMap.set(leftChar, sMap.get(leftChar)! - 1);

      // need to remove one count of char on rightPointer since rightPointer stays at it's position, it'll be added back next iteration
      sMap.set(char, sMap.get(char)! - 1);
      leftPointer++;
    } else {
      // if we DON'T have all the chars from t, we try to move rightPointer right
      // so we potentially will have all the chars next iteration
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
