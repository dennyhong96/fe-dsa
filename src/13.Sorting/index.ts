import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort2";
import { mergeSort } from "./mergeSort";
import { quickSort } from "./quickSort";

export async function SortingAlgorithm() {
  const arr1 = [100, 70, 74, 30, 23, 200, 5, 95];
  const arr2 = [...arr1];
  const arr3 = [...arr1];
  const arr4 = [...arr1];
  const arr5 = [...arr1];

  bubbleSort(arr1);
  console.log(arr1);

  selectionSort(arr2);
  console.log(arr2);

  // insertionSort(arr3);
  // console.log(arr3);

  // console.log(mergeSort(arr4));

  // quickSort(arr5);
  // console.log(arr5);
}

//#1 - Sort 10 schools around your house by distance:
// insertion sort - fast on small input, easy to code, O(1) space

//#2 - eBay sorts listings by the current Bid amount:
// radix/counting sort - a bid amount is a fixed length of integer, radix / counting can beat O(n log(n)) time

//#3 - Sport scores on ESPN
// quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort - don't need to sort in memory

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insertion sort - fast on almost sorted input

//#6 - Temperature Records for the past 50 years in Canada
// radix/counting sort - if inputs have no decimal places
// quick sort - otherwise

//#7 - Large user name database needs to be sorted. Data is very random.
// merge sort - if we are not concerned with memory
// quick sort - otherwise if we are not concerned with O(n^2) time worst case

//#8 - You want to teach sorting for the first time
// bubble sort or selection sort
