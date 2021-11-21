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
