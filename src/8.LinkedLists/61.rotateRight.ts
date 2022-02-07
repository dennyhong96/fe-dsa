import { ListNode } from "./LinkedList";

// O(n) time; O(1) space;
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;

  // one pass get list length and tail
  let len = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }
  k = k % len;
  if (k === 0) return head;

  // get leading node
  let leading = head;
  let index = 0;
  while (index < len - k - 1) {
    leading = leading.next!;
    index++;
  }

  // cut segment after leading node
  const segmentHead = leading.next;
  leading.next = null;

  // re-arrange segment to be before head
  tail.next = head;
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
