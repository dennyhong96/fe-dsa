import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
function pathSum(root: TreeNode | null, targetSum: number): number {
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

// O(n^2) time; O(logn) space;
function pathSum1(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  let pathCount = 0;

  function findPaths(root: TreeNode, target = targetSum) {
    if (root.val === target) {
      pathCount++;
    }
    if (root.left) {
      findPaths(root.left, target - root.val);
    }
    if (root.right) {
      findPaths(root.right, target - root.val);
    }
  }

  const dfs = (root: TreeNode) => {
    findPaths(root);
    if (root.left) {
      dfs(root.left);
    }
    if (root.right) {
      dfs(root.right);
    }
  };
  dfs(root);

  return pathCount;
}

export {};
