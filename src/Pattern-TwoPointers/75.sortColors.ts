// Partition, 1 pass - O(n) time; O(1) space;
function sortColors(nums: number[]): void {
  let swapZeroIndex = 0;
  let swapTwoindex = nums.length - 1;
  let currIndex = 0;
  // The algorithm is everything <= currIndex is either a 0 or a 1
  // everything > currIndex is a 2
  while (currIndex <= swapTwoindex) {
    const num = nums[currIndex];
    if (num === 0) {
      const tmp = nums[swapZeroIndex];
      nums[swapZeroIndex] = num;
      nums[currIndex] = tmp;
      swapZeroIndex++;
      currIndex++;
    } else if (num === 2) {
      const tmp = nums[swapTwoindex];
      nums[swapTwoindex] = num;
      nums[currIndex] = tmp;
      swapTwoindex--;
      // can't increment currIndex in this case because the new num at currIndex might be a 0 or a 1, if it's a 0 we still need to swap it to swapZeroIndex
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
