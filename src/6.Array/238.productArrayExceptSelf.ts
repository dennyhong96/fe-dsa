// O(n) time; O(1) space;
export function productExceptSelf(nums: number[]): number[] {
  // Idea: for each num
  //  - calculate product before that num in one scan
  //  - calculate product after that num in another scan
  // use a 3rd scan to get the result (product before * product after)
  // [1,2,3,4]
  // [1,1,2,6]
  // [24,12,4,1]
  let result: number[] = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    result[i] = prefix;
    prefix *= num;
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    result[i] = result[i] * postfix;
    postfix *= num;
  }

  return result;
}

// O(n) time; O(n) space (not counting result arr)
function productExceptSelf2(nums: number[]): number[] {
  // prefix tracks product of to the left of a index (including that index)
  const prefix: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const productsToTheLeft = prefix[i - 1] ?? 1; // set product of to the left of a index 0 to 1
    prefix[i] = productsToTheLeft * num;
  }

  // postfix tracks product of everything to the right of a index (including that index)
  const postfix: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const productsToTheRight = postfix[i + 1] ?? 1; // set product of to the right of last index to 1
    postfix[i] = productsToTheRight * num;
  }

  // result for each index is the product of everything to the left this index (excluding itself)
  // times product of everything to the right of this index (excluding itself)
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const productToTheLeftExcludeSeft = prefix[i - 1] ?? 1;
    const productToTheRightExludeSeft = postfix[i + 1] ?? 1;
    result[i] = productToTheLeftExcludeSeft * productToTheRightExludeSeft;
  }

  return result;
}

// Brute force - O(n^2) time; O(1) space (not counting result arr)
function productExceptSelf3(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let productForIndex = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      const num = nums[j];
      productForIndex *= num;
    }
    result[i] = productForIndex;
  }
  return result;
}
