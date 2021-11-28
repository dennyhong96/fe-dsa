import { ListNode } from "./LinkedList";

/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
 */

// floyd tortoise and hare algorithm (Fast & slow pointers)
// O(n) time; O(1) space
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let fastPointerNode: ListNode | null = head;
  let slowPointerNode = head;
  while (fastPointerNode && fastPointerNode.next) {
    fastPointerNode = fastPointerNode.next.next;
    slowPointerNode = slowPointerNode.next!;
    if (slowPointerNode === fastPointerNode) return true;
  }
  return false;
}

// O(n) time; O(n) space
function hasCycle1(head: ListNode | null): boolean {
  if (!head) return false;
  let currNode = head;
  const map = new Map<ListNode, boolean>();
  while (currNode.next) {
    const storedNodeIndex = map.get(currNode);
    if (storedNodeIndex) {
      return true;
    } else {
      map.set(currNode, true);
      currNode = currNode.next;
    }
  }
  return false;
}
