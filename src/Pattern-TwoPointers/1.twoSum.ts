// O(n) time; O(n) space;
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // diff -> index;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [i, map.get(diff)!];
    } else {
      map.set(num, i);
    }
  }
  return []; // should not trigger, problem has exactly one solution
}

// Brute force - O(n^2) time; O(1) space
function twoSum2(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    const diff = target - num1;
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (diff === num2) {
        return [i, j];
      }
    }
  }
  return [];
}
