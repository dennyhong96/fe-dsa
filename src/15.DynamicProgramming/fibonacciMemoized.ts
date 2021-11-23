type FibonacciMemoized = {
  (index: number): number;
  cache?: Map<number, number>; // Store results of repetitive sub-problems
};

// O(n) time
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
