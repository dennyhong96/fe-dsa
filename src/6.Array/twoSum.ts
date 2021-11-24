/**
 * Two Sum
 * https://leetcode.com/problems/two-sum/
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value as key, index as number
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const diff = target - currNum;
    if (map.get(diff) !== undefined) {
      return [i, map.get(diff) as number];
    } else {
      map.set(currNum, i);
    }
  }
  return [];
}
