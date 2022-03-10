// Write a code to determine if there are three integers in a given array of integers whose sum equals a given value.
// https://replit.com/@DennyHong/3-sum#index.ts

// O(n^2) time; O(1) space;
export function threeSum(nums: number[], target: number): boolean {
  // Does nums array has at least three numbers?
  if (nums.length < 3) return false;

  // Are these numbers sorted in any way?
  nums.sort((a, b) => a - b); // O(nlogn) time;

  // O(n^2) time
  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];
    // two pointers
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const num2 = nums[l];
      const num3 = nums[r];
      const sum = num1 + num2 + num3;
      if (sum === target) return true;
      if (sum < target) {
        l++;
      } else {
        // sum > target
        r--;
      }
    }
  }

  return false;
}

// O(n^2) time; O(n) space;
function threeSum1(nums: number[], target: number): boolean {
  // Does nums array has at least three numbers?
  if (nums.length < 3) return false;

  const mySet = new Set<number>(); // O(n) space;

  // O(n^2) time
  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      const diff = target - num2 - num1;
      if (mySet.has(diff)) return true;
      mySet.add(num1);
    }
    mySet.clear();
  }

  return false;
}

// O(n^3) time; O(1) space;
function threeSum2(nums: number[], target: number): boolean {
  // Does nums array has at least three numbers?
  if (nums.length < 3) return false;

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      const num2 = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const num3 = nums[k];
        const sum = num1 + num2 + num3;
        if (sum === target) return true;
      }
    }
  }

  return false;
}
