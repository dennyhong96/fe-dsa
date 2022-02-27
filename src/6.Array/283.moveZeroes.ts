export function moveZeroes(nums: number[]): void {
  // Array patition
  // the idea is to move all non-0 elements to the start of the array
  let nextInsertIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // if num is 0, we have no work to do
    if (num === 0) continue;

    // if num is not 0, we swap it with the nextInsertIndex
    // then we increment nextInsertIndex
    // We maintain that number on indexes 0 <= i <= nextInsertIndex are all 0s
    swap(nums, i, nextInsertIndex);
    nextInsertIndex++;
  }
}

function swap(nums: number[], index1: number, index2: number) {
  const tmp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = tmp;
}

//  [0, 1, 0, 3, 12]
//   zi
//  [1, 0, 0, 3, 12]
//   z  i
//  [1, 0, 0, 3, 12]
//      z  i
//  [1, 3, 0, 0, 12]
//          z     i
//  [1, 3, 12, 0, 0]
//            z   i
