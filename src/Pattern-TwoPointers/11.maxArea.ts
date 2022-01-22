// O(n) time; O(1) space;
function maxArea(height: number[]): number {
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
      hIndex1++;
    } else {
      hIndex2--;
    }
  }
  return max;
}

export {};
