// O(n) time; O(1) space;
export function findDisappearedNumbers(nums: number[]): number[] {
  // Idea, use the original input array
  // value to index mapping [1, n] -> [0, n - 1]
  for (let i = 0; i < nums.length; i++) {
    const pointer = Math.abs(nums[i]) - 1;
    const pointingNumber = nums[pointer];
    if (pointingNumber > 0) {
      // this is the first time the pointingNumber has been pointed tos
      nums[pointer] = -pointingNumber; // mark this pointer as visited
    }
    // pointer is already visited, continue
  }
  // [4,3,2,7,8,2,3,1]
  // [4,3,2,-7,8,2,3,1]
  // [4,3,-2,-7,8,2,3,1]
  // [4,3,-2,-7,8,2,-3,1]
  // [4,3,-2,-7,8,2,-3,-1]
  // [4,-3,-2,-7,8,2,-3,-1]
  // [-4,-3,-2,-7,8,2,-3,-1] -> the result is index 4 and index 5, they have never been pointed to, we are nissing numbers 5 and 6
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // num at i is negetive when i has been pointed to, which means n + 1 is in the array,
    if (nums[i] > 0) res.push(i + 1);
  }
  return res;
}

// O(n) time; O(n) space;
function findDisappearedNumbers1(nums: number[]): number[] {
  const mySet = new Set<number>();
  for (let i = 1; i <= nums.length; i++) {
    mySet.add(i);
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (mySet.has(num)) mySet.delete(num);
  }
  return [...mySet];
}
