import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (root.val === targetSum && !root.left && !root.right) return true; // at leaf node, and we hit targetSum
  const leftOver = targetSum - root.val;
  return hasPathSum(root.left, leftOver) || hasPathSum(root.right, leftOver);
}
