export function rotate(nums: number[], k: number): void {
  const rotateBy = k % nums.length;
  const arr = [];
  for (let i = nums.length - rotateBy; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  for (let i = nums.length - 1 - rotateBy; i >= 0; i--) {
    nums[i + rotateBy] = nums[i];
  }
  for (let i = 0; i < arr.length; i++) {
    nums[i] = arr[i];
  }
}
