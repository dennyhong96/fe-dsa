// Partition, 1 pass - O(n) time; O(1) space;
function sortColors(nums: number[]): void {
  let curr = 0;
  let nextZero = -1;
  let nextTwo = nums.length;

  // The idea is that we partition the nums array into 3 segments
  // And we need to maintain these hard constrians:
  // Partition into 3 segments
  // 0 index       <= i  <= nextZero    - all 0s
  // nextZero      <  i  < nextTwo      - all 1s
  // nextTwo       <= i  < nums.length  - all2s
  while (curr < nextTwo) {
    const num = nums[curr];
    if (num === 2) {
      // reserve a space for the 2 first
      nextTwo--;
      swap(nums, curr, nextTwo); // [0,1,2*,0,2] -> [0,1,2,0,2*] | [0,1,2*,0,0] -> [0,1,0,0,2*]
      // can't increment curr, we don't know what number is at curr now
    } else if (num === 0) {
      // reseve a space for the 0 first
      nextZero++;
      swap(nums, curr, nextZero); // [0,1,0*,2,2] -> [0,0*,1,2,2] | [0,0,0*,1,2,2] -> [0,0,0*,1,2,2]
      curr++; // we can safely increment curr because we know for sure number at curr now is 0 or 1, and is correctly ordered
    } else {
      // [0,1,1*,2,0]
      curr++;
    }
  }
}
// https://www.youtube.com/watch?v=aVOm2Kickys

function swap(nums: number[], index1: number, index2: number): void {
  const tmp = nums[index1];
  nums[index1] = nums[index2];
  nums[index2] = tmp;
}

// Bucket sort, 2 passes - O(n) time; O(1) space
function sortColors1(nums: number[]): void {
  // since we have a constant amount of "buckets" - 0,1,2
  // the idea is to use one pass to record how many element in each bucket
  // then use another pass to re-arrange the input array accordingly

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
