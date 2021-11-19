// O(n^2)
export function selectionSort(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    const currItem = arr[i];
    let currMinIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      const compItem = arr[j];
      if (compItem < arr[currMinIdx]) {
        currMinIdx = j;
      }
    }
    arr[i] = arr[currMinIdx];
    arr[currMinIdx] = currItem;
  }
}

// [ 100, 4, 3, 2, 5, 6, 7, 11, 2, 1 ]
// [ 1, 2, 2,  3, 4, 5, 6, 7, 11, 100 ]
