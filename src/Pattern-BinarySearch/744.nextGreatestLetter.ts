// O(logn) time; O(1) space;
export function nextGreatestLetter(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (letters[m] <= target) {
      l = m + 1; // when letters[m] === target, m + 1 handles moving l to the smallest letter larger than target
    } else {
      r = m; // we potentially have the result at m
    }
  }
  // when there is no result, while loop breaks off at l = r = letters.length - 1,
  // we need to check if letters[l] is actually larger than target
  // if letters[l] is not larger than target we know we didn't fina a result, return first letter
  return letters[l] > target ? letters[l] : letters[0];
}

function nextGreatestLetter1(letters: string[], target: string): string {
  let l = 0;
  let r = letters.length - 1;
  let smallest: string | null = null;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    const middle = letters[m];

    // Handles when target is within letters - letters = ['a','b','b','c'], target = b
    if (middle === target) {
      let next = m + 1;
      while (letters[next] === middle) next++;
      smallest = letters[next] ?? null;
      break;
    }

    // If middle is smaller than target, result is in the right portion, disregard left portion
    if (middle.charCodeAt(0) < target.charCodeAt(0)) {
      l = m + 1;
    } else {
      // If middle is larger than target, middle is possibly the result, disregard right portion
      if (!smallest || middle.charCodeAt(0) < smallest.charCodeAt(0)) {
        smallest = middle;
      }
      r = m - 1;
    }
  }
  return smallest || letters[0];
}
