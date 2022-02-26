// O(n) time; O(1) space
export function maxProduct(nums: number[]): number {
  let max = -Infinity;
  let runningMax = 1;
  let runningMin = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // any thing product with 0 is 0
    // we need to compare current max with 0
    // we also need to reset runningMax and runningMin
    if (num === 0) {
      runningMax = 1;
      runningMin = 1;
      max = Math.max(max, 0);
      continue;
    }

    // update runningMax and runningMin
    // need to compare 3 things,
    // - Case1: expand subarray, include the new num
    //      - 1. the new runningMax profuct with num
    //      - 2. the new runningMin product with num
    // - Case2: init a new subarray starting from the new num
    //      - 3. the new num itself
    const runningMaxCopy = runningMax;
    runningMax = Math.max(runningMax * num, runningMin * num, num);
    runningMin = Math.min(runningMaxCopy * num, runningMin * num, num);
    max = Math.max(max, runningMax, runningMin);
  }

  return max;
}
