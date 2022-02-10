import { TreeNode } from "./BinarySearchTree";

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 */

// O(n * m) time; O(h * i) space;
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (!subRoot) return true;
  if (isSameTree(root, subRoot)) return true;
  return isSameTree(root.left, subRoot) || isSameTree(root.right, subRoot);
}

// O(m) time - m num of nodes in subRoot; O(i) space - i is height of subRoot
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  if (!p && !q) return true;
  return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
}

export {};