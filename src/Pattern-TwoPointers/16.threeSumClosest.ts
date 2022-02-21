// O(n^2) time; O(1) space;
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const num2 = nums[l];
      const num3 = nums[r];
      const sum = num1 + num2 + num3;
      if (sum === target) return sum;
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum > target) {
        r--;
      } else {
        // sum < target;
        l++;
      }
    }
  }

  return closest;
}
