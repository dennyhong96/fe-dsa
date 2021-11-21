import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";

export async function SortingAlgorithm() {
  const arr1 = [100, 70, 74, 30, 23, 200, 5, 95];
  // const arr2 = [...arr1];
  // const arr3 = [...arr1];
  // const arr4 = [...arr1];
  const arr5 = [...arr1];

  // bubbleSort(arr1);
  // console.log(arr1);

  // selectionSort(arr2);
  // console.log(arr2);

  // insertionSort(arr3);
  // console.log(arr3);

  // console.log(mergeSort([100, 70, 74, 30, 23, 200, 5, 95]));

  quickSort(arr5);
  console.log(arr5);
}
