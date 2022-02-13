class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

// Iterative
function connect(root: Node | null): Node | null {
  if (!root) return null;
  const queue: Node[] = [root];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      if (i < len - 1) {
        node.next = queue[0];
      } else {
        node.next = null;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

// Recursive
function connect2(
  root: Node | null,
  queue: (Node | null)[] = [root]
): Node | null {
  if (!root || queue[0] === null || !queue.length) return root;
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    const node = queue.shift()!;
    if (i < len - 1) {
      node.next = queue[0];
    } else {
      node.next = null;
    }
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return connect2(root, queue);
}

export {};
