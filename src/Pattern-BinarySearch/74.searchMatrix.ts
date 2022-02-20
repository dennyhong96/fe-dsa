// // O(n) time; O(1) space; - Ascending row & col matrix diagonal traversal
export function searchMatrix(matrix: number[][], target: number): boolean {
  let rowEnd = matrix.length;
  let colEnd = matrix[0].length;
  let col = 0;
  let row = rowEnd - 1;
  while (col < colEnd && row >= 0) {
    const num = matrix[row][col];
    if (num === target) return true;
    if (num < target) {
      // every number on this column is smaller than target
      col++;
    } else {
      // num >= target
      // every numbre on this row is larger than target
      row--;
    }
  }
  return false;
}
