// O(n) time; O(1) space
function searchMatrix(matrix: number[][], target: number): boolean {
  // Ascending matrix diagonal traversal
  const rows = matrix.length;
  const cols = matrix[0].length;
  let row = rows - 1;
  let col = 0;

  // start from bottom left cornor, walk to top right
  while (row >= 0 && col < cols) {
    const num = matrix[row][col];
    if (num === target) return true;
    if (num < target) {
      // every number on this column is smaller than target
      col++;
    } else {
      // num > target
      // every numbre on this row is larger than target
      row--;
    }
  }

  return false;
}
