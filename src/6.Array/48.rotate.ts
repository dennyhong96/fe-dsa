// O(m*n) time; O(1) space;
function rotate(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // 4 boundary pointers
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = rows - 1;
  let colEnd = cols - 1;

  // when rowStart === rowEnd && colStart === colEnd, don't need to do anything
  while (rowStart < rowEnd && colStart < colEnd) {
    for (let i = 0; i < rowEnd - rowStart; i++) {
      const tmp1 = matrix[rowStart + i][colEnd];
      matrix[rowStart + i][colEnd] = matrix[rowStart][colStart + i];
      const tmp2 = matrix[rowEnd][colEnd - i];
      matrix[rowEnd][colEnd - i] = tmp1;
      const tmp3 = matrix[rowEnd - i][colStart];
      matrix[rowEnd - i][colStart] = tmp2;
      matrix[rowStart][colStart + i] = tmp3;
    }

    // shrink the boundary
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }
}

export {};