// O(n) time; O(1) space;
export function merge(intervals: number[][]): number[][] {
  // 1. sort by start value
  intervals.sort(([a], [b]) => a - b); // O(nlogn) time;

  const result: number[][] = [];

  // 2. merge
  for (const interval of intervals) {
    const [start, end] = interval;
    if (result.length && result[result.length - 1][1] >= start) {
      // overlaps
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        end
      );
    } else {
      result.push(interval);
    }
  }

  return result;
}
