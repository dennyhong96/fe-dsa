// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

export function twoSum(nums: number[], target: number): number[] {
    if (nums.length === 2) return [0, 1];
    const map = new Map<number,number>();
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const diff = target - num;
      const diffIndex = map.get(diff);
      if (diffIndex !== undefined) {
        return [diffIndex, i];
      } else {
        map.set(num, i);
      }
    }
    return [];
};