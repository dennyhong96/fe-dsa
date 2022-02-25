import { TreeNode } from "../10.Trees/BinarySearchTree";

// Bottom up, returns height per call - O(n) time; O(logn) space;
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiamater = 0;

  // the idea:
  // dfs returns height recursively so the the previous call in stack
  // can compute diameter based on that, then updates maxDiameter
  const dfs = (root: TreeNode | null): number => {
    if (!root) return -1; // return 0 when only has root, -1 when no root
    const leftHeight = dfs(root.left);
    const rightHeight = dfs(root.right);
    const diameter = leftHeight + rightHeight + 2;
    // for example, when we are at an left most edge node,
    // leftHeight = -1, rightHeight = -1; -1 + -1 + 2 = 0
    maxDiamater = Math.max(maxDiamater, diameter);
    return Math.max(leftHeight, rightHeight) + 1; // +1 to account for current level
  };
  dfs(root);

  return maxDiamater;
}

// Brute force - O(n^2) time; O(logn) space;
// for each node calculate max left height and max right height, then add together
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
