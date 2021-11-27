import { ListNode } from "./LinkedList";

/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

// O(n) time; O(1) space
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;
  let currNode = head;
  while (currNode.next) {
    const tmp = currNode.next;
    currNode.next = tmp.next;
    tmp.next = head;
    head = tmp;
  }
  return head;
}
