/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 */

// Two pointer - O(n) time; O(1) space
function maxArea(height: number[]): number {
  // We initialize the two pointers at first and last index because it results in the lartest width
  // we need large width to result in potentially max area
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let max = -Infinity;
  while (leftIndex < rightIndex) {
    const leftHeight = height[leftIndex];
    const rightHeight = height[rightIndex];
    const minHeight = Math.min(leftHeight, rightHeight); // Find the bottom neck of the left and right height
    const width = rightIndex - leftIndex;
    const area = width * minHeight;
    max = Math.max(max, area);
    if (leftHeight < rightHeight) {
      // If left side height is the bottom neck, try to increment left index and try again
      // We don't touch right index because we know that the right side height is relatively larger
      // we need larger height to result in potentially larger area
      leftIndex++;
    } else {
      // If right side height is the bottom neck, try to decrement right index and try again
      rightIndex--;
    }
  }
  return max;
}

// Brute force - O(n^2) time; O(1) space
function maxArea2(height: number[]): number {
  let max = -Infinity;
  for (let i = 0; i < height.length - 1; i++) {
    const height1 = height[i]; // Left side height
    for (let j = i + 1; j < height.length; j++) {
      const height2 = height[j]; // Right side height
      const minHeight = Math.min(height1, height2); // Find the bottom neck of the left and right height
      const width = j - i;
      const area = width * minHeight;
      max = Math.max(area, max);
    }
  }
  return max;
}
