import { ListNode } from "./LinkedList";

/**
 * 21. Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let list1PointerNode = list1;
  let list2PointerNode = list2;

  // Create a dummy node as result head so we don't need to care about edge case of inserting into null
  let resultListHeadNode: ListNode | null = new ListNode(-1);
  let resultListTailNode = resultListHeadNode;

  while (list1PointerNode || list2PointerNode) {
    // if list1PointerNode or list2PointerNode is null, just
    // connect the the rest of the other list to the result list tail
    if (list1PointerNode && !list2PointerNode) {
      resultListTailNode.next = list1PointerNode;
      break;
    } else if (list2PointerNode && !list1PointerNode) {
      resultListTailNode.next = list2PointerNode;
      break;

      // Compare and connect the smaller node between the two list to the result list tail
    } else if (list1PointerNode && list2PointerNode) {
      let tmp: ListNode;
      if (list1PointerNode.val <= list2PointerNode.val) {
        resultListTailNode.next = list1PointerNode;
        tmp = list1PointerNode;
        list1PointerNode = list1PointerNode.next;
      } else {
        resultListTailNode.next = list2PointerNode;
        tmp = list2PointerNode;
        list2PointerNode = list2PointerNode.next;
      }
      tmp.next = null;
      resultListTailNode = resultListTailNode.next;
    }
  }

  // Get rid of the first dummy node in result list and return the list
  const tmp = resultListHeadNode;
  resultListHeadNode = resultListHeadNode.next;
  tmp.next = null;
  return resultListHeadNode;
}
