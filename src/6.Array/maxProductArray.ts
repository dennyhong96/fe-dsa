function maxProduct(nums: number[]): number {
  let max = Math.max(...nums);
  let currMax = 1;
  let currMin = 1; // Need to track currMin as well to account for negetive numbers, -2 * -3 = 6
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // need to startover when num is 0
    if (num === 0) {
      currMax = 1;
      currMin = 1;
      continue;
    }

    // num could be negetive or positive
    const currMaxCopy = currMax;
    currMax = Math.max(num * currMax, num * currMin, num);
    currMin = Math.min(num * currMaxCopy, num * currMin, num);
    max = Math.max(currMax, max);
  }

  return max;
}
// [-2,0,-1]
