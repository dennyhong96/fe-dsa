/**
 * 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 */

// O(n) time; O(n) space
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // num as key, index as value
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    const storedIndex = map.get(diff);
    if (storedIndex !== undefined) {
      return [i, storedIndex];
    } else {
      map.set(num, i);
    }
  }
  return [];
}

// Brute force - O(n^2) time; O(1) space
function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const diff = target - num1;
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (diff === num2) {
        return [i, j];
      }
    }
  }
  return [];
}
