import { TreeNode } from "./BinarySearchTree";

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

// O(n^2) time; O(n) space
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) return null;
  const num = preorder.shift()!;
  const node = new TreeNode(num);
  const mid = inorder.findIndex((n) => n === num);
  const leftInOrder = inorder.slice(0, mid);
  const rightInOrder = inorder.slice(mid + 1);
  node.left = buildTree(preorder, leftInOrder);
  node.right = buildTree(preorder, rightInOrder);
  return node;
}
