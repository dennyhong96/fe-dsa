import { ListNode } from "./LinkedList";

/**
 * 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 */

// O(n) time; O(1) space;
function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr && curr.next) {
    let tmp = curr.next;
    curr.next = curr.next.next;
    tmp.next = head;
    head = tmp;
  }
  return head;
}
