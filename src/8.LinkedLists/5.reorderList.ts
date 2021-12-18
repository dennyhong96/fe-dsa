import { ListNode } from "./LinkedList";

/**
 * 143. Reorder List
 * https://leetcode.com/problems/reorder-list/
 */

// slow & fast pointers - O(n) time; O(1) space
function reorderList(head: ListNode | null): void {
  if (!head) return;

  // Use fast & slow pointers to find the middle node
  let slow = head;
  let fast: ListNode | null = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next!;
  }

  // use the middle node to cut list into two halves
  let rightHalfHead = slow.next;
  slow.next = null;

  // reverse the right half
  let curr = rightHalfHead;
  while (curr && curr.next) {
    const tmp = curr.next;
    curr.next = curr.next.next;
    tmp.next = rightHalfHead;
    rightHalfHead = tmp;
  }

  // put together the new list by inserting nodes from right half into left half
  let currLeft: ListNode | null = head;
  let currRight: ListNode | null = rightHalfHead;
  while (currLeft && currRight) {
    const leftTmp: ListNode | null = currLeft.next;
    const rightTmp: ListNode | null = currRight.next;
    currLeft.next = currRight;
    currLeft.next.next = leftTmp;
    currLeft = leftTmp;
    currRight = rightTmp;
  }
}

// 1,2; 4,3
// 1,4,2; 3
// 1,4,2,3

// 1,2,3 5,4
// 1,5,2,3; 4
// 1,5,2,4,3

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
