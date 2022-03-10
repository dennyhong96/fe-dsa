// O(n) time; O(1) space;
function minDistance(nums: number[], num1: number, num2: number): number {
  // does nums contain duplicates?
  // Are nums sorted in any way?
  // Are num1 and num2 garrantied to be in the nums array?
  let min = Infinity;
  let lastNum1Index = -1;
  let lastNum2Index = -1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === num1) {
      if (lastNum2Index !== -1) {
        const distance = Math.abs(i - lastNum2Index);
        min = Math.min(min, distance);
      }
      lastNum1Index = i;
      continue;
    }

    if (num === num2) {
      if (lastNum1Index !== -1) {
        const distance = Math.abs(i - lastNum1Index);
        min = Math.min(min, distance);
      }
      lastNum2Index = i;
    }
  }
  return min === Infinity ? -1 : min; // handle num1 / num2 not in nums array
}

console.log(minDistance([1, 5, 3, 4, 4, 5, 2, 5, 8, 10], 4, 5));
