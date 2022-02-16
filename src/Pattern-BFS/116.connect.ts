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

// Recursive O(n) time; O(1) space;
function connect(root: Node | null): Node | null {
  if (!root || (!root.left && !root.right)) return root;

  // a node's left child's next is the node's right child
  root.left!.next = root.right;

  // if a node's next exists, the node's right child's next is the node's next node's left child
  if (root.next) {
    root.right!.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);

  return root;
}

// Iterative O(n) time; O(n) space;
function connect1(root: Node | null): Node | null {
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

export {};
