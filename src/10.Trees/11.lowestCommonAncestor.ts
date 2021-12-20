import { TreeNode } from "./BinarySearchTree";

// O(h) time; O(h) space; h is tree height
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

  // either root splits the two nodes, or root is one of the two nodes
  return root;
}

export {};
