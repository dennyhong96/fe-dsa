import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;

  // find one of the target node
  if (root.val === p.val || root.val === q.val) return root;

  const foundLeft = lowestCommonAncestor(root.left, p, q);
  const foundRight = lowestCommonAncestor(root.right, p, q);

  // root splits left and right, root is LCA
  if (foundLeft && foundRight) return root;

  // otherwise, return which ever target that was found
  // if we found left, that means right must be a child of left, return left as a descendant of itself
  // if we found right, that measn left must be a child of right, return right as a descendant of itself
  return foundLeft ?? foundRight;
}
