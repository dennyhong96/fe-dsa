// O(n) time; O(1) space;
export function twoSum(numbers: number[], target: number): number[] {
  // since numbers array is sorted, we can use two pointers technique
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1]; // +1 because problem says 1-indexed array
    if (sum < target) {
      l++;
      // since numbers is sorted, increasing l means we will have greater sum in the next iteration
    } else {
      r--;
      // since numbers is sorted, decreasing r means we will have smaller sum in the next iteration
    }
  }
  return []; // should not trigger, problem has exactly one solution
}
