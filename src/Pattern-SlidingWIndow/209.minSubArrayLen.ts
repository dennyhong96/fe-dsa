// O(n) time; O(1) space;
function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let min = Infinity;
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    runningSum += num;
    // Still O(n) since both left and right points will only iterate list at most once.
    // After the left items are popped up, they won't loop again
    while (runningSum >= target) {
      const len = i - l + 1;
      min = Math.min(min, len);
      const lNum = nums[l];
      runningSum -= lNum;
      l++;
    }
  }
  return min === Infinity ? 0 : min;
}

// O(n) time; O(1) space;
function minSubArrayLen1(target: number, nums: number[]): number {
  let p1 = 0;
  let p2 = 0;
  let min = Infinity;
  let runningSum = 0;
  while (p2 < nums.length) {
    const num2 = nums[p2];
    runningSum += num2;
    if (runningSum >= target) {
      const len = p2 - p1 + 1;
      if (len === 1) return 1;
      min = Math.min(min, len);
      const num1 = nums[p1];
      runningSum -= num1;
      runningSum -= num2; // remove num2 also, since it'll be added back in next iteration
      p1++;
    } else {
      p2++;
    }
  }
  return min === Infinity ? 0 : min;
}

export {};
