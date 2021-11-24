/**
 *      9
 *   4     20
 * 1  6   15  170
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

// O(n) time, o(n) space
export function breadthFirstSearchRe(
  root: TreeNode | null,
  queue = new Queue<TreeNode>(),
  list: Array<number> = []
): Array<number> {
  if (root) queue.enqueue(root);
  if (queue.isEmpty()) return list;
  const treeNode = queue.dequeue()!.value;
  list.push(treeNode.value);
  if (treeNode.left) queue.enqueue(treeNode.left);
  if (treeNode.right) queue.enqueue(treeNode.right);
  return breadthFirstSearchRe(null, queue, list);
}

// O(n) time, o(n) space
export function breadthFirstSearchIt(
  root: TreeNode,
  queue = new Queue<TreeNode>(),
  list: Array<number> = []
): Array<number> {
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    const treeNode = queue.dequeue()!.value;
    list.push(treeNode.value);
    if (treeNode.left) queue.enqueue(treeNode.left);
    if (treeNode.right) queue.enqueue(treeNode.right);
  }
  return list;
}
