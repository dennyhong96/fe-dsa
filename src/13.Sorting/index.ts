import { bubbleSort } from "./bubble-sort";

export async function SortingAlgorithm() {
  const arr = [100, 4, 3, 2, 5, 6, 7, 11, 2, 1];
  bubbleSort(arr);
  console.log(arr);
}
