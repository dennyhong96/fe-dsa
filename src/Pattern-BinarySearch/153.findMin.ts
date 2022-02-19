export function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[r]) {
      l = m + 1;
      // [3, 4, 5, 1, 2] // smallest is in (m + 1 -> r)
      //  l     m     r
    } else {
      r = m;
      // [5, 1, 2, 3, 4] // smallest is in (l -> m)
      //  l     m    r
    }
  }
  console.log(nums[l]);
  return nums[l]; // r
}
