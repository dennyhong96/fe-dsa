import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;
  const hasLeftPath = hasPathSum(root.left, targetSum - root.val);
  const hasRightPath = hasPathSum(root.right, targetSum - root.val);
  return hasLeftPath || hasRightPath;
}

export {};
