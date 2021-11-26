/**
 * 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * https://www.youtube.com/watch?v=nIVW4P8b1VA
 */

function findMin(nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  // while loop will break off with both left and right converging at one index, which will be
  // the minimum index
  while (leftIndex < rightIndex) {
    const right = nums[rightIndex];
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middle = nums[middleIndex];

    if (middle > right) {
      // [2,3,1], min is somewhere between middle -> right
      leftIndex = middleIndex + 1;
    } else {
      // [3,1,2],  min is somewhere between left -> middle
      rightIndex = middleIndex;
    }
  }
  return nums[leftIndex]; // can return nums[right] as well, both points to the minimum element
}
