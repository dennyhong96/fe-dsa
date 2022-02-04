// O(m*n) time; O(1) space;
function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // 4 pointers(boundaries) solution
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = rows - 1;
  let colEnd = cols - 1;
  const result: number[] = [];
  while (true) {
    if (colStart > colEnd) break;
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
    }
    rowStart++;

    if (rowStart > rowEnd) break;
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (colEnd < colStart) break;
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    if (rowEnd < rowStart) break;
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart]);
    }
    colStart++;
  }
  return result;
}

export {};
