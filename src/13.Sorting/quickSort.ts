// quickSort - avg. O(nlogn) time, worst O(n^2) time, avg O(logn) space ,worst O(n) space
export function quickSort(
  arr: number[],
  startIndex = 0,
  endIndex = arr.length - 1
) {
  if (endIndex - startIndex <= 0) return; // handle arr with single item
  let currIndex = startIndex;
  let pivotIndex = endIndex; // Select last item as pivot

  // `while (currIndex < pivotIndex)` since we are sure that items behind pivot number are larger than pivot
  while (currIndex < pivotIndex) {
    const pivotItem = arr[pivotIndex];
    const currItem = arr[currIndex];
    if (currItem > pivotItem) {
      const itemBeforePivot = arr[pivotIndex - 1];
      arr[currIndex] = itemBeforePivot;
      arr[pivotIndex - 1] = pivotItem; // move pivot one index backwards
      arr[pivotIndex] = currItem;
      pivotIndex--; // reflect the pivot's new index
      // cannot increment currIndex, need to compare the new item on this index with the pivot
    } else {
      currIndex++; // compare the next item with pivot
    }
  }
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
}
// [100, 70, 74, 30, 23, 200, 5, 95]
// [5, 70, 74, 30, 23, 200, 95, 100]
// [5, 70, 74, 30, 23, 95, 200, 100] --> stop i = k
