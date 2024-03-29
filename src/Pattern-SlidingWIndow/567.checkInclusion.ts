// Find s1's anagram in s2

// O(n) time; O(1) space;
function checkInclusion(s1: string, s2: string): boolean {
  if (!s1.length) return true;
  if (s1.length > s2.length) return false;

  const s1Map = new Map<string, number>(); // O(26) space; char -> count
  const s2Map = new Map<string, number>(); // O(26) space; char -> count
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    s1Map.set(char1, (s1Map.get(char1) ?? 0) + 1);
    const char2 = s2[i];
    s2Map.set(char2, (s2Map.get(char2) ?? 0) + 1);
  }
  if (hasAllChars(s1Map, s2Map)) return true; // 'ab', 'ab'

  // keep a constant sizing sliding window
  // because of the constant size, we don't need to manually
  // maintain an extra left pointer
  // for each iteration move the window to the right to check if the window contains all the chars of s1 string
  for (let i = s1.length; i < s2.length; i++) {
    // move the sliding window to the right while maintaining the window size
    // 1. expand the right bound
    const char = s2[i];
    s2Map.set(char, (s2Map.get(char) ?? 0) + 1);
    // 2. shrink the left bound
    const l = i - s1.length;
    const lChar = s2[l];
    s2Map.set(lChar, s2Map.get(lChar)! - 1);
    // 3. check includsion for the new sliding window
    if (hasAllChars(s1Map, s2Map)) return true;
  }

  return false;
}

// O(26) time; O(1) space;
function hasAllChars(
  s1Map: Map<string, number>,
  s2Map: Map<string, number>
): boolean {
  for (const [char, count] of s1Map) {
    if (!s2Map.has(char) || s2Map.get(char)! < count) return false;
  }
  return true;
}

// Sliding window, extra counter - O(n) time; O(1) space;
function checkInclusion1(s1: string, s2: string): boolean {
  if (!s1.length) return true;
  if (s2.length < s1.length) return false;

  const s1Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  const s2Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    s1Map.set(char1, (s1Map.get(char1) ?? 0) + 1);
    const char2 = s2[i];
    s2Map.set(char2, (s2Map.get(char2) ?? 0) + 1);
  }

  const matches = (char: string): boolean => {
    return s1Map.get(char) === s2Map.get(char);
  };
  const hasAllMatches = () => {
    return matchesCount === s1Map.size;
  };

  let matchesCount = 0;
  s1Map.forEach((_, char) => {
    if (matches(char)) matchesCount++;
  });

  for (let i = s1.length; i < s2.length; i++) {
    if (hasAllMatches()) return true;
    const char = s2[i];
    if (s1Map.has(char)) {
      const prevMatches = matches(char);
      s2Map.set(char, (s2Map.get(char) ?? 0) + 1);
      const newMatches = matches(char);
      if (!prevMatches && newMatches) matchesCount++;
      if (prevMatches && !newMatches) matchesCount--;
    }
    const lChar = s2[i - s1.length]; // get the first index of the window
    if (s1Map.has(lChar)) {
      const prevMatches = matches(lChar);
      s2Map.set(lChar, s2Map.get(lChar)! - 1);
      const newMatches = matches(lChar);
      if (!prevMatches && newMatches) matchesCount++;
      if (prevMatches && !newMatches) matchesCount--;
    }
  }
  if (hasAllMatches()) return true;

  return false;
}

// O(m*n) time; O(n) space;
function checkInclusion2(s1: string, s2: string): boolean {
  // Search for an anagram of s1 in s2
  let l = 0;
  let r = l + s1.length - 1;
  let map = new Map<string, number>(); // O(n) space; char -> count

  const resetMap = () => {
    map.clear();
    for (const c of s1) {
      map.set(c, (map.get(c) ?? 0) + 1);
    }
  }; // O(n) time;
  resetMap();

  while (r < s2.length) {
    for (let i = l; i <= r; i++) {
      const char = s2[i];
      if (map.has(char)) {
        if (map.get(char)! > 1) {
          map.set(char, map.get(char)! - 1);
        } else {
          map.delete(char);
        }
      } else {
        break;
      }
    } // O(n) time;
    if (map.size === 0) return true;
    resetMap(); // O(n) time;
    l++;
    r++;
  } // O(m) time;

  return false;
}

export {};
