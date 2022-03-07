// O(n + k) time; O(k) space;
export function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  // store the last k numbers
  const tmp = nums.slice(nums.length - k);

  // move numbers before k to end of array
  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  // put stored number to front of array
  for (let i = 0; i < tmp.length; i++) {
    nums[i] = tmp[i];
  }
}
