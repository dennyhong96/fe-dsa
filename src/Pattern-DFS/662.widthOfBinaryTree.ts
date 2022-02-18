import { TreeNode } from "../10.Trees/BinarySearchTree";

// DFS - O(n) time; O(logn) space;
export function widthOfBinaryTree(root: TreeNode | null): number {
  let maxWidth = 0;
  const levelFirstNode = new Map<number, number>(); // map depth to its left most node's position
  const dfs = (root: TreeNode | null, depth = 0, position = 0) => {
    if (!root) return;
    // When we traverse on left branches we map depth and position
    if (!levelFirstNode.has(depth)) {
      levelFirstNode.set(depth, position);
    }
    // When we traverse on right branches we can calculate diff between curr position and stored position of this depth
    const diff = position - levelFirstNode.get(depth)!;
    maxWidth = Math.max(maxWidth, diff + 1);

    dfs(root.left, depth + 1, diff * 2);
    dfs(root.right, depth + 1, diff * 2 + 1);
  };
  dfs(root);
  return maxWidth;
}

// BFS level order traversal - O(n) time; O(n) space;
export function widthOfBinaryTree1(root: TreeNode | null): number {
  let maxWidth = 0;
  if (!root) return maxWidth;
  const queue: [TreeNode, number][] = [[root, 0]]; // TreeNode, Position
  while (queue.length) {
    const levelWidth = queue[queue.length - 1][1] - queue[0][1] + 1;
    maxWidth = Math.max(maxWidth, levelWidth);
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [node, pos] = queue.shift()!;
      if (node.left) {
        queue.push([node.left, pos * 2]);
      }
      if (node.right) {
        queue.push([node.right, pos * 2 + 1]);
      }
    }
  }
  return maxWidth;
}
