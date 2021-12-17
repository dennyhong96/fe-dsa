import { ListNode } from "./LinkedList";

/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */

// O(n) time; O(1) space; n is least number of node between list1 and list2
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
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
    tail = tail.next;
  }

  // connect the reminder nodes if any
  if (curr1) tail.next = curr1;
  if (curr2) tail.next = curr2;

  // Get rid of the first dummy node in result list and return the list
  const tmp = head;
  head = tmp.next;
  tmp.next = null;
  return head;
}
