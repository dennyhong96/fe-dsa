import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || k === 0) return head;

  // Find the length of the list and get a ref of the tail
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  k = k % length;
  if (k === 0) return head;

  // Get the leading node of the segment
  let leading = head;
  const moveBy = length - k - 1;
  for (let i = 0; i < moveBy; i++) {
    leading = leading.next!;
  }

  // Move the segment to the left of head
  const segmentHead = leading.next;
  leading.next = null;
  tail.next = head;

  // Assign new head to the segment's head and return it
  head = segmentHead;
  return head;
}

// Brute force - O(n) time; O(n) space;
function rotateRight1(head: ListNode | null, k: number): ListNode | null {
  const nodes: ListNode[] = []; // O(n) space;
  const nodeNewOrder: ListNode[] = []; // O(n) space;

  let curr: ListNode | null = head;

  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  } // O(n) time;

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    node.next = null;
    const newIndex = (i + k) % nodes.length;
    nodeNewOrder[newIndex] = node;
  }

  const dummyHead = new ListNode(-1);
  curr = dummyHead;
  for (let i = 0; i < nodeNewOrder.length; i++) {
    const node = nodeNewOrder[i];
    curr.next = node;
    curr = curr.next;
  }

  head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

export {};
