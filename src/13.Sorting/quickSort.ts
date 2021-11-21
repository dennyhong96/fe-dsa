export function quickSort(
  arr: number[],
  startIndex = 0,
  endIndex = arr.length - 1
): void {
  if (endIndex - startIndex <= 0) return; // Base case handles [], [1]

  let currIndex = startIndex;
  let pivotIndex = endIndex; // Select last item as random pivot

  // `while (currIndex < pivotIndex)` since we are sure that items behind pivot number are larger than pivot
  while (currIndex < pivotIndex) {
    const currItem = arr[currIndex];
    const pivotItem = arr[pivotIndex];
    if (currItem > pivotItem) {
      const itemBeforePivot = arr[pivotIndex - 1];
      arr[currIndex] = itemBeforePivot; // assign current item'sindex `i` the item before pivot
      arr[pivotIndex] = currItem; // assign pivot's index the current item
      pivotIndex--; // assign the index before pivot's the pivot item
      arr[pivotIndex] = pivotItem;
      // do not decrement current index, we need to compare with the new value on this index
    } else {
      currIndex++;
    }
  }

  quickSort(arr, startIndex, pivotIndex - 1); // Sort left half, excluding pivot
  quickSort(arr, pivotIndex + 1, endIndex); // Sort right half, excluding pivot
}
