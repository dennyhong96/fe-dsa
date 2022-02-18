// O(logn) time; O(1) space;
export function peakIndexInMountainArray(arr: number[]): number {
  // elements are sorted ascending up to the peak index
  // after the peak index, elements are sorted desending
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (arr[m] < arr[m + 1]) {
      // we are still in the ascending portion
      l = m + 1;
    } else {
      // we are in the desending portion, we could be at the peak
      r = m;
    }
  }
  return l; // or r
}

// arr = [0, 2, 1, 0]
//        l  m     r
// arr = [0, 2, 1, 0]
//        lm r
// arr = [0, 2, 1, 0]
//           lr

// arr = [0, 1, 0]
//        l  m  r
// arr = [0, 1, 0]
//        lm r
// arr = [0, 1, 0]
//           lr

// O(n) time; O(1) space;
function peakIndexInMountainArray1(arr: number[]): number {
  // elements are sorted ascending up to the peak index
  // after the peak index, elements are sorted desending
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const next = arr[i + 1];
    if (el > next) return i;
  }
  return -1;
}
