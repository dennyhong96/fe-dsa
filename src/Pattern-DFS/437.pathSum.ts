import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
export function pathSum(root: TreeNode | null, targetSum: number): number {
  // The idea is to use DFS twice,
  // for each node, find the number of paths that starts with the node and sums to target
  if (!root) return 0;

  let count = 0;

  // find the number of paths that starts with the node and sums to target
  const findPaths = (root: TreeNode | null, target = targetSum) => {
    if (!root) return;
    if (root.val === target) {
      count++;
      // dont return yet, because there could be longer paths starts with current path
    }
    const leftOver = target - root.val;
    findPaths(root.left, leftOver);
    findPaths(root.right, leftOver);
  };

  // repeat findPaths for each node of the tree
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    findPaths(root);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);

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
