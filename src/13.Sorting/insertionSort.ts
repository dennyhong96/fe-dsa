export function insertionSort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    for (let j = 0; j < i; j++) {
      const greaterThanThis = arr[j - 1];
      const lessThanThis = arr[j];
      if (
        (!greaterThanThis || currNum > greaterThanThis) &&
        currNum <= lessThanThis
      ) {
        for (let k = i; k > j; k--) {
          arr[k] = arr[k - 1];
        }
        arr[j] = currNum;
      }
    }
  }
}

// [ 100, 4, 3, 2, 5, 6, 7, 11, 2, 1 ]
// [ 1, 2, 2,  3, 4, 5, 6, 7, 11, 100 ]
