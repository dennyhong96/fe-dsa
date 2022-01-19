// O(n) time; O(1) space;
// Floyd's LinkedList Cycle Detection
function findDuplicate(nums: number[]): number {
  // Use a LinkedList to represent nums, each num is a node, pointing to nums[num]
  // [1,3,4,2,2] 1 -> 3 -> 2 -> 4 -> 2 (both 3 and 4 points to 2, linked list has a cycle)

  // Phase1: find the intersactions between fast and slow pointers
  let slowPointer = 0;
  let fastPointer = 0;
  while (true) {
    slowPointer = nums[slowPointer]; // move slowPointer by one node
    fastPointer = nums[nums[fastPointer]]; // move fastpointer by two nodes
    // never goes out of bounds because (nums length = n + 1), each num is in range [1, n]
    if (slowPointer === fastPointer) {
      break; // slowPointer and fastPointer are intersacting
    }
  }

  // Phase2: find the start of the LinkedList cycle
  let slowPointer2 = 0;
  while (true) {
    slowPointer = nums[slowPointer];
    slowPointer2 = nums[slowPointer2];
    if (slowPointer === slowPointer2) {
      break; /// slowPointer and slowPointer2 are intersacting, both at the start of the cycle
    }
  }

  return slowPointer; // slowPointer or slowPointer2 is the duplicate, because two links points to it in the LinkedList
}

// O(nlogn) time; O(1) space;
function findDuplicate1(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
  return -1;
}

// O(n^2) time; O(1) space;
function findDuplicate2(nums: number[]): number {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i];
    }
  }
  return -1;
}

export {};
