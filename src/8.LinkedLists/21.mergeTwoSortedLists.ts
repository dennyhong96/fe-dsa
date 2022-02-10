import { ListNode } from "./LinkedList";

/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

// O(n) time; O(1) space - n is the smaller length between list1 and list2
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(-1);
  let curr = dummyHead;
  let curr1 = list1;
  let curr2 = list2;
  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      const tmp = curr1.next;
      curr.next = curr1;
      curr1.next = null;
      curr1 = tmp;
    } else {
      const tmp = curr2.next;
      curr.next = curr2;
      curr2.next = null;
      curr2 = tmp;
    }
    curr = curr.next;
  }
  if (curr1) curr.next = curr1;
  if (curr2) curr.next = curr2;
  const head = dummyHead.next;
  dummyHead.next = null;
  return head;
}

// O(n) time; O(1) space - n is the smaller length between list1 and list2
function mergeTwoLists1(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // setup pointers
  let curr1 = list1;
  let curr2 = list2;

  // Create a dummy node as result head so we don't need to care about edge case of inserting into null
  let head: ListNode | null = new ListNode(-1);
  let tail = head;

  while (curr1 && curr2) {
    // Compare and connect the smaller node between the two list to the result list tail
    if (curr1.val < curr2.val) {
      tail.next = curr1;
      const tmp = curr1.next;
      curr1.next = null;
      curr1 = tmp;
    } else {
      tail.next = curr2;
      const tmp = curr2.next;
      curr2.next = null;
      curr2 = tmp;
    }

    tail = tail.next; // update tail
  }

  // connect the remaining nodes if any
  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;

  // Get rid of the first dummy node in result list and return the list
  const tmp = head;
  head = tmp.next;
  tmp.next = null;
  return head;
}
