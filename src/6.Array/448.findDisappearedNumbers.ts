// O(n) time; O(1) space;
function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index]; // mark index negetive to represent we have the (index + 1) number
    }
  }
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
}
// [4,3,2,7,8,2,3,1]
// [4,3,2,-7,8,2,3,1]
// [4,3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,3,1]
// [4,-3,-2,-7,8,2,-3,1]
// [4,-3,-2,-7,8,2,-3,-1]
// [-4,-3,-2,-7,8,2,-3,-1]

// O(n) time; O(1) space;
function findDisappearedNumbers1(nums: number[]): number[] {
  const res: (number | undefined)[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    res[num] = (res[num] ?? 0) + 1;
  }
  let nextInsertIndex = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (res[i] === undefined) {
      res[nextInsertIndex] = i;
      nextInsertIndex++;
    }
  }
  res.length = nextInsertIndex;
  return res as number[];
}

export {};
