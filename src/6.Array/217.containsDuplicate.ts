// O(n) time; O(n) space
export function containsDuplicate(nums: number[]): boolean {
  const mySet = new Set<number>(nums);
  return mySet.size < nums.length;
}

// O(nlogn) time; O(1) space;
function containsDuplicate1(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
}

// Brute force - O(n^2) time; O(1) space
function containsDuplicate2(nums: number[]): boolean {
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 === num2) return true;
    }
  }
  return false;
}
