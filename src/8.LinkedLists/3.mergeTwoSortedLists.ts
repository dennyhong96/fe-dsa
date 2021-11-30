import { ListNode } from "./LinkedList";

/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a dummy node as result head so we don't need to care about edge case of inserting into null
  let resultHead: ListNode | null = new ListNode(0);
  let resultTail: ListNode = resultHead;

  let list1PointerNode: ListNode | null = list1;
  let list2PointerNode: ListNode | null = list2;

  while (list1PointerNode || list2PointerNode) {
    // if list1PointerNode or list2PointerNode is null, just
    // connect the the rest of the other list to the result list tail
    if (list1PointerNode && list2PointerNode) {
      // Compare and connect the smaller node between the two list to the result list tail
      if (list1PointerNode.val < list2PointerNode.val) {
        resultTail.next = list1PointerNode;
        resultTail = resultTail.next;
        const tmp = list1PointerNode.next;
        list1PointerNode.next = null;
        list1PointerNode = tmp;
      } else {
        resultTail.next = list2PointerNode;
        resultTail = resultTail.next;
        const tmp = list2PointerNode.next;
        list2PointerNode.next = null;
        list2PointerNode = tmp;
      }
    } else if (list1PointerNode && !list2PointerNode) {
      resultTail.next = list1PointerNode;
      break;
    } else if (!list1PointerNode && list2PointerNode) {
      resultTail.next = list2PointerNode;
      break;
    }
  }

  // Get rid of the first dummy node in result list and return the list
  const tmp = resultHead;
  resultHead = resultHead.next;
  tmp.next = null;
  return resultHead;
}
