import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;
  if (root.val === p.val || root.val === q.val) return root;
  const leftRes = lowestCommonAncestor(root.left, p, q); // check if root.left contain either p or q
  const rightRes = lowestCommonAncestor(root.right, p, q); // check if root.right contain either p or q
  if (!leftRes) return rightRes; // both p and q might be in right subtree
  if (!rightRes) return leftRes; // both p and q might be in left subtree
  return root; // has both leftRes and rightRes, means one of p and q is in left subtree, the other one is in right subtree, the root is the LCA
}

export {};
