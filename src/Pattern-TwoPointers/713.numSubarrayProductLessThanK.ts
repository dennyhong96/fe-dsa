// Sliding window - O(n) time; O(1) space;
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0; // subarray product not possible to be less than 1
  let count = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  let product = 1;
  while (rightPointer < nums.length) {
    product *= nums[rightPointer];
    while (product >= k) {
      product /= nums[leftPointer];
      leftPointer++;
    }
    count += rightPointer - leftPointer + 1;
    rightPointer++;
  }

  return count;
}

// Input: nums = [10,5,2,6], k = 100
// Output: 8;

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
