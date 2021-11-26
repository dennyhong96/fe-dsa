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

    const left = nums[leftIndex];
    const right = nums[rightIndex];

    // [2,4,5,6,7,0,1]
    // [L     M     R]
    // middle is within the left sorted sub-array: [2,4,5,6]
    if (middle > right) {
      if (
        target > middle || // 7
        target < left // 0,1
      ) {
        leftIndex = middleIndex + 1; // search (M + 1) -> R
      } else {
        // (target < middle)
        rightIndex = middleIndex - 1; // search L -> (M - 1)
      }

      // [6,7,0,1,2,4,5]
      // [L     M     R]
      // middle is within the right sorted sub-array: [1,2,4,5]
    } else {
      if (
        target < middle || // 0
        target > right // 6,7
      ) {
        rightIndex = middleIndex - 1; // search L -> (M - 1)
      } else {
        // (target > middle)
        leftIndex = middleIndex + 1; // search (M + 1) -> R
      }
    }
  }

  return -1;
}
