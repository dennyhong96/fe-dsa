// O(n^2)
export function bubbleSort(arr: number[]): void {
  let hasSwapped = true;

  // Stop the while loop when there is no swaps in the previous loop,
  // which means the list is fully sorted
  while (hasSwapped === true) {
    hasSwapped = false;
    for (let j = 1; j < arr.length; j++) {
      const currItem = arr[j - 1];
      const nextItem = arr[j];
      if (currItem > nextItem) {
        arr[j] = currItem;
        arr[j - 1] = nextItem;
        hasSwapped = true;
      }
    }
  }
}
