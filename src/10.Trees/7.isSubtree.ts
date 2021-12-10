import { TreeNode } from "./BinarySearchTree";

/**
 * 572. Subtree of Another Tree
 * https://leetcode.com/problems/subtree-of-another-tree/
 */

// O(n * m) time; O(h * i) space -h is height of root, i is height of subRoot;
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (!subRoot) return true;
  if (isSameTree(root, subRoot)) return true;
  const isLeftSubtree = isSubtree(root.left, subRoot);
  const isRightSubtree = isSubtree(root.right, subRoot);
  return isLeftSubtree || isRightSubtree;
}

// O(n) time; O(h) space - h is height of smaller tree
function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if ((!a && b) || (a && !b) || (a && b && a.val !== b.val)) return false;
  if (!a && !b) return true;
  const isLeftSubtreeSame = isSameTree(a!.left, b!.left);
  const isRightSubtreeSame = isSameTree(a!.right, b!.right);
  return isLeftSubtreeSame && isRightSubtreeSame;
}

export {};
