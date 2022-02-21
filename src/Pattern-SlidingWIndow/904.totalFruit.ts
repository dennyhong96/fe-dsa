// Longest contiguous subarray of k unique numbers
// Longest contiguous substring of k unique characters

// Sliding window - O(n) time; O(1) space;
// O(n) time; O(1) space;
// find longest subarray with k unique elements
export function totalFruit(fruits: number[], k = 2): number {
  // the idea is to track the last seen index of each unique element
  // when we have more than k unique elements, we shrink the left
  // boundary of the sliding window to the right of the smallest last seen index
  const lastSeenIndexes = new Map<number, number>(); // O(3) space ma; num -> last seen index
  let maxLength = 0;
  let l = 0;
  for (let i = 0; i < fruits.length; i++) {
    const num = fruits[i];
    lastSeenIndexes.set(num, i);
    if (lastSeenIndexes.size > k) {
      const smallestlastSeen = removeSmallestlastSeen(lastSeenIndexes);
      l = smallestlastSeen + 1;
    }
    maxLength = Math.max(maxLength, i - l + 1);
  }

  return maxLength;
}

// O(3) time; O(1) space;
function removeSmallestlastSeen(lastSeenIndexes: Map<number, number>): number {
  let smallestIndex = Infinity;
  let smallestLastSeenNum = -1;
  for (const [num, lastSeen] of lastSeenIndexes) {
    // lastSeenIndexes has at most 3 records
    if (lastSeen < smallestIndex) {
      smallestLastSeenNum = num;
      smallestIndex = lastSeen;
    }
  }
  lastSeenIndexes.delete(smallestLastSeenNum);
  return smallestIndex;
}

// Brute force - O(n^2) time; O(1) space;
function totalFruit1(fruits: number[]): number {
  let maxFruit = -Infinity;
  let buckets: number[] = []; // O(1) space;
  for (let i = 0; i < fruits.length; i++) {
    // if from (i to end) amount of fruit is less than maxFruit, we don't need to keep doing meaningless work
    // since there's no way maxFruit will get increased
    if (fruits.length - i < maxFruit) break;

    // Get maxFruit starts with index i
    for (let j = i; j < fruits.length; j++) {
      const fruit = fruits[j];
      if (fruit !== buckets[0] && fruit !== buckets[1]) {
        buckets.push(fruit);
      }
      if (buckets.length > 2) {
        buckets = [];
        break;
      }
      maxFruit = Math.max(maxFruit, j - i + 1);
    }
  }
  return maxFruit;
}
