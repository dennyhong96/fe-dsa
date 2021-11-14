// Given an integer array nums, return true if any value appears
// at least twice in the array, and return false if every element is distinct.
// Example:
// Input: nums = [1,2,3,1]
// Output: true

export function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, boolean>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.get(num)) {
            return true;
        } else {
            map.set(num, true);
        }
    }
    return false;
};