import { TreeNode } from "./BinarySearchTree";

// Recursive - O(logn) time(visit 1 node for each level); O(logn) space(call stack);
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

// Iterative - O(logn) time; O(1) space;
function lowestCommonAncestor1(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !q || !p) return null;
  let curr: TreeNode | null = root;
  while (curr) {
    if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left;
    } else if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
  return null;
}

export {};
