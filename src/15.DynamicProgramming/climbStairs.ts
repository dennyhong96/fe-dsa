/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
  if (n < 3) return n;

  // DP array tracks max number of ways to climb when there are 'index' amount of stairs to climb
  const waysToClimbForStair = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    waysToClimbForStair[i] =
      waysToClimbForStair[i - 1] + waysToClimbForStair[i - 2];
  }
  return waysToClimbForStair[n];
}
