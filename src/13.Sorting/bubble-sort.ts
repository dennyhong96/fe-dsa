// O(n^2)
export function bubbleSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const currItem = arr[j];
      const compItem = arr[j + 1];
      if (currItem > compItem) {
        arr[j + 1] = currItem;
        arr[j] = compItem;
      }
    }
  }
}

// [ 100, 4, 3, 2, 5, 6, 7, 11, 2, 1 ]
// [ 1, 2, 2,  3, 4, 5, 6, 7, 11, 100 ]
