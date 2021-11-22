// O(n^2)
export function selectionSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    const currItem = arr[i];

    // Find the index of the smallest item that is smaller than currItem
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      const compItem = arr[j];
      if (compItem < min) {
        min = compItem;
        minIndex = j;
      }
    }

    // If there is something that is smaller than currItem
    // Swap the index of those two
    if (minIndex !== i) {
      arr[i] = min;
      arr[minIndex] = currItem;
    }
  }
}

// [100, 70, 74, 30, 23, 200, 5, 95]
