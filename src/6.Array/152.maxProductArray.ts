/**
 * 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 */

// O(n) time; O(1) space
function maxProduct(nums: number[]): number {
  let max = -Infinity;
  let runningMax = 1;
  let runningMin = 1; // Need to track currMin as well to account for negetive numbers, -2 * -3 = 6
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // need to startover when num is 0
    if (num === 0) {
      runningMax = 1;
      runningMin = 1;
      max = Math.max(max, 0);
    } else {
      // num could be negetive or positive
      const runningMaxCopy = runningMax;
      runningMax = Math.max(runningMax * num, runningMin * num, num);
      runningMin = Math.min(runningMaxCopy * num, runningMin * num, num);
      max = Math.max(max, runningMax);
    }
  }
  return max;
}
