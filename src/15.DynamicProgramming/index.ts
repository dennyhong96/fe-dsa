import { fibonacciMemoized } from "./fibonacciMemoized";
import { houseRobber } from "./houseRobber";

export async function DynamicProgramming() {
  console.log(fibonacciMemoized(100));

  console.log(houseRobber([1, 2, 3, 1]));
  console.log(houseRobber([2, 7, 9, 3, 1]));
}

// When to use DP:
// the problem is able to be divided into sub-problems
// can use a recursive solution
// sub-problems are repetitive
// memoize the sub-problem results
