import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;
  if (root.val === p.val || root.val === q.val) return root;
  const leftResult = lowestCommonAncestor(root.left, p, q);
  const rightResult = lowestCommonAncestor(root.right, p, q);
  if (!leftResult) return rightResult;
  if (!rightResult) return leftResult;
  return root;
}

export {};
