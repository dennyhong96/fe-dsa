export function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  const result: number[][] = [];
  if (m * n !== original.length) return result;
  for (let i = 0; i < original.length; i++) {
    if (i % n === 0) {
      const row: number[] = [original[i]];
      result.push(row);
    } else {
      result[result.length - 1].push(original[i]);
    }
  }
  return result;
}
