// quickSort - avg. O(nlogn) time, worst O(n^2) time, avg O(logn) space ,worst O(n) space
export function quickSort(
  nums: number[],
  start = 0,
  end = nums.length - 1
): void {
  // console.log({nums, start, end})
  if (end - start <= 0) return; // no need to sort array with one number
  let currIndex = start;
  let pivotIndex = end;
  // we move pivot into its correct position
  // make sure every num before pivot is smaller than pivot
  // make sure every num after pivot is larger than pivot
  // than keep calling quickSort recursively for portion before and after pivot
  while (currIndex < pivotIndex) {
    const curr = nums[currIndex];
    const pivot = nums[pivotIndex];
    if (curr > pivot) {
      const numBeforePivot = nums[pivotIndex - 1];
      nums[currIndex] = numBeforePivot; // set currIndex to numBeforePivot first to handle edge case where pivot is going into 1st index
      nums[pivotIndex - 1] = pivot;
      nums[pivotIndex] = curr; // make sure curr is after pivot, since its larger
      pivotIndex--; // reflect new pivot index
      // cannot increment currIndex, new num at currIndex still could be larger than pivot
    } else {
      // if curr < pivot, no need to swap, curr index is correct
      currIndex++;
    }
  }
  // do not include pivotIndex in recursive calls, it is already at correct index
  quickSort(nums, start, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, end);
}
// curr = 4
// pivot = 1
// numBeforePivot = 4
// [4, 1, 2, 3]
//  c  p

// [100, 70, 74, 30, 23, 200, 5, 95]
// [5, 70, 74, 30, 23, 200, 95, 100]
// [5, 70, 74, 30, 23, 95, 200, 100] --> stop i = k
