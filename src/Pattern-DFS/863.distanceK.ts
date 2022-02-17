import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space; - Map node to its adjacent nodes (parent,left,right)
function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root || !target || k < 0) return [];
  if (k === 0) return [target.val]; // distance 0 is the target itself

  // map node to it's adjacent nodes
  const adjacentNodes = new Map<TreeNode, TreeNode[]>();
  const dfs = (root: TreeNode) => {
    if (root.left) {
      adjacentNodes.set(root, [...(adjacentNodes.get(root) ?? []), root.left]);
      adjacentNodes.set(root.left, [root]);
      dfs(root.left);
    }
    if (root.right) {
      adjacentNodes.set(root, [...(adjacentNodes.get(root) ?? []), root.right]);
      adjacentNodes.set(root.right, [root]);
      dfs(root.right);
    }
  };
  dfs(root);
  if (adjacentNodes.size === 0) return [];

  // start from target, go through its adjacent nodes level by level using bfs
  const queue: TreeNode[] = [target];
  const seen = new Set<TreeNode>();
  let level = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      seen.add(node);
      const adjacents = adjacentNodes.get(node)!;
      for (const adjacent of adjacents) {
        // Prevent adding visited nodes
        if (seen.has(adjacent)) continue;
        queue.push(adjacent);
      }
    }
    if (++level === k) break;
  }
  return queue.map((n) => n.val);
}
