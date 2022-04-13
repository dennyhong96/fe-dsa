// O(nlogn) time; O(1) space;
export function findUniquePairs(nums: number[], k: number): number {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b); // sort so we can handle duplicates
  let l = 0;
  let r = nums.length - 1;
  let count = 0;
  while (l < r) {
    const num1 = nums[l];
    const num2 = nums[r];
    const sum = num1 + num2;
    if (sum === k) {
      count++;
      l++;
      if (nums[l] === nums[l - 1]) {
        l++;
      }
    } else if (sum < k) {
      l++;
    } else {
      // sum > k
      r--;
    }
  }
  return count;
}
