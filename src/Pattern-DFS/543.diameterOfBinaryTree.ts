import { TreeNode } from "../10.Trees/BinarySearchTree";

// Bottom up, returns height per call - O(n) time; O(logn) space;
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;
  const dfs = (root: TreeNode | null): number => {
    if (!root) return -1; // -1 in order to make the math work out
    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);
    const diamater = leftHeight + rightHeight + 2; // +2 for passing throught the root
    maxDiameter = Math.max(maxDiameter, diamater);
    return Math.max(leftHeight, rightHeight) + 1;
  };
  dfs(root);
  return maxDiameter;
}

// Brute force - O(n^2) time; O(logn) space;
export function diameterOfBinaryTree1(root: TreeNode | null, max = 0): number {
  if (!root) return max;
  const maxLeft = maxDepth(root.left);
  const maxRight = maxDepth(root.right);
  const diameter = maxLeft + maxRight;
  const leftMaxDiameter = diameterOfBinaryTree1(
    root.left,
    Math.max(max, diameter)
  );
  const rightMaxDiameter = diameterOfBinaryTree1(
    root.right,
    Math.max(max, diameter)
  );
  return Math.max(leftMaxDiameter, rightMaxDiameter);
}

function maxDepth(root: TreeNode | null, depth = 0): number {
  if (!root) return depth;
  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  );
}
