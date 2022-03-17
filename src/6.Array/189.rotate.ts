// O(n+k) time; O(1) space;
function rotate(nums: number[], k: number): void {
  const len = nums.length;
  k = k % nums.length; // handle k greater than nums array
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    nums[i + k] = num;
  }
  for (let i = 0; i < k; i++) {
    const num = nums[i + len];
    nums[i] = num;
  }
  nums.length = len;
}
// [1,2,3,4,5,6,7]
// [1,2,3,1,2,3,4,5,6,7]
// [5,6,7,1,2,3,4]
