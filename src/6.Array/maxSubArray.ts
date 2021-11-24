// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
export function maxSubArray(nums: number[]) {
  let maxSum = -Infinity;
  let maxContiguousSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const newContiguousSum = maxContiguousSum + num;

    // Check which one is larger -
    // Adding up this number with previous maxContiguousSum, or this number by itself
    maxContiguousSum = Math.max(newContiguousSum, num);
    maxSum = Math.max(maxSum, maxContiguousSum);
  }
  return maxSum;
}
