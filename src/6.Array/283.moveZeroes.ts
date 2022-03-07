// O(n) time; O(1) space; Array partition
export function moveZeroes(nums: number[]): void {
  // move all non-zero nums to the from
  // we maintain that 0 <= i <= nonZeroBound are all non-0 numbers
  // we maintain that nonZeroBound < i < nums.length are all 0
  let nonZeroBound = -1;
  let curr = 0;
  while (curr < nums.length) {
    const num = nums[curr];
    if (num !== 0) {
      nonZeroBound++; // allocate a space for the non-0 number
      swap(nums, curr, nonZeroBound);
      // after swapping the new number at curr index must be a zero
    }
    curr++;
  }
}

const swap = (nums: number[], i: number, j: number): void => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

// [1, 0, 0, 2, 3]
//n c
// [1, 0, 0, 2, 3]
//  n  c
// [1, 0, 0, 2, 3]
//  n     c
// [1, 0, 0, 2, 3]
//  n        c
// [1, 2, 0, 0, 3]
//     n        c
// [1, 2, 3, 0, 0]
//        n     c
