/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

// Two pointers - O(n) time; O(1) space
function twoSumII(numbers: number[], target: number): number[] {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;
  while (leftIndex < rightIndex) {
    const left = numbers[leftIndex];
    const right = numbers[rightIndex];
    const sum = left + right;
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1];
    } else if (sum < target) {
      // numbers are sorted non-decreasing,
      // so if we want a larger sum we can increase left pointer index
      leftIndex++;
    } else {
      // numbers are sorted non-decreasing,
      // so if we want a smaller sum we can decrease right pointer index
      rightIndex--;
    }
  }
  return [];
}

// Brute force - O(n^2) time; O(1) space
function twoSumII2(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    const num1 = numbers[i];
    const diff = target - num1;
    for (let j = i + 1; j < numbers.length; j++) {
      const num2 = numbers[j];
      if (num2 === diff) return [i + 1, j + 1];

      // numbers are sorted non-decreasing,
      // No point of continuing if num1 + num2 is already greater than target
      // since if will be even larger in the next iteration
      if (num1 + num2 > target) break;
    }
  }
  return [];
}
