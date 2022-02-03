// O(m*n)time; O(1)space;
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const columns = matrix[0].length;

  // Mark which row/column has zero using the first row and first column
  let isFirstRowZero = false;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0; // Mark this column has zero
        if (r === 0) {
          isFirstRowZero = true; // Need to handle first row differently since cell [0][0] is used for columns already
        } else {
          matrix[r][0] = 0;
        } // Mark this row has zero
      }
    }
  }

  // Set cells to zeros according to marks
  // Need to omit 1st row and 1st column and handle them later
  // since we neeed to use them as marks
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < columns; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < rows; r++) {
      matrix[r][0] = 0;
    }
  }

  if (isFirstRowZero) {
    for (let c = 0; c < columns; c++) {
      matrix[0][c] = 0;
    }
  }
}

// O(m*n)time; O(m+n)space;
function setZeroes1(matrix: number[][]): void {
  const zeroRows = new Set<number>(); // O(m)space;
  const zeroColumns = new Set<number>(); // O(n)space;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (num === 0) {
        zeroRows.add(i);
        zeroColumns.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (zeroRows.has(i) || zeroColumns.has(j)) {
        row[j] = 0;
      }
    }
  }
}

export {};
