import { fibonacciMemoized } from "./fibonacciMemoized";

export async function DynamicProgramming() {
  console.log(fibonacciMemoized(100));
}

// When to use DP:
// the problem is able to be divided into sub-problems
// can use a recursive solution
// sub-problems are repetitive
// memoize the sub-problem results
