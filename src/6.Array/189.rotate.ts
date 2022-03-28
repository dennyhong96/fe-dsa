// O(n) time; O(1) space
function rotate(nums: number[], k: number): void {
  const len = nums.length; // save original length
  k = k % len; // handle k larger then nums length
  // move all numbers to the right by k steps
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    nums[i + k] = num;
  }
  // fill in first k numbers
  for (let i = 0; i < k; i++) {
    nums[i] = nums[i + len];
  }
  // shrink the array to be original length
  nums.length = len;
}
