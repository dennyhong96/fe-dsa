// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// O(n) time; O(1) space
function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // the idea is the scan throught the array
    // for each element, update the runningSum to the larger one between
    //  - the current num itself
    //  - the runningSum up to now plus the current number
    // then compare and update the max
    // the idea is that since negetive numbers can exist
    // if the curr number itself is larger than runningSum + current num
    // that means the runningSum is negetive, so we can ignore it, restart from current num
    const num = nums[i];
    const newSum = runningSum + num;
    runningSum = Math.max(num, newSum);
    max = Math.max(max, runningSum);
  }
  return max;
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
