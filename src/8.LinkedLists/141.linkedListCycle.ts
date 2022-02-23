import { ListNode } from "./LinkedList";

// O(n) time; O(1) space
export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  // floyd's linked list cycle detection

  // 1. find intersection between fast and slow pointer
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
  // 2. if needed, use a seondary slow pointer to find start of cycle
}
