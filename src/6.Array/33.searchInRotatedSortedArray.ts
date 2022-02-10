/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

// O(log(n)) time; O(1) space
function search(nums: number[], target: number): number {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const left = nums[leftPointer];
    const right = nums[rightPointer];

    const midIndex = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    const mid = nums[midIndex];

    if (mid === target) return midIndex;

    if (mid < right) {
      if (target < mid || target > right) {
        rightPointer = midIndex - 1;
      } else {
        leftPointer = midIndex + 1;
      }
    } else {
      if (target > mid || target < left) {
        leftPointer = midIndex + 1;
      } else {
        rightPointer = midIndex - 1;
      }
    }
  }
  return -1;
}

// [1,2,3,4,5]

// if m = target return

// if m < r
// [5,1,2,3,4]
// if (target < m || target > r) search l -> m - 1
// else search m + 1 -> r

// if m > r
// [2,3,4,5,1]
// if (target > m || target < l) search m + 1 -> r
// else search l -> m - 1
