// O(n) time; O(1) space;
export function sortedSquares(nums: number[]): number[] {
  // the idea is that the larger square values are closer to the two edges (left edge could be negetive)
  // we can use two pointers to traverse from two edges to middle, each iteration compare and shift larger square to the result array
  let l = 0;
  let r = nums.length - 1;
  const result: number[] = [];
  let nextInsertIndex = nums.length - 1;
  while (l <= r) {
    const lSquare = nums[l] * nums[l];
    const rSquare = nums[r] * nums[r];
    if (lSquare > rSquare) {
      result[nextInsertIndex] = lSquare; // O(1), this is better than result.shift(lSquare) which is O(n)
      l++;
    } else {
      // here also handles the l === r case for odd length nums
      result[nextInsertIndex] = rSquare;
      r--;
    }
    nextInsertIndex--;
  }
  return result;
}
