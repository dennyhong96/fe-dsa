import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space; - Map node to its adjacent nodes (parent,left,right)
function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root || !target) return [];
  if (k === 0) return [target.val];

  // Map node to its adjacent nodes (parent,left,right)
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
  if (!adjacentNodes.size) return [];

  // BFS, starts from target node
  const seen = new Set<TreeNode>();
  const queue: TreeNode[] = [];
  let level = 0;
  queue.push(target);
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      seen.add(node);
      const adjacents = adjacentNodes.get(node)!;
      for (const ad of adjacents) {
        if (!seen.has(ad)) {
          queue.push(ad);
        }
      }
    }
    if (++level === k) break;
  }

  return queue.map((n) => n.val);
}
