import { TreeNode } from "../10.Trees/BinarySearchTree";

// O(n) time; O(n) space; - Map node to its adjacent nodes (parent,left,right)
export function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  if (!root || !target || k < 0) return [];
  if (k === 0) return [target.val]; // distance 0 from target is target itself

  // store node's adjacent nodes in a map
  const adjacentNodes = new Map<TreeNode, TreeNode[]>();
  const dfs = (root: TreeNode | null) => {
    if (!root) return;
    if (!adjacentNodes.has(root)) adjacentNodes.set(root, []);
    if (root.left) {
      adjacentNodes.set(root, [...(adjacentNodes.get(root) ?? []), root.left]);
      adjacentNodes.set(root.left, [
        ...(adjacentNodes.get(root.left) ?? []),
        root,
      ]);
    }
    if (root.right) {
      adjacentNodes.set(root, [...(adjacentNodes.get(root) ?? []), root.right]);
      adjacentNodes.set(root.right, [
        ...(adjacentNodes.get(root.right) ?? []),
        root,
      ]);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);

  // BFS from target out level by level, until k level
  const visited = new Set<TreeNode>();
  const queue: TreeNode[] = [target];
  let distance = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      visited.add(node);
      const adjacents = adjacentNodes.get(node)!;
      for (const adjacent of adjacents) {
        if (visited.has(adjacent)) continue;
        queue.push(adjacent);
      }
    }
    if (++distance === k) break;
  }

  // the queue should contain the result
  return queue.map((n) => n.val);
}
