import { ListNode } from "./LinkedList";

/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

// O(n) time; O(1) space;
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let currentNode = head;
  while (currentNode.next) {
    let tmp = currentNode.next;
    currentNode.next = currentNode.next.next;
    tmp.next = head;
    head = tmp;
  }
  return head;
}
