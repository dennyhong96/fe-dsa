// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Example:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 Do not return anything, modify nums in-place instead.
 */
export function rotate(nums: number[], k: number): void {
    const rotateBy = k % nums.length;
    const arr = [];
    for (let i = nums.length - rotateBy; i< nums.length; i++) {
        arr.push(nums[i]);
    }
    for (let i = nums.length - 1 - rotateBy; i >= 0; i--) {
        nums[i + rotateBy] = nums[i];
    }
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
};