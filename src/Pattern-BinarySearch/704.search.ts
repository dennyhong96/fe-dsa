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

function search1(nums: number[], target: number): number {
  if (target < nums[0] || target > nums[nums.length - 1]) return -1;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) return m;
    if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}
