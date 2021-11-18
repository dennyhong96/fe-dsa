import { findFactorialIterative, findFactorialRecursive } from "./factorial";
import { fibonacciIterative, fibonacciRecursive } from "./fibonacci";
import { reverseString } from "./reverse-string";

export async function RecursionAlgorithm() {
  // console.log(findFactorialRecursive(5));
  // console.log(findFactorialIterative(5));

  // console.log(fibonacciRecursive(7));
  // console.log(fibonacciIterative(7));

  console.log(reverseString("a"));
  console.log(reverseString("ab"));
  console.log(reverseString("abc"));
  console.log(reverseString("abcde"));
}
