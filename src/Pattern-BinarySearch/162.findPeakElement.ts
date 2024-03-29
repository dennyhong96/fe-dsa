// You may imagine that nums[-1] = nums[n] = -∞, nums[-1] and nums[n] are always the smallest
export function findPeakElement(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  // The idea is to compare value at m with value at m + 1
  // we definitely know m is not the peak when value at m is smaller than value at m + 1
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] < nums[m + 1]) {
      l = m + 1;
      // [1, 2, 1, 3, 5, 6, 4]
      // nums[m] < nums[m + 1] - Peak value must be in range (m + 1 -> r)
    } else {
      r = m;
      // nums[m] > nums[m + 1] - Peak value must be in range (l -> m)
      // [6, 5, 4, 3 ,2 ,3 ,2]
      // 6 could be a peak as well, since nums[-1] and nums[n] are always the smallest
    }
  }
  return l;
}

// [1, 2, 1, 3, 5, 6, 4]
//  l        m        r
// [1, 2, 1, 3, 5, 6, 4]
//              l  m  r
// [1, 2, 1, 3, 5, 6, 4]
//              lm r
// [1, 2, 1, 3, 5, 6, 4]
//                 lr
