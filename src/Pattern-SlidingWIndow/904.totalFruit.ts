// Longest contiguous subarray of k unique numbers
// Longest contiguous substring of k unique characters

// Sliding window - O(n) time; O(1) space
function totalFruit(nums: number[], k = 2): number {
  // this problem is basically maximium subarray length with k unique elements
  const map = new Map<number, number>(); // O(k + 1) space max; number -> occurances count
  let maxLen = 0;
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map.set(num, (map.get(num) ?? 0) + 1);
    // keep shrinking window until we satisfy lessThanKUnique
    while (map.size > k) {
      const lNum = nums[l];
      if (map.get(lNum)! > 1) {
        map.set(lNum, map.get(lNum)! - 1);
      } else {
        map.delete(lNum);
      }
      l++;
    }
    // potentially update the maxLen
    maxLen = Math.max(maxLen, i - l + 1);
  }
  return maxLen;
}

// Brute force - O(n^2) time; O(1) space;
function totalFruit2(fruits: number[]): number {
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
