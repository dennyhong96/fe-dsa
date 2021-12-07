import { TreeNode } from "./BinarySearchTree";

/**
 * 100. Same Tree
 * https://leetcode.com/problems/same-tree/
 */

// O(n) time; O(m) space - m is depth of tree
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
  if (!p && !q) return true;
  const isLeftSameTree = isSameTree(p!.left, q!.left);
  const isRightSameTree = isSameTree(p!.right, q!.right);
  return isLeftSameTree && isRightSameTree;
}
