/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 */

// O(n) time; O(n) space
function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, boolean>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const storedNum = map.get(num);
    if (storedNum) {
      return true;
    } else {
      map.set(num, true);
    }
  }
  return false;
}

// Brute force - O(n^2) time; O(1) space
function containsDuplicate2(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 === num2) return true;
    }
  }
  return false;
}
