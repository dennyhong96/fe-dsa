import { TreeNode } from "./BinarySearchTree";

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

// Inorder recursive DFS - O(n) time; O(n) space;
function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return -1;
  const result: number[] = [];
  const inorder = (node: TreeNode) => {
    if (node.left) inorder(node.left);
    result.push(node.val);
    if (node.right) inorder(node.right);
  };
  inorder(root);
  return result[k - 1];
}

// Iterative inorder DFS - O(n) time; O(n) space
function kthSmallest1(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let n = 0;
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop()!;
    n++;
    if (n == k) return node.val;
    curr = node.right;
  }
  return -1;
}

// Iterative inorder DFS - O(n) time; O(n) space
function kthSmallest2(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  const result: number[] = [];
  let currNode = root;
  while (currNode) {
    stack.push(currNode);
    currNode = currNode.left;
  }
  while (stack.length) {
    const node = stack.pop()!;
    result.push(node.val);
    let curr = node.right;
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
  }
  return result[k - 1];
}

export {};
