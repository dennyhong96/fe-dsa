// O(n^2) time; O(1) space;
function threeSumClosest(nums: number[], target: number): number {
  let result = nums[0] + nums[1] + nums[nums.length - 1];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i];
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      const num2 = nums[leftPointer];
      const num3 = nums[rightPointer];
      const sum = num1 + num2 + num3;
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum === target) {
        return result;
      } else if (sum < target) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }
  return result;
}
