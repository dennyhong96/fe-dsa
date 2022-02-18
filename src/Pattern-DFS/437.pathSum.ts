import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n^2) time; O(logn) space;
function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  return (
    pathSum(root.left, targetSum) + // count number of paths of left sub tree
    findPathCount(root, targetSum) + // count number of paths that starts from this node
    pathSum(root.right, targetSum) // count number of paths of right sub tree
  );
}

function findPathCount(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let count = 0;
  if (targetSum === root.val) count++;
  count += findPathCount(root.left, targetSum - root.val);
  count += findPathCount(root.right, targetSum - root.val);
  return count;
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
