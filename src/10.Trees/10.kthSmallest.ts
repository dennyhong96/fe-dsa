import { TreeNode } from "./BinarySearchTree";

/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */

// Inorder recursive DFS - O(n) time; O(n) space;
function kthSmallest(
  root: TreeNode | null,
  k: number,
  result: number[] = []
): number {
  if (!root) return -1;
  if (root.left) kthSmallest(root.left, k, result);
  if (result.length === k) return result[k - 1]; // bail early as long as we have kth smallest
  result.push(root.val);
  if (root.right) kthSmallest(root.right, k, result);
  return result[k - 1];
}

// Iterative inorder DFS - O(n) time; O(n) space
function kthSmallest1(root: TreeNode | null, k: number): number {
  let nthSmallest = 0;
  const stack: TreeNode[] = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    const node = stack.pop()!;
    nthSmallest++;
    if (nthSmallest === k) return node.val;
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
