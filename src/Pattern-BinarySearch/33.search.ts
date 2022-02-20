export function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] > nums[r]) {
      // [3, 4, 5, 6, 7, 1, 2]
      //  l        m        r
      if (target >= nums[l] && target <= nums[m]) {
        r = m;
      } else {
        l = m + 1;
      }
    } else {
      // nums[m] <= nums[r]
      // [6, 7, 1, 2, 3, 4, 5]
      //  l        m        r
      if (target <= nums[r] && target > nums[m]) {
        l = m + 1;
      } else {
        r = m;
      }
    }
  }
  return nums[l] === target ? l : -1;
}

// After rotation, the sorted values are divided into 2 halves
// [3, 4, 5, 6, 7, 1, 2]
// left sorted portion - [3, 4, 5, 6, 7]
// right sorted portion - [1, 2]
// Two halves are independently sorted
// The left half values are strictly greater than right half values
