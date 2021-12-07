import { TreeNode } from "./BinarySearchTree";

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 */
// Two DFS - O(m * n) time, O(k) space - k is the max depth of root
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  const isLeftSubtree = isSubtree(root.left, subRoot);
  const isRightSubtree = isSubtree(root.right, subRoot);
  return isLeftSubtree || isRightSubtree;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
  if (!p && !q) return true;
  const isLeftSameTree = isSameTree(p!.left, q!.left);
  const isRightSameTree = isSameTree(p!.right, q!.right);
  return isLeftSameTree && isRightSameTree;
}
