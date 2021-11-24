type FibMemo = { (index: number): number; cache?: Map<number, number> };
export const fibMemo: FibMemo = (index) => {
  if (index < 2) return index;
  if (!fibMemo.cache) fibMemo.cache = new Map<number, number>(); // DB cache
  if (!fibMemo.cache.get(index)) {
    const result = fibMemo(index - 1) + fibMemo(index - 2);
    fibMemo.cache.set(index, result);
  }
  return fibMemo.cache.get(index)!;
};

export function fibBottomUp(index: number): number {
  const result = [0, 1]; // DP array
  for (let i = 2; i <= index; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[index];
}
