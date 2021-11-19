export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr;
  const middleIndex = Math.ceil(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (result.length < arr1.length + arr2.length) {
    const arr1SmallestItem = arr1[arr1Index];
    const arr2SmallestItem = arr2[arr2Index];
    if (!arr2SmallestItem || arr1SmallestItem < arr2SmallestItem) {
      result.push(arr1SmallestItem);
      arr1Index++;
    } else if (!arr1SmallestItem || arr2SmallestItem <= arr1SmallestItem) {
      result.push(arr2SmallestItem);
      arr2Index++;
    }
  }
  return result;
}
