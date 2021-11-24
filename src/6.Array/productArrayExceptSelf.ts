// O(n) time; O(1) space (not counting result arr)
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  // Store prefix for each index to the result array
  let prefix = 1; // Prefix starts at one
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Mutiply the postfix for each index to prefix for each index, save to result array
  let postfix = 1; // Postfix starts at one
  for (let i = nums.length - 1; i >= 0; i--) {
    const prefixForIndex = result[i]; // set during previous loop
    result[i] = prefixForIndex * postfix;
    postfix *= nums[i];
  }

  return result;
}

// O(n) time; O(n) space (not counting result arr)
function productExceptSelf2(nums: number[]): number[] {
  const prefix: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const prev = prefix[i - 1] ?? 1;
    prefix[i] = prev * nums[i];
  }
  const postfix: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const next = postfix[i + 1] ?? 1;
    postfix[i] = next * nums[i];
  }
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
  }
  return result;
}

// Brute force - O(n^2) time; O(1) space (not counting result arr)
function productExceptSelf3(nums: number[]): number[] {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let resultForIndex: number | undefined;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[j] === 0) {
          resultForIndex = 0;
          break;
        }
        if (resultForIndex === undefined) {
          resultForIndex = nums[j];
        } else {
          resultForIndex *= nums[j];
        }
      }
    }
    result[i] = resultForIndex;
    if (nums[i] === 0) {
      for (let j = nums.length - 1; j > i; j--) {
        result[j] = 0;
      }
      break;
    }
  }
  return result as number[];
}
