type FibonacciMemoized = {
  (index: number): number;
  cache?: Map<number, number>; // Store results of repetitive sub-problems
};

// O(n) time
// DP - Memoization
export const fibonacciMemoized: FibonacciMemoized = (index) => {
  if (!fibonacciMemoized.cache) {
    fibonacciMemoized.cache = new Map<number, number>();
  }
  if (index < 2) return index;
  const cachedResult = fibonacciMemoized.cache.get(index);
  if (cachedResult) {
    return cachedResult;
  } else {
    const result = fibonacciMemoized(index - 1) + fibonacciMemoized(index - 2);
    fibonacciMemoized.cache.set(index, result);
    return result;
  }
};

// DP - Bottom-up
export const fibonacciBottomUp = (index: number) => {
  const fibList = [0, 1];
  for (let i = 2; i <= index; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2]);
  }
  return fibList[index];
};
