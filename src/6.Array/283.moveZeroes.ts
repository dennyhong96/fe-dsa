export function moveZeroes(nums: number[]): void {
  // Array patition
  // the idea is to move all non-0 elements to the start of the array
  let nextSwapIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) continue;
    swap(nums, i, nextSwapIndex);
    nextSwapIndex++;
    // For our partitioning to work, we maintain the fact that
    // nextSwapIndex is always at the first occurance of 0 (except for initialy)
  }
}

function swap(nums: number[], index1: number, index2: number) {
  const tmp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = tmp;
}

// [1, 0, 1, 0, 3, 12]
//  li
// [1, 0, 1, 0, 3, 12]
//     li
// [1, 0, 1, 0, 3, 12]
//     nextSwapIndex  i
// [1, 1, 0, 0, 3, 12]
//        l  i
// [1, 1, 0, 0, 3, 12]
//        l     i
// [1, 1, 3, 0, 0, 12]
//           l      i
// [1, 1, 3, 12, 0, 0]
//               l    i
