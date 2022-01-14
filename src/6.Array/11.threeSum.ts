// Two pointer - O(n^2) time; O(1) space (not counting the result array)
function threeSum(nums: number[], target = 0): number[][] {
  nums = nums.sort((a, b) => a - b); // O(n log(n)) time;

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];

    // if value on the current index is same as last index, we don't need to do any duplicate work
    if (i > 0 && num1 === nums[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const left = nums[leftPointer];
      const right = nums[rightPointer];
      const sum = num1 + left + right;

      if (sum === target) {
        result.push([num1, left, right]);
        leftPointer++;

        // if value on new leftPointer index is the same as last index where we found a solution
        // we don't need to do any duplicate work, increment leftPointer until we have a new value
        while (nums[leftPointer] === nums[leftPointer - 1]) {
          leftPointer++;
        }

        // Either keep incrementing leftPointer or keep decrementing rightPointer
        // rightPointer--;
        // while (nums[rightPointer] === nums[rightPointer + 1]) {
        //   rightPointer--;
        // }
      } else if (sum > target) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }
  }

  return result;
}
