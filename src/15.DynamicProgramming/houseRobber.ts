/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/
 */
export function houseRobber(houses: Array<number>) {
  if (!houses.length) return 0;
  if (houses.length < 3) return Math.max(...houses);

  // dp tracks the max amount of money one can rob up to that index (sub-problem)
  // so when we iterate to the last index we have the result to the whole problem
  const dp = new Map<number, number>();
  dp.set(0, houses[0]);
  dp.set(1, Math.max(houses[0], houses[1]));
  for (let i = 2; i < houses.length; i++) {
    dp.set(i, Math.max(houses[i] + dp.get(i - 2)!, dp.get(i - 1)!));
  }
  return dp.get(houses.length - 1);
}
// [1,2,3,1] -> 4
// [2,7,9,3,1] -> 12
