import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { selectionSort } from "./selectionSort";

export async function SortingAlgorithm() {
  const arr1 = [100, 4, 3, 2, 5, 6, 7, 11, 2, 1];
  const arr2 = [...arr1];
  const arr3 = [...arr1];
  const arr4 = [...arr1];

  bubbleSort(arr1);
  console.log(arr1);

  selectionSort(arr2);
  console.log(arr2);

  insertionSort(arr3);
  console.log(arr3);

  console.log(mergeSort([100, 4, 3, 2, 5, 6, 7, 11, 2]));
}
