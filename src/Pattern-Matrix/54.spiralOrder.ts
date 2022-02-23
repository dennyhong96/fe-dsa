// O(m*n) time; O(1) space;
export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  // the idea is to traverse the outer numbers first
  // than going inwards level by level each iteration
  // we can split one iteration of work into 4 chunks
  // each chunk traverse in one direction, update boundary
  // after each chunk's work

  // define boundaries
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;

  // breaks off when we have traversed all numbers
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // work chunk 1
    if (colStart > colEnd) break;
    for (let i = colStart; i <= colEnd; i++) {
      // i <= colEnd intead of i < colEnd is so that when we are left with 1 number
      // in the most inner level, it will get process and not skipped
      result.push(matrix[rowStart][i]);
    }
    rowStart++; // shrink boundary, this also conviently setup next chunk

    // work chunk 2
    if (rowStart > rowEnd) break;
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    // work chunk 3
    if (colEnd < colStart) break;
    for (let i = colEnd; i >= colStart; i--) {
      result.push(matrix[rowEnd][i]);
    }
    rowEnd--;

    // work chunk 4
    if (rowEnd < rowStart) break;
    for (let i = rowEnd; i >= rowStart; i--) {
      result.push(matrix[i][colStart]);
    }
    colStart++;
  }

  return result;
}
