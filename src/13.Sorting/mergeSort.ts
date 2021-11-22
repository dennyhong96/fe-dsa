// O(n log(n)) time, O(n) space
export function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const middleIndex = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex);
  return merge(mergeSort(left), mergeSort(right));
}

// [100, 70, 74, 30, 23, 200, 5, 95]

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (result.length < left.length + right.length) {
    const leftItem = left[leftIndex];
    const rightItem = right[rightIndex];
    if (!rightItem || leftItem < rightItem) {
      result.push(leftItem);
      leftIndex++;
    } else {
      result.push(rightItem);
      rightIndex++;
    }
  }
  return result;
}
// Good time complexity, be careful with memory when sorting large input
