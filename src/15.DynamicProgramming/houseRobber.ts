/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/
 */
export function houseRobber(nums: number[]): number {
  if (!nums.length) return 0;
  if (nums.length <= 2) return Math.max(...nums);

  // dp tracks the max amount of money one can rob up to that day(index) (sub-problem)
  // so when we iterate to the last index we have the result to the whole problem
  const maxMoneyRobbed: Array<number> = []; // DP array
  maxMoneyRobbed[0] = nums[0];
  maxMoneyRobbed[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const robTodayMax = nums[i] + maxMoneyRobbed[i - 2];
    const robYesterdayMax = maxMoneyRobbed[i - 1];
    maxMoneyRobbed[i] = Math.max(robTodayMax, robYesterdayMax);
  }
  return maxMoneyRobbed[nums.length - 1];
}
// [1,2,3,1] -> 4
// [2,7,9,3,1] -> 12
