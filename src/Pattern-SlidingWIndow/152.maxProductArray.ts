// O(n) time; O(1) space
function maxProduct(nums: number[]): number {
  if (!nums.length) return 0;

  // the idea is to use two variables to hold both running min and running max values
  // since negative * negative could also be positive
  let max = nums[0];
  let runningMax = 1; // product starts off at 1
  let runningMin = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      // reset runningMax and runningMin to 1 here so that later iteration works
      // anything * 0 = 0
      runningMax = 1;
      runningMin = 1;
      max = Math.max(max, 0);
    } else {
      const runningMaxCopy = runningMax;
      // new runningMax could be:
      //      current runningMax * new num when runningMax and new num are both positive
      //      current runningMin * new num when runningMin and new num are both negetive
      //      new num itself, which means we basically starts over the contiguous subarr with the new num
      // same goes for new runningMin
      runningMax = Math.max(runningMax * num, runningMin * num, num);
      runningMin = Math.min(runningMaxCopy * num, runningMin * num, num);
      max = Math.max(max, runningMax, runningMin); // update max
    }
  }
  return max;
}
