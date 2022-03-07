// O(nlogn) time; O(1) space;
export function merge(intervals: number[][]): number[][] {
  // Sort intervals into order
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) => {
    if (aStart === bStart) return aEnd - bEnd;
    return aStart - bStart;
  }); // O(nlogn) time; O(1) space;

  const result: number[][] = [];

  // O(n) time;
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (result.length > 0) {
      const lastEnd = result[result.length - 1][1];

      // Handle overlapping intervals
      if (start <= lastEnd) {
        result[result.length - 1][1] = Math.max(lastEnd, end);
        continue;
      }
    }

    // Handle first interval and non-overlapping intervals
    result.push([start, end]);
  }

  return result;
}
