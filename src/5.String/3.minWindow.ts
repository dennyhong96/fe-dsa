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

// O(n*m) time; O(1) space;
function minWindow1(s: string, t: string): string {
  let minSubstr = "";
  const tMap = new Map<string, number>(); // O(26) -> O(1) space;
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, (tMap.get(char) ?? 0) + 1);
  }
  const sMap = new Map<string, number>(); // O(26) -> O(1) space;
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    if (tMap.has(char)) {
      sMap.set(char, (sMap.get(char) ?? 0) + 1);
    }

    // Check if our substring has all the chars from t
    let hasAllCharCount = true;
    for (const [char, count] of tMap) {
      if (sMap.get(char) === undefined || sMap.get(char)! < count) {
        hasAllCharCount = false;
        break;
      }
    }
    if (hasAllCharCount) {
      // if we have all the chars from t, we try to move leftPointer right
      // so we potentially have a shorter substring next iteration

      const substr = s.slice(l, r + 1);
      if (!minSubstr || substr.length < minSubstr.length) {
        minSubstr = substr;
      }
      const lChar = s[l];
      if (tMap.has(lChar)) {
        sMap.set(lChar, sMap.get(lChar)! - 1);
      }
      l++;

      // need to remove one count of char on rightPointer since rightPointer stays at it's position, it'll be added back next iteration
      if (tMap.has(char)) {
        sMap.set(char, sMap.get(char)! - 1);
      }
      r--;
    }
    // if we DON'T have all the chars from t, we try to move rightPointer right
    // so we potentially will have all the chars next iteration
  }
  return minSubstr;
}

// O(n*m) time; O(1) space;
function minWindow2(s: string, t: string): string {
  const tMap = new Map<string, number>(); // O(1)
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    tMap.set(char, (tMap.get(char) ?? 0) + 1);
  }
  let minWindowSubstrRange: number[] = [];
  const sMap = new Map<string, number>(); // O(1)
  let l = 0;
  let r = 0;
  while (r < s.length) {
    const char = s[r];
    if (tMap.has(char)) {
      sMap.set(char, (sMap.get(char) ?? 0) + 1);
    }
    let hasAllChars = true;
    tMap.forEach((val, key) => {
      if (!sMap.has(key) || sMap.get(key)! < val) {
        hasAllChars = false;
      }
    });
    if (hasAllChars) {
      if (
        !minWindowSubstrRange.length ||
        r - l + 1 < minWindowSubstrRange[1] - minWindowSubstrRange[0] + 1
      ) {
        minWindowSubstrRange[0] = l;
        minWindowSubstrRange[1] = r;
      }
      const lChar = s[l];
      if (tMap.has(lChar)) {
        sMap.set(lChar, sMap.get(lChar)! - 1);
      }
      l++;
      if (tMap.has(char)) {
        sMap.set(char, sMap.get(char)! - 1);
      }
    } else {
      r++;
    }
  }
  if (!minWindowSubstrRange.length) return "";
  let minWindowSubstr = "";
  for (let i = minWindowSubstrRange[0]; i <= minWindowSubstrRange[1]; i++) {
    minWindowSubstr += s[i];
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
