// O(n) time; o(n) space;
function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // Test if the num is the start of a sequence
    if (!set.has(num - 1)) {
      let runningSequenceLength = 0;
      while (set.has(num)) {
        runningSequenceLength++;
        num++; // Test if next num in sequence is in the set
      }
      longest = Math.max(longest, runningSequenceLength);
    }
  }
  return longest;
}

// Solution is O(n) time because each num in nums is visited at least 1 time(if the num is start of a sequence),
// at most 2 times(if the num is in the middle of a sequence)

// [100,4,200,1,3,2]
// 100 -> runningSequenceLength: 1
// 4
// 200 -> runningSequenceLength: 1
// 1,2,3,4 -> runningSequenceLength: 4
// 3
// 2

export {};
