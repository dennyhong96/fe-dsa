import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (root.val === targetSum) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
