// O(n)
export function findFactorialRecursive(num: number): number {
  if (num === 2) return 2;
  if (num === 1) return 1;
  return num * findFactorialRecursive(num - 1);
}

// O(n)
export function findFactorialIterative(num: number): number {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
