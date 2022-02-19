// O(logn) time; O(1) space;
export function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l] === target ? l : -1;
}
