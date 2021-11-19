export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr;
  const index = Math.ceil(arr.length / 2);
  const left = arr.slice(0, index);
  const right = arr.slice(index);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (result.length < arr1.length + arr2.length) {
    const arr1SmallestEl = arr1[arr1Index];
    const arr2SmallestEl = arr2[arr2Index];
    if (arr1SmallestEl < arr2SmallestEl || !arr2SmallestEl) {
      result.push(arr1SmallestEl);
      arr1Index++;
    } else if (arr2SmallestEl <= arr1SmallestEl || !arr1SmallestEl) {
      result.push(arr2SmallestEl);
      arr2Index++;
    }
  }
  return result;
}
