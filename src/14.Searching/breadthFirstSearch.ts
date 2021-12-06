/**
 *      9
 *   4     20
 * 1  6   15  170
 */

import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

export function breadthFirstSearchRe(
  root: TreeNode | null,
  queue = new Queue<TreeNode>(),
  list: Array<number> = []
) {
  if (root) queue.enqueue(root);
  if (!queue.isEmpty()) {
    const node = queue.dequeue()!.value;
    list.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
    breadthFirstSearchRe(null, queue, list);
  }
  return list;
}

export function breadthFirstSearchIt(
  root: TreeNode,
  queue = new Queue<TreeNode>(),
  list: Array<number> = []
) {
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const node = queue.dequeue()!.value;
    list.push(node.val);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }

  return list;
}
