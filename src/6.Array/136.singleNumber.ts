// O(n) time; O(n) space;
function singleNumber(nums: number[]): number {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }
  for (const num of set) return num; // should be only one
  return -1;
}

// O(n) time; O(1) space;
function singleNumber1(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    result = result ^ num; // xor operation, duplicates always cancel out, what's left is the single number
  }
  return result;
}

export {};
