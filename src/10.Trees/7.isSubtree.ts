import { TreeNode } from "./BinarySearchTree";

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 */

// O(n * m) time; O(h * i) space;
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (!subRoot) return true;
  if (isSametree(root, subRoot)) return true;
  const isLeftSubtree = isSubtree(root.left, subRoot);
  const isRightSubtree = isSubtree(root.right, subRoot);
  return isLeftSubtree || isRightSubtree;
}

// O(m) time - m num of nodes in subRoot; O(i) space - i is height of subRoot
function isSametree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
  if (!p && !q) return true;
  const isLeftSubtreeSame = isSametree(p!.left, q!.left);
  const isRightSubtreeSame = isSametree(p!.right, q!.right);
  return isLeftSubtreeSame && isRightSubtreeSame;
}

export {};
