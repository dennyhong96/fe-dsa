// O(n) time; O(1) space;
function missingNumber(nums: number[]): number {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }
  return res;
}

// O(n) time; O(1) space;
function missingNumber1(nums: number[]): number {
  let sum1 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  let sum2 = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    sum2 += i;
  }
  return sum2 - sum1;
}

// O(nlogn) time; O(n) space;
function missingNumber2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    if (curr - prev > 1) {
      return curr - 1;
    }
  }
  return nums.length;
}

// [0,1,2,3]
// [3,0,1]
// sort
// [0,1,2]

// O(n) time; O(n) space;
function missingNumber3(nums: number[]): number {
  const arr: boolean[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i];
    arr[index] = true;
  }
  let num: number | null = null;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      num = i;
    }
  }
  return num ?? arr.length;
}
