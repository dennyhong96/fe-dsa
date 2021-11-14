// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
            zeroCount++;
        } else {
            nums[i - zeroCount] = num;
        }
    }
    for (let i = nums.length - zeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};