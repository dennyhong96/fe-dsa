// O(2^n)
export function fibonacciRecursive(index: number): number {
  if (index < 2) return index;
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

// O(n)
export function fibonacciIterative(index: number) {
  const arr = [0, 1];
  for (let i = 2; i <= index; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[index];
}
