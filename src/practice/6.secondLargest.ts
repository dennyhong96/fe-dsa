// O(n) time; O(1) space;
function secondLargest(nums: number[]): number {
  // can the nums array have less than 2 elements
  if (nums.length < 2) throw new Error("nums must have more than 2 elements");
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax;
}
