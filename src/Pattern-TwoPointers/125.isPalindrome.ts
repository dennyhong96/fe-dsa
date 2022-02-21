// Two pointers - O(n) time; O(1) space
export function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    // console.log({l,r})
    const lChar = s[l];
    const rChar = s[r];
    if (!isValidChar(lChar)) {
      l++;
    } else if (!isValidChar(rChar)) {
      r--;
    } else {
      if (!isEqualChars(lChar, rChar)) return false;
      l++;
      r--;
    }
  }
  return true;
}

// O(1) time; O(1) space;
function isEqualChars(a: string, b: string) {
  return a.toUpperCase().charCodeAt(0) === b.toUpperCase().charCodeAt(0);
}

// O(1) time; O(1) space;
function isValidChar(char: string): boolean {
  const charCode = char.toUpperCase().charCodeAt(0);
  if (
    (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0)) ||
    (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0))
  ) {
    return true;
  }
  return false;
}

// "Brute force" - O(2n)
function isPalindrome2(s: string): boolean {
  const isValidChar = (s: string) =>
    (s.toLowerCase().charCodeAt(0) >= "a".charCodeAt(0) &&
      s.toLowerCase().charCodeAt(0) <= "z".charCodeAt(0)) ||
    (s.charCodeAt(0) >= "0".charCodeAt(0) &&
      s.charCodeAt(0) <= "9".charCodeAt(0));

  let forward = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isValidChar(char)) forward += char.toLowerCase();
  }

  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (isValidChar(char)) reversed += char.toLowerCase();
  }

  return forward === reversed;
}

export {};

// abcba
// abba
