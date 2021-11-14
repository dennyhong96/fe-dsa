// O(n) time, O(n) space
export function firstRecurringNum(arr: number[]) {
  const map = new Map<number, boolean>();
  for (const num of arr) {
    if (map.get(num)) {
      return num;
    } else {
      map.set(num, true);
    }
  }
}

// O(n) time, O(n) space
// Returns first recurring number as first seen
export function firstRecurringNum2(arr: number[]): number | undefined {
  interface Result {
    firstSeenIndex: number;
    num: number;
  }

  const map = new Map<number, number>();

  // can also just declare two primitive variables
  let result: Result | undefined = undefined;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const firstSeenIndex = map.get(num);
    if (firstSeenIndex !== undefined) {
      if (!result || result && firstSeenIndex < result.firstSeenIndex) {
        result = {
          firstSeenIndex,
          num
        }
      }
    } else {
      map.set(num, i);
    }
  }

  return result?.num;
}