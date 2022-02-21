// (n*logm) time; O(1) space; m is matrix[size - 1][size - 1] - matrix[0][0]
export function kthSmallest(matrix: number[][], k: number): number {
  // binary search between matrix top left and matrix bottom right
  const size = matrix.length;
  let l = matrix[0][0];
  let r = matrix[size - 1][size - 1];

  while (l < r) {
    const m = l + Math.floor((r - l) / 2);
    const nthSmallest = countSmallerOrEqual(matrix, m); // m is nth smallest in the matrix
    if (nthSmallest < k) {
      l = m + 1;
    } else {
      // nthSmallest >= k
      // On why l/r ends up at a number in the matrix - https://youtu.be/JJUv4DDLSB4?t=539
      // we are keep making sure countSmallerOrEqual(matrix, m) >= k
      // for all the m the satisfy countSmallerOrEqual(matrix, m) >= k, we keep reducing r to m
      // so we are finding the smallest m that satisfies countSmallerOrEqual(matrix, m) >= k, which is m === k
      // when m === k, the number is guaranteed to be within the matrix
      r = m;
    }
  }
  return l; // or r
}

// O(n) time; O(1) space; ascending matrix diagnal traversal
// returns the count of elements in matrix that are less than or equal to the target
function countSmallerOrEqual(matrix: number[][], target: number) {
  const size = matrix.length;
  let count = 0;

  // start from left bottom cornor
  let row = size - 1;
  let col = 0;
  while (row >= 0 && col < size) {
    const num = matrix[row][col];
    if (num <= target) {
      // this current column all smaller than target, go to (col + 1)
      count += row + 1;
      col++;
    } else {
      // num > target
      // this current row all larger than target, go to (row - 1)
      row--;
    }
  }
  return count;
}

/*
[ [1, 5, 9],
  [10,11,13],
  [12,13,15] ]
*/
