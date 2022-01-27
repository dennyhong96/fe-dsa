// Longest contiguous subarray of k unique numbers
// Longest contiguous substring of k unique characters

// Sliding window - O(n) time; O(1) space;
function totalFruit(fruits: number[], bucketsCount = 2): number {
  let max = -Infinity;
  const map = new Map<number, number>(); // O(1) space - fruit type -> last seen index
  let l = 0;
  let r = 0;
  while (r < fruits.length) {
    const fruit = fruits[r];
    if (map.size <= bucketsCount) {
      map.set(fruit, r); // update last seen index
    }
    if (map.size > bucketsCount) {
      let minLastSeenIndex = fruits.length - 1;

      // O(1) time since map has at most 3 records
      for (const [_, i] of map) {
        minLastSeenIndex = Math.min(minLastSeenIndex, i);
      }
      map.delete(fruits[minLastSeenIndex]);
      l = minLastSeenIndex + 1;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
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

export {};
