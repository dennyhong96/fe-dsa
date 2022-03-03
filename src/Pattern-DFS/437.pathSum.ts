import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
export function pathSum(root: TreeNode | null, targetSum: number): number {
  // The idea is to use DFS twice,
  // for each node, find the number of paths that starts with the node and sums to target
  let totalCount = 0;

  // call countPaths for each node of the tree
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    totalCount += countPaths(root, targetSum);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return totalCount;
}

// count the number of paths that starts with the node and sums to target
function countPaths(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  if (!root) return count;
  if (root.val === targetSum) count++;
  const remainder = targetSum - root.val;
  count += countPaths(root.left, remainder);
  count += countPaths(root.right, remainder);
  return count;
}

// O(n^2) time; O(logn) space;
function pathSum1(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  return (
    pathSum(root.left, targetSum) + // total path count starting from curr node's left child
    findPathCount(root, targetSum) + // total path count starting from curr node
    pathSum(root.right, targetSum) // total path count starting from curr node's right child
  );
}

function findPathCount(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let pathCount = 0;
  if (root.val === targetSum) pathCount++;
  pathCount += findPathCount(root.left, targetSum - root.val);
  pathCount += findPathCount(root.right, targetSum - root.val);
  return pathCount;
}
