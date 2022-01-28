function findDuplicates(nums: number[]): number[] {
  // The value of each element -1 can also be an index of the array
  const results: number[] = [];

  // Loop throught the nums array
  for (let i = 0; i < nums.length; i++) {
    const pointer = Math.abs(nums[i]) - 1; // Go to the number at (num - 1) index,
    if (nums[pointer] < 0) {
      // When we see a number at (num - 1) index that's negetive
      // We know we have seen the same num before
      results.push(Math.abs(nums[i]));
    } else {
      nums[pointer] = -nums[pointer]; // mark as negetive if it's positive
    }
  }

  return results;
}

export {};

// [4,3,2,7,8,2,3,1]
// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,-3,-1]
// ...
