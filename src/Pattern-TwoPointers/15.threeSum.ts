//  Two pointers - O(n^2) time; O(1) space;
function threeSum(nums: number[], target = 0): number[][] {
  nums.sort((a, b) => a - b);
  const results: number[][] = []; // results doesn't count as extra memory

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];

    // if value on the current index is same as last index, we don't need to do any duplicate work
    if (i > 0 && nums[i - 1] === num1) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      const num2 = nums[leftPointer];
      const num3 = nums[rightPointer];
      const sum = num1 + num2 + num3;
      if (sum === target) {
        results.push([num1, num2, num3]);
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
      } else if (sum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return results;
}

export {};
