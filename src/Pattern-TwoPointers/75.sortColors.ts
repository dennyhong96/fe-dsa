// Partition, 1 pass - O(n) time; O(1) space;
function sortColors(nums: number[]): void {
  let swapZeroToIndex = 0; // number at index < swapZeroToIndex must be 0
  let swapTwoToindex = nums.length - 1; // number at index > swapTwoToindex must be 2
  let currIndex = 0; // number at index < currIndex must be 0 or 1, number at index > currIndex must be 2
  // number at index swapZeroToIndex <= index < currIndex must be 1
  while (currIndex <= swapTwoToindex) {
    const num = nums[currIndex];
    if (num === 0) {
      const tmp = nums[swapZeroToIndex];
      nums[swapZeroToIndex] = num;
      nums[currIndex] = tmp;
      swapZeroToIndex++;
      currIndex++;
      // can increment currIndex since its guaranteed tmp is 1. This is because all 0s and 2s are moved to the edges.
    } else if (num === 2) {
      const tmp = nums[swapTwoToindex];
      nums[swapTwoToindex] = num;
      nums[currIndex] = tmp;
      swapTwoToindex--;
      // can't increment currIndex, because the new num at currIndex might be a 0 or a 2, which still needs swapping
    } else {
      currIndex++;
    }
  }
}

// Bucket sort, 2 passes - O(n) time; O(1) space
function sortColors1(nums: number[]): void {
  const buckets = [0, 0, 0]; // O(3) -> O(1) space fixed number of buckets

  // O(n)
  for (const num of nums) {
    buckets[num]++;
  }

  let numIndex = 0;
  // O(3) -> O(1)
  for (let colorIndex = 0; colorIndex < buckets.length; colorIndex++) {
    const counts = buckets[colorIndex];

    // O(n)
    for (let i = 0; i < counts; i++) {
      nums[numIndex] = colorIndex;
      numIndex++;
    }
  }
}

// quickSort - avg. O(nlogn) time, worst O(n^2) time, avg O(logn) space ,worst O(n) space
function sortColors2(
  nums: number[],
  startIndex = 0,
  endIndex = nums.length - 1
): void {
  if (endIndex <= startIndex) return;
  let pivotIndex = endIndex;
  let currIndex = startIndex;
  while (currIndex < pivotIndex) {
    const pivot = nums[pivotIndex];
    const curr = nums[currIndex];
    if (curr >= pivot) {
      const numBeforePivot = nums[pivotIndex - 1];
      nums[currIndex] = numBeforePivot;
      nums[pivotIndex - 1] = pivot;
      nums[pivotIndex] = curr;
      pivotIndex--;
    } else {
      currIndex++;
    }
  }
  sortColors2(nums, startIndex, pivotIndex - 1);
  sortColors2(nums, pivotIndex + 1, endIndex);
}

export {};
