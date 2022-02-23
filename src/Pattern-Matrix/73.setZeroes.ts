// O(m*n) time; O(1) space
export function setZeroes(matrix: number[][]): void {
  // the constant space solution idea:
  // instead of using two sets to track which rows and cols need to be set to 0
  // we can use the first row of matrix to track columns that need to be set to 0
  // we can use the first column of matrix to track rows that need to be set to 0
  // note that for the first row, we need to just use a separate flag to avoid conflict
  const rows = matrix.length;
  const cols = matrix[0].length;

  // mark 0s
  let firstRowHasZero = false;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const num = matrix[row][col];
      if (num === 0) {
        matrix[0][col] = 0; // mark this col needs to be set to 0

        // mark this row needs to be set to 0
        if (row === 0) {
          firstRowHasZero = true;
        } else {
          matrix[row][0] = 0;
        }
      }
    }
  }

  // helper function to decide wether a cell needs to be set to 0
  const shouldMarkZero = (row: number, col: number): boolean => {
    const isColZero = matrix[0][col] === 0;
    const isRowZero = row === 0 ? firstRowHasZero : matrix[row][0] === 0;
    return isColZero || isRowZero;
  };

  // skip 1st row and 1st columns first, process those individually
  // because we need to referent them to know which cell to set to 0
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (shouldMarkZero(row, col)) {
        matrix[row][col] = 0;
      }
    }
  }

  // process 1st column using first cell
  if (matrix[0][0] === 0) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }

  // process 1st row using firstRowHasZero flag
  if (firstRowHasZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }
}

// O(m*n) time; O(m+n) space;
function setZeroes1(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // use two sets to track both rows and cols that are marked 0
  const zeroRows = new Set<number>(); // zero row numbers
  const zeroCols = new Set<number>(); // zero col numbers

  // mark 0 rows and cols
  for (let row = 0; row < rows; row++) {
    if (zeroRows.has(row)) continue;
    for (let col = 0; col < cols; col++) {
      if (zeroCols.has(col)) continue;
      const num = matrix[row][col];
      if (num === 0) {
        zeroRows.add(row);
        zeroCols.add(col);
      }
    }
  }

  // modify nums to 0
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (zeroRows.has(row) || zeroCols.has(col)) {
        matrix[row][col] = 0;
      }
    }
  }
}
