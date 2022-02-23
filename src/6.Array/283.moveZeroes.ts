export function moveZeroes(nums: number[]): void {
  // Array patition
  // the idea is to move all non-0 elements to the start of the array
  let firstZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) continue;
    swap(nums, i, firstZeroIndex);
    firstZeroIndex++;
    // For our partitioning to work, we maintain that from index 0 -> index firstZeroIndex,
    // all indexes in between are non-zero numbers
  }
}

function swap(nums: number[], index1: number, index2: number) {
  const tmp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = tmp;
}

// [2, 4, 0, 1, 0, 3, 12]
// fl
// [2, 4, 0, 1, 0, 3, 12]
//     fl
// [2, 4, 0, 1, 0, 3, 12]
//        f  l
// [2, 4, 1, 0, 0, 3, 12]
//           f  l
// [2, 4, 1, 0, 0, 3, 12]
//           f     l
// [2, 4, 1, 3, 0, 0, 12]
//              f      l
// [2, 4, 1, 3, 12, 0, 0]
//                  f      l
