/**
 * 70. Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 */

export function climbStairs(n: number) {
  if (n <= 2) return n;
  const db = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    db[i] = db[i - 1] + db[i - 2];
  }
  return db[n];
}
