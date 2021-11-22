import { TreeNode } from "../10.Trees/BinarySearchTree";
/**
 * DFS traversal has 3 orders
 *      9
 *   4     20
 * 1  6  15 170
 * in order   - [1, 4, 6, 9, 15, 20, 170]
 * pre order  - [9, 4, 1, 6, 20, 15, 170]
 * post order - [1, 6, 4, 15, 170, 20, 9]
 */

export function inOrderTraversal(root: TreeNode, list: Array<TreeNode> = []) {
  if (root.left) inOrderTraversal(root.left, list);
  list.push(root);
  if (root.right) inOrderTraversal(root.right, list);
  return list;
}

export function preOrderTraversal(root: TreeNode, list: Array<TreeNode> = []) {
  list.push(root);
  if (root.left) preOrderTraversal(root.left, list);
  if (root.right) preOrderTraversal(root.right, list);
  return list;
}

export function postOrderTraversal(root: TreeNode, list: Array<TreeNode> = []) {
  if (root.left) postOrderTraversal(root.left, list);
  if (root.right) postOrderTraversal(root.right, list);
  list.push(root);
  return list;
}
