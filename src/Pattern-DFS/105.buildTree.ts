import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
// Use preorder to decide the order of nodes
// Use inorder array to decide which are left and right child of each node
export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  const rootValue = preorder.shift()!;
  const root = new TreeNode(rootValue);
  const rootInorderIndex = inorder.findIndex((n) => n === rootValue);
  root.left = buildTree(preorder, inorder.slice(0, rootInorderIndex));
  root.right = buildTree(preorder, inorder.slice(rootInorderIndex + 1));
  return root;
}
