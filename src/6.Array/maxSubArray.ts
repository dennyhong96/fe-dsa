// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Example:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

export function maxSubArray(nums:number[]) {
  if (!nums.length) {
    throw new Error('Array cannot be empty.')
  }
  let maxContiguousSum: number = nums[0];
  let maxSum: number = maxContiguousSum;
  for (let i = 1; i < nums.length; i++) {
      const num = nums[i];

      // Check if which one is larger
      // Adding up this number with previous sum, or this number itself
      const newMaxContiguousSum = num + maxContiguousSum;
      maxContiguousSum = Math.max(newMaxContiguousSum, num);
      if (maxContiguousSum > maxSum) {
          maxSum = maxContiguousSum;
      }
  }
  return maxSum;
}