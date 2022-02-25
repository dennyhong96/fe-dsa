import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if ((p && !q) || (!p && q) || (p && q && p.val !== q.val)) return false;
  if (!p && !q) return true;
  return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
}
