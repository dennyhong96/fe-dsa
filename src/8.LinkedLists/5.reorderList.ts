import { ListNode } from "./LinkedList";

/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 */

// slow & fast pointers - O(n) time; O(1) space
function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;
  // 1. find the middle node with fast & slow pointers
  let fastPointer: ListNode | null = head.next;
  let slowPointer = head;
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next!;
  }

  // 2. cut the list into left and right halves
  let rightHalfHead = slowPointer.next!;
  slowPointer.next = null;

  // 3. reverse the right half
  let currNode = rightHalfHead;
  while (currNode.next) {
    const tmp = currNode.next;
    currNode.next = tmp.next;
    tmp.next = rightHalfHead;
    rightHalfHead = tmp;
  }

  // 4. re-build the list by merging the left and right halves
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
