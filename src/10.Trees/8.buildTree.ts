import { TreeNode } from "./BinarySearchTree";

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

// O(n) time; O(h) space;
// Use preorder to decide the order of nodes
// Use inorder array to decide which are left and right child of each node
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) return null;
  const num = preorder.shift()!;
  const node = new TreeNode(num);
  const nodeInorderIndex = inorder.findIndex((n) => n === num);
  const leftInorder = inorder.slice(0, nodeInorderIndex);
  const rightInorder = inorder.slice(nodeInorderIndex + 1);
  node.left = buildTree(preorder, leftInorder);
  node.right = buildTree(preorder, rightInorder);
  return node;
}

export {};
