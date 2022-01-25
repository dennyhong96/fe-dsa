// Two pointers - O(n) time; O(1) space;
function sortedSquares(nums: number[]): number[] {
  let l = 0;
  let r = nums.length - 1;
  const result: number[] = [];
  let index = nums.length - 1;

  // The larger squared values are at the edges of the nums array
  while (l <= r && index >= 0) {
    const lSquare = nums[l] * nums[l];
    const rSquare = nums[r] * nums[r];
    if (lSquare >= rSquare) {
      result[index] = lSquare;
      l++;
    } else {
      result[index] = rSquare;
      r--;
    }
    index--;
  }
  return result;
}

// O(nlogn) time; O(nlogn) space;
function sortedSquares1(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  quickSort(nums);
  return nums;
}

const quickSort = (
  nums: number[],
  startIndex = 0,
  endIndex = nums.length - 1
): void => {
  if (endIndex <= startIndex) return;
  let pivotIndex = endIndex;
  let currIndex = 0;
  while (currIndex < pivotIndex) {
    const pivot = nums[pivotIndex];
    const numBeforePivot = nums[pivotIndex - 1];
    const curr = nums[currIndex];
    if (curr > pivot) {
      nums[currIndex] = numBeforePivot;
      nums[pivotIndex - 1] = pivot;
      nums[pivotIndex] = curr;
      pivotIndex--;
    } else {
      currIndex++;
    }
  }
  quickSort(nums, startIndex, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, endIndex);
};

// Partition - Move firstPositiveIndex to 0 - O(n^2) time; O(1) space;
function sortedSquares2(nums: number[]): number[] {
  let firstPositiveIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      firstPositiveIndex = i;
      break;
    }
  }
  let z = firstPositiveIndex;
  while (z > 0) {
    const num = nums[z - 1];
    if (Math.abs(num) >= Math.abs(nums[nums.length - 1])) {
      for (let j = z - 1; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
      nums[nums.length - 1] = num;
      z--;
    } else {
      for (let i = z; i < nums.length; i++) {
        if (Math.abs(nums[i]) >= Math.abs(num)) {
          for (let j = z - 1; j < i; j++) {
            nums[j] = nums[j + 1];
          }
          nums[i - 1] = num;
          z--;
          break;
        }
      }
    }
  }
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // All nums are negetive if firstPositiveIndex is -1
    if (firstPositiveIndex === -1) {
      result[nums.length - 1 - i] = nums[i] * nums[i];
    } else {
      result[i] = nums[i] * nums[i];
    }
  }
  return result;
}
