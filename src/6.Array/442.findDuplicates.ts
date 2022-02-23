export function findDuplicates(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    const pointingIndex = num - 1; // -1 to avoid out of bounds
    const pointingNum = nums[pointingIndex];
    if (pointingNum < 0) {
      // there was a number pointing to this pointingNum before
      // which means the current num is a duplicate
      result.push(num);
    } else {
      // this is the first time pointingNum is being pointed to
      // we negetive the number to mark as pointed
      nums[pointingIndex] = -nums[pointingIndex];
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
