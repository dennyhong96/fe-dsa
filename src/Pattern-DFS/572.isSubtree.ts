import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n*m) time; O(n*m) space;
export function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null
): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;
  const isLeftSubtree = root.left ? isSubtree(root.left, subRoot) : false;
  const isRightSubtree = root.right ? isSubtree(root.right, subRoot) : false;
  return isLeftSubtree || isRightSubtree;
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  return isSameTree(p!.left, q!.left) && isSameTree(p!.right, q!.right);
}
