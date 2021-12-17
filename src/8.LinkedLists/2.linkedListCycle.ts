import { ListNode } from "./LinkedList";

/**
 * 141. Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/
 */

// floyd tortoise and hare algorithm (Fast & slow pointers)
// O(n) time; O(1) space
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next!;
    fast = fast.next.next;
  }
  return false;
}

// O(n) time; O(n) space
function hasCycle1(head: ListNode | null): boolean {
  if (!head) return false;
  let currNode = head;
  const map = new Map<ListNode, boolean>();
  while (currNode.next) {
    const stored = map.get(currNode);
    if (stored) {
      return true;
    } else {
      map.set(currNode, true);
      currNode = currNode.next;
    }
  }
  return false;
}
