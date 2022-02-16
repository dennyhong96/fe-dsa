import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function maxDepth(root: TreeNode | null, depth = 0): number {
  if (!root) return depth;
  return Math.max(
    maxDepth(root.left, depth + 1),
    maxDepth(root.right, depth + 1)
  );
}
