import { findFactorialIterative, findFactorialRecursive } from "./factorial";
import { fibonacciIterative, fibonacciRecursive } from "./fibonacci";

export async function RecursionAlgorithm() {
  console.log(findFactorialRecursive(5));
  console.log(findFactorialIterative(5));

  console.log(fibonacciRecursive(7));
  console.log(fibonacciIterative(7));
}
