// O(n) time; O(1) space; standard sliding window template
export function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = Infinity;
  let runningSum = 0;
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    // Step 1: Expand the sliding window by adding the new num into running sum
    const num = nums[i];
    runningSum += num;

    // Step 2: Keep shrinking the sliding window by moving l right as long as runningSum >= target
    // while loop instead of if because the current num could be very large
    // so that we still satisfy runningSum >= target after moving l to the right for the first time
    while (runningSum >= target) {
      minLen = Math.min(minLen, i - l + 1);
      const lNum = nums[l];
      runningSum -= lNum;
      l++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
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
