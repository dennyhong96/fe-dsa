/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

// O(log(n)) time; O(1) space
function search(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const middle = nums[middleIndex];
    if (middle === target) return middleIndex;

    const right = nums[rightIndex];

    // [2,4,5,6,7,0,1]
    // [L     M     R]
    // middle is within the left sorted sub-array: [2,4,5,6]
    if (middle > right) {
      if (target > middle) {
        leftIndex = middleIndex + 1; // Search right side
      } else {
        // if (target < middle), target could be on both side of middle
        if (target <= right) {
          leftIndex = middleIndex + 1; // Search right side
        } else {
          rightIndex = middleIndex - 1; // Search left side
        }
      }

      // [6,7,0,1,2,4,5]
      // [L     M     R]
      // middle is within the right sorted sub-array: [1,2,4,5]
    } else {
      if (target > middle) {
        // target could be on both side of middle
        if (target <= right) {
          leftIndex = middleIndex + 1; // Search right side
        } else {
          rightIndex = middleIndex - 1; // Search left side
        }
      } else {
        rightIndex = middleIndex - 1; // Search left side
      }
    }
  }

  return -1;
}
