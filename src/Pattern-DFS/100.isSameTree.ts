import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; Space is O(n) for the recursion stack, in worse case when the tree is unbalanced and all the nodes are on one side. In best case when the tree is evenly balanced, the space will only be O(log n)
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q) || p!.val !== q!.val) return false;
  const isLeftValid = isSameTree(p!.left, q!.left);
  const isRightValid = isSameTree(p!.right, q!.right);
  return isLeftValid && isRightValid;
}
