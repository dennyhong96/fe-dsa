// O(n) time; O(1) space;
function maxArea(height: number[]): number {
  // We initialize the two pointers at first and last index because it results in the lartest width
  // we need large width to result in potentially max area
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;
  while (l < r) {
    const leftHeight = height[l];
    const rightHeight = height[r];
    const minHeight = Math.min(leftHeight, rightHeight);
    const width = r - l;
    const area = minHeight * width;
    maxWater = Math.max(maxWater, area);
    if (leftHeight < rightHeight) {
      // If left side height is the bottom neck, try to increment left index and try again
      // We don't touch right index because we know that the right side height is relatively larger
      // we need larger height to result in potentially larger area
      l++;
    } else {
      // If right side height is the bottom neck, try to decrement right index and try again
      r--;
    }
  }
  return maxWater;
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

export {};
