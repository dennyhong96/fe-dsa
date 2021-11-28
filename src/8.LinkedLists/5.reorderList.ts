import { ListNode } from "./LinkedList";

/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 */

// slow & fast pointers - O(n) time; O(1) space
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  // Use fash & slow pointers to find the middle of the linked list
  // cut the linked list into left and right half
  let slowPointerNode = head;
  let fastPointerNode: ListNode | null = head.next;
  while (fastPointerNode && fastPointerNode.next) {
    slowPointerNode = slowPointerNode.next!;
    fastPointerNode = fastPointerNode.next.next;
  }

  // Reverse the right half linked list
  let rightHalfHead = slowPointerNode.next!;
  slowPointerNode.next = null; // cut the link between leftHalfTail and rightHalfHead
  let currNode = rightHalfHead;
  while (currNode.next) {
    const tmp = currNode.next.next;
    currNode.next.next = rightHalfHead;
    rightHalfHead = currNode.next;
    currNode.next = tmp;
  }

  // Build the result reordered linked list
  // by merging the left and right halves
  let leftHalfCurrNode: ListNode | null = head;
  let rightHalfCurrNode: ListNode | null = rightHalfHead;
  while (rightHalfCurrNode) {
    const tmp1: ListNode | null = leftHalfCurrNode!.next;
    const tmp2: ListNode | null = rightHalfCurrNode.next;
    leftHalfCurrNode!.next = rightHalfCurrNode;
    rightHalfCurrNode.next = tmp1;
    leftHalfCurrNode = tmp1;
    rightHalfCurrNode = tmp2;
  }
}

// O(n) time; O(n) space
function reorderList2(head: ListNode | null): void {
  if (!head) return;

  let currNode: ListNode | null = head;
  let index = 0;
  const map = new Map<number, ListNode>(); // index -> ListNode
  while (currNode) {
    map.set(index, currNode);
    currNode = currNode.next;
    index++;
  }
  const length = index; // index becomes the length when the while loop breaks off

  let tail = map.get(length - 1)!;

  // Handle case where tail is head, there's only one node in list
  if (tail !== head) {
    head.next = tail; // connects tail to head
    tail = head.next;
  }
  for (let i = 1; i < Math.ceil(length / 2); i++) {
    const nodeFromLeftHalf = map.get(i)!;
    const nodeFromRightHalf = map.get(length - 1 - i)!;
    tail.next = nodeFromLeftHalf;
    nodeFromLeftHalf.next = null;
    tail = tail.next;

    // Handle cases like length = 5, i = 2, length - 1 - i = 2
    // nodeFromLeftHalf and nodeFromRightHalf points to the same node
    if (nodeFromLeftHalf !== nodeFromRightHalf) {
      tail.next = nodeFromRightHalf;
      nodeFromRightHalf.next = null;
      tail = tail.next;
    }
  }
}

function reorderListbu(head: ListNode | null): void {
  if (!head || !head.next) return;

  let slowPointerNode = head;
  let fastPointerNode: ListNode | null = head.next;
  while (fastPointerNode && fastPointerNode.next) {
    slowPointerNode = slowPointerNode.next!;
    fastPointerNode = fastPointerNode.next.next;
  }
  let rightHalfHead = slowPointerNode.next!;
  slowPointerNode.next = null;

  console.log({ rightHalfHead });

  let currNode = rightHalfHead;
  while (currNode.next) {
    const tmp = currNode.next.next;
    currNode.next.next = rightHalfHead;
    rightHalfHead = currNode.next;
    currNode.next = tmp;
  }

  console.log({ rightHalfHead });

  let tail = head;
  let leftHalfCurrNode: ListNode | null = head.next;
  let rightHalfCurrNode: ListNode | null = rightHalfHead;
  while (leftHalfCurrNode || rightHalfCurrNode) {
    if (rightHalfCurrNode) {
      tail.next = rightHalfCurrNode;
      rightHalfCurrNode = rightHalfCurrNode.next;
      tail = tail.next;
      tail.next = null;
    }

    if (leftHalfCurrNode) {
      tail.next = leftHalfCurrNode;
      leftHalfCurrNode = leftHalfCurrNode.next;
      tail = tail.next;
      tail.next = null;
    }
  }
}
