import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space; (or O(h) space)
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
  const isLeftValid = isSameTree(p!.left, q!.left);
  const isRightValid = isSameTree(p!.right, q!.right);
  return isLeftValid && isRightValid;
}
