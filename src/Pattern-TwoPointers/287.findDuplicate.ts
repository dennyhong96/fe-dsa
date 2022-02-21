// O(n) time; O(1) space;

export function findDuplicate(nums: number[]): number {
  // Floyd's LinkedList Cycle Detection
  // The idea is to use a LinkedList to represent nums arr, each num is a node, pointing to nums[num]
  // nums = [1,3,4,2,2] -> 0->1->3->2->4->2->4->2... 4 & 2 points to each other, there's a cycle. 2 is the start of the cycle

  // 1. find intersection of fast and slow pointer
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow]; // move slow by one node
    fast = nums[nums[fast]]; // move fast by two nodes
    // never goes out of bounds because (nums length = n + 1), each num is in range [1, n]
    if (slow === fast) break; // slow and fast are intersacting
  }

  // 2. use slow pointer and a secondary slow pointer to locate start of linked list cycle
  let slow2 = 0;
  while (true) {
    // move both slow and slow2 by one node
    slow = nums[slow];
    slow2 = nums[slow2];
    if (slow === slow2) break; // slow and slow2 are intersacting, both at the start of the cycle
  }

  return slow; // slow or slow2 is the duplicate, also the start of the linked list cycle
}

// O(n) time; O(1) space; - Mutating original nums array
function findDuplicate1(nums: number[]): number {
  // the idea is to use the number in the nums arr as index for next iteration
  // for each iteraction mark the current number to be negetive
  // when we encounter a negetive number in a future iteration, we know that
  // the index pointing to this negetive number is duplicated
  let nextIndex = 0;
  while (true) {
    const num = nums[nextIndex];
    if (num < 0) return nextIndex;
    nums[nextIndex] = -nums[nextIndex];
    nextIndex = num;
  }
  return -1;
}
// nums = [1, 3, 4, 2, 2]; n = 4; 1 <= num <= 4

// O(nlogn) time; O(1) space; - Mutating original nums array
function findDuplicate2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
  return -1;
}

// Brute force - O(n^2) time; O(1) space;
function findDuplicate3(nums: number[]): number {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return -1;
}
