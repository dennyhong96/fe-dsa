import { TreeNode } from "./BinarySearchTree";

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

// O(n^2) time; O(n) space
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) return null;
  const num = preorder.shift()!;
  const inorderNodeIndex = inorder.findIndex((n) => n === num);
  const root = new TreeNode(num);
  root.left = buildTree(preorder, inorder.slice(0, inorderNodeIndex));
  root.right = buildTree(preorder, inorder.slice(inorderNodeIndex + 1));
  return root;
}

export {};
