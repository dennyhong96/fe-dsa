import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(logn) space;
// Use preorder to decide the order of nodes
// Use inorder array to decide which are left and right child of each node
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  const val = preorder.shift()!;
  const root = new TreeNode(val);
  const index = inorder.findIndex((n) => n === val);
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
}

export {};
