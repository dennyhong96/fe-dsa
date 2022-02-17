import { TreeNode } from "./BinarySearchTree";

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

// Inorder recursive DFS - O(n) time; O(logn) space;
function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let result = -1;
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    if (root.left) dfs(root.left);
    if (++count === k) result = root.val;
    if (root.right) dfs(root.right);
  };
  dfs(root);
  return result;
}

// Iterative inorder DFS - O(n) time; O(n) space
function kthSmallest1(root: TreeNode | null, k: number): number {
  const stack: TreeNode[] = [];
  let curr: TreeNode | null = root;
  let count = 0;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop()!;
    if (++count === k) return node.val;
    if (node.right) {
      curr = node.right;
    }
  }
  return -1;
}

// Iterative inorder DFS - O(n) time; O(n) space
function kthSmallest2(root: TreeNode | null, k: number): number {
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right) {
      curr = node.right;
    }
  }
  return result[k - 1];
}
