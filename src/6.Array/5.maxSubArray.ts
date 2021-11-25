// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// O(n) time; O(n) space
function maxSubArray(nums: number[]): number {
  let maxSum = -Infinity;
  let runningSum = 0;

  // If current number itself is larger than the runningSum of everything to the left,
  // we want to reset the runningSum to just this current number
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    runningSum = Math.max(runningSum + num, num);
    maxSum = Math.max(maxSum, runningSum);
  }
  return maxSum;
}

// Brute force - O(n^2) time; O(1) space
function maxSubArray2(nums: number[]): number {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    let currSum = num1;
    let currMaxSum = num1; // currMaxSum is the maxSum of subarrays that starts with index i
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      currSum = currSum + num2;
      currMaxSum = Math.max(currMaxSum, currSum);
    }
    maxSum = Math.max(maxSum, currMaxSum);
  }
  return maxSum;
}
