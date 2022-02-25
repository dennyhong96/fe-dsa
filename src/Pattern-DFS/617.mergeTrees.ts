import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; o(logn) space;
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return null;
  const node = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));
  node.left = mergeTrees(root1?.left ?? null, root2?.left ?? null);
  node.right = mergeTrees(root1?.right ?? null, root2?.right ?? null);
  return node;
}
