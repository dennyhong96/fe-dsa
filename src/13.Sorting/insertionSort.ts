// O(n^2)
export function insertionSort(arr: number[]): void {
  // Mark the 1st element as sorted
  // Loop through each unsorted item
  for (let i = 1; i < arr.length; i++) {
    const unSortedItem = arr[i];

    // Compare the current unsorted item with each of the previous sorted items
    // to move the current unsorted item into it's proper index
    for (let k = i - 1; k >= 0; k--) {
      const sortedItem = arr[k];
      if (unSortedItem < sortedItem) {
        arr[k + 1] = sortedItem;
        arr[k] = unSortedItem;
      }
    }
  }
}
// Use when input is small, or mostly sorted

// [100, 70, 74, 30, 23, 200, 5, 95]

// [3, 4, 5, 1, 7]
//        k  i
// [3, 1, 4, 5, 7]
//     k     i
