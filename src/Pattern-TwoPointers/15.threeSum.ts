// O(n^2) time; O(1) space;
export function threeSum(nums: number[], target = 0): number[][] {
  const result: number[][] = [];

  // we need to sort the nums array first, this is so we can prevent duplicate easily
  // then we can use one loop to set num1, than use two pointers to find num2 and num3 such that they sums to target
  nums.sort((a, b) => a - b); // O(nlogn) time;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // this is how we prevent duplicate, we can do this because nums is sorted
    const num1 = nums[i];

    // Compute all combinations that starts with num1
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const num2 = nums[l];
      const num3 = nums[r];
      const sum = num1 + num2 + num3;
      if (sum === target) {
        result.push([num1, num2, num3]);
        l++;

        // we have prevent duplicate here too, same idea
        while (nums[l] === nums[l - 1]) {
          l++;
        }
      } else if (sum < target) {
        l++;
      } else {
        // sum > target;
        r--;
      }
    }
  }

  return result;
}
