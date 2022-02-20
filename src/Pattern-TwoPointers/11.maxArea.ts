// O(n) time; O(1) space;
function maxArea(height: number[]): number {
  // We initialize the two pointers at first and last index because it results in the lartest width
  // we need large width to result in potentially max area
  let hIndex1 = 0;
  let hIndex2 = height.length - 1;
  let max = 0;
  while (hIndex1 < hIndex2) {
    const height1 = height[hIndex1];
    const height2 = height[hIndex2];
    const width = hIndex2 - hIndex1;
    const area = Math.min(height1, height2) * width;
    max = Math.max(max, area);
    if (height1 < height2) {
      // If left side height is the bottom neck, try to increment left index and try again
      // We don't touch right index because we know that the right side height is relatively larger
      // we need larger height to result in potentially larger area
      hIndex1++;
    } else {
      // If right side height is the bottom neck, try to decrement right index and try again
      hIndex2--;
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

export {};
