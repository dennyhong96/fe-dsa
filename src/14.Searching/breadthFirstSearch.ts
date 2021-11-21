import { TreeNode } from "../10.Trees/BinarySearchTree";
import { Queue } from "../9.Stacks&Queues/Queue";

const queue = new Queue<TreeNode>();

export function breadthFirstSearch(
  root: TreeNode,
  value: number
): TreeNode | undefined {
  if (root.value === value) return root;

  if (root.left) {
    if (root.left.value === value) {
      return root.left;
    } else {
      if (root.left.left) queue.enqueue(root.left.left);
      if (root.left.right) queue.enqueue(root.left.right);
    }
  }

  if (root.right) {
    if (root.right.value === value) {
      return root.right;
    } else {
      if (root.right.left) queue.enqueue(root.right.left);
      if (root.right.right) queue.enqueue(root.right.right);
    }
  }

  while (!queue.isEmpty()) {
    const node = queue.dequeue()!;
    return breadthFirstSearch(node.value, value);
  }
}
