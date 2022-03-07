// O(n) time; O(1) space;
export function findDuplicates(nums: number[]): number[] {
  const result: number[] = [];
  // all numbers are in range [1,n], positive
  for (let i = 0; i < nums.length; i++) {
    const cursor = Math.abs(nums[i]) - 1; // -1 since numbers in range [1,n], index starts off as 0
    // when we point to an index for the first time,
    // we mark that index negetive visited by marking number at that index negetive
    if (nums[cursor] > 0) {
      nums[cursor] = -nums[cursor];
    } else {
      // when we see number at that index is negetive,
      // we know that we've pointed to that index before
      // so this cursor is duplicated
      result.push(cursor + 1); // cursor + 1 is current num at i index
    }
  }
  return result;
}

// [4,3,2,7,8,2,3,1]
// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,-3,-1]
// ...
