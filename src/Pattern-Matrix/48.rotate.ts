// O(n^2) time; O(1) space;
export function rotate(matrix: number[][]): void {
  // The idea is to process outer numbers in the matrix first
  // than move inwards to process inner numbers
  // until we don't have anything to process

  // defind boundaries
  const size = matrix.length;
  let colStart = 0;
  let colEnd = size - 1;
  let rowStart = 0;
  let rowEnd = size - 1;

  // while loop breaks off when we have processed the whole matrix
  while (rowStart < rowEnd && colStart < colEnd) {
    // the work
    for (let i = 0; i < colEnd - colStart; i++) {
      const tmp1 = matrix[rowStart + i][colEnd];
      matrix[rowStart + i][colEnd] = matrix[rowStart][colStart + i];
      const tmp2 = matrix[rowEnd][colEnd - i];
      matrix[rowEnd][colEnd - i] = tmp1;
      const tmp3 = matrix[rowEnd - i][colStart];
      matrix[rowEnd - i][colStart] = tmp2;
      matrix[rowStart][colStart + i] = tmp3;
    }

    // Moving boundaries inwards
    colStart++;
    colEnd--;
    rowStart++;
    rowEnd--;
  }
}
