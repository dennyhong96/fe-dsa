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

// recursive
// O(n) time; O(n) space;
function reverseList1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const newHead = reverseList1(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

export {};
