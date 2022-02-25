export function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;

  // while loop will break off with both left and right converging at one index, which will be
  // the minimum index
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);

    // The idea is to compare the number on middle index to the number on the right index
    // this can tell us whether middle index is in the left or right sorted portion
    // so we know where the min could be
    if (nums[m] > nums[r]) {
      // [3, 4, 5, 1, 2] - m is in the left sorted portion
      //  l     m     r
      // min must be between m + 1 -> r
      l = m + 1;
    } else {
      // [5, 1, 2, 3, 4] - m is in the right sorted portion
      //  l     m     r
      // min must be between l -> m (m could be the min)
      r = m;
    }
  }
  return nums[l]; // can return nums[right] as well, both points to the minimum element
}

// [1,2,3,4,5]

// [2,3,4,5,1] if (m > r) search m + 1 -> r
// [5,1]       if (m > r) search m + 1 -> r
// [1]

// [5,1,2,3,4] if (m < r) search l -> m
// [5,1,2]     if (m < r) search l -> m
// [5,1]       if (m > r) search m + 1 -> r
// [1]
