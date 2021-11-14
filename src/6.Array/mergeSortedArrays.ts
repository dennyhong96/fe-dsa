// Given two sorted arrays, merge them into one array that is still sorted
// [0, 3, 4, 31], [4, 6, 30]
// [0, 3, 4, 6, 30, 31]

// O(a + b)
export function mergeSortedArrays(arr1: number[], arr2: number[]) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  }

  const newArray = [];
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  
  while(newArray.length < arr1.length + arr2.length) {
    const arr1Item = arr1[arr1Pointer];
    const arr2Item = arr2[arr2Pointer];
    if (arr1Item !== undefined && arr2Item !== undefined) {
      if (arr1Item <= arr2Item) {
        newArray.push(arr1Item);
        arr1Pointer++;
      } else {
        newArray.push(arr2Item);
        arr2Pointer++;
      }
    } else {
      if (arr1Item !== undefined) newArray.push(arr1Item);
      if (arr2Item !== undefined) newArray.push(arr2Item);
    }
  }
  return newArray;
}