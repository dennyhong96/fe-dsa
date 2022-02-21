// O(n) time; o(n) space;
export function longestConsecutive(nums: number[]): number {
  // nums = [100,4,200,1,3,2]
  // if we were to sort the nums, the sequences is obvious - 1,2,3,4  100  200
  // loop through the nums and check if each number is the start of a sequence ( if mySet does not contain num - 1, it is a start of sequence)
  // a. if num is start of sequence, keep incrementing num with 1, as long as mySet has num + 1.
  //    This is so we know the length of this current sequence, which is a potential result
  // b. if num is not start of sequence, do not need to process it, skip to next in nums
  const mySet = new Set(nums);
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const isStartOfSequence = !mySet.has(num - 1);
    if (!isStartOfSequence) continue;
    let sequenceLength = 0;
    let nextInSequence = num;
    while (mySet.has(nextInSequence)) {
      sequenceLength++;
      nextInSequence++;
    }
    longest = Math.max(longest, sequenceLength);
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
