// O(n + k) time; O(k) space;
export function rotate(nums: number[], k: number): void {
  if (nums.length <= 1 || k <= 0) return; // nothing to rotate
  k = k % nums.length;

  // 1. store last k numbers
  const toRotate: number[] = [];
  for (let i = nums.length - k; i < nums.length; i++) {
    toRotate.push(nums[i]);
  }

  // 2. move numbers before k to end of array
  for (let i = nums.length - k - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  // 3. put to numbers in toRotate in from
  for (let i = 0; i < toRotate.length; i++) {
    nums[i] = toRotate[i];
  }
}
