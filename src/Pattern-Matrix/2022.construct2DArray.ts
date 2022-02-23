export function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  const matrix: number[][] = [];
  if (n * m !== original.length) return matrix;
  for (let i = 0; i < original.length; i++) {
    const num = original[i];
    if (i % n == 0) {
      // we should create a new row for the matrix
      const row: number[] = [num];
      matrix.push(row);
    } else {
      // we should push num into the last row of matrix
      matrix[matrix.length - 1].push(num);
    }
  }
  return matrix;
}
