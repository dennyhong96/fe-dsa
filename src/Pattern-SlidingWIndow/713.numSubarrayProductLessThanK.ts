// Sliding window - O(n) time; O(1) space;
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0; // subarray product not possible to be strictly less than 1

  let runningProduct = 1; // product starts off at 1
  let subarrCount = 0;

  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    // expand the sliding window
    const num = nums[i];
    runningProduct *= num;

    // shrink the sliding window until runningProduct is strictly smaller than k
    while (runningProduct >= k) {
      const lNum = nums[l];
      runningProduct /= lNum;
      l++;
    }
    subarrCount += i - l + 1;
    // the idea behind incrementing subarrCount:
    // the new num itself is a new subarr, also the new num together with every previous subarr
    // For example:
    // [10, 5, 2, 6], subarrs: [10] [5] [10, 5],                    subarr count 3
    //         i
    // when adding 2, subarrs: [10] [5] [10, 5] [2] [5,2] [10,5,2], subarr count 6 (+3), +3 comes from (i - l + 1)
  }

  return subarrCount;
}

// Two pointers - O(n) time; O(1) space;
function numSubarrayProductLessThanK1(nums: number[], k: number): number {
  let count = 0;
  let leftPointer = 0;
  let rightPointer = 1;
  let isNewStart = true;
  let product = nums[leftPointer];
  while (leftPointer < nums.length) {
    if (isNewStart) {
      product = nums[leftPointer];
      if (product < k) count++; // num itself as a subarray
    }
    const rightNum: number | undefined = nums[rightPointer]; // rightPointer is out of bounds when [leftPointer,end] subarray product is less than  k
    if (rightNum !== undefined && product * rightNum < k) {
      count++;
      product = product * rightNum;
      isNewStart = false;
      rightPointer++;
    } else {
      isNewStart = true;
      leftPointer++;
      rightPointer = leftPointer + 1;
    }
  }
  return count;
}

// Brute force - O(n^2) time; O(1) space;
function numSubarrayProductLessThanK2(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let product = nums[i];
    if (product < k) count++;
    for (let j = i + 1; j < nums.length; j++) {
      const num = nums[j];
      const newProduct = product * num;
      if (newProduct < k) {
        count++;
        product = newProduct;
      } else {
        break;
      }
    }
  }
  return count;
}
