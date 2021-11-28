import { ListNode } from "./LinkedList";

/**
 * 19. Remove Nth Node From End of List
 * https://www.youtube.com/watch?v=XVuQxVej6y8
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  // Offset the trailingPointerNode n nodes behind head
  let trailingPointerNode: ListNode | null = head;
  let count = n;
  while (count > 0) {
    trailingPointerNode = trailingPointerNode!.next;
    count--;
  }

  // Add a dummyNode before head and set it as new head
  // this is so we don't need to worry about edge case
  // where the head node need to be removed
  let leadingPointerNode = new ListNode(0);
  leadingPointerNode.next = head;
  head = leadingPointerNode;

  // when trailingPointerNode is null (out of bounds)
  // the next node of leadingPointerNode is the node we need to remove
  while (trailingPointerNode) {
    trailingPointerNode = trailingPointerNode.next;
    leadingPointerNode = leadingPointerNode.next!;
  }

  const nodeToRemove = leadingPointerNode.next!;
  leadingPointerNode.next = nodeToRemove.next;
  nodeToRemove.next = null;

  // remove the dummyNode we added add return the head
  const dummyNode = head;
  head = dummyNode.next;
  dummyNode.next = null;
  return head;
}

// One pass w/ hashmap - O(n) time; O(n) space
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;
  const map = new Map<number, ListNode>(); // index -> ListNode
  let currNode: ListNode | null = head;
  let index = 0;
  while (currNode) {
    map.set(index, currNode);
    index++;
    currNode = currNode.next;
  }
  const length = index; // index is length after while loop break off
  let leadingNode = map.get(length - 1 - n); // to previous node to the node that should be removed
  let nodeToRemove: ListNode;

  if (!leadingNode) {
    // Handle edge case where head should be removed
    nodeToRemove = head;
    head = head.next;
  } else {
    nodeToRemove = leadingNode.next!;
    leadingNode.next = nodeToRemove!.next;
  }
  nodeToRemove.next = null;
  return head;
}

// Two passes - O(n) time; O(1) space
function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  // Use the 1st pass to get the total length of the list
  let length: number = 0;
  let currNode: ListNode | null = head;
  while (currNode) {
    length++;
    currNode = currNode.next;
  }

  // Use the 2nd pass to find the leadingNode
  let leadingNode = head;
  for (let i = 1; i < length - n; i++) {
    leadingNode = leadingNode.next!;
  }

  let nodeToRemove: ListNode;
  if (length - n < 1) {
    // Handle edge case where we need to remove the head node
    nodeToRemove = head;
    head = head.next;
  } else {
    nodeToRemove = leadingNode.next!;
    leadingNode.next = nodeToRemove.next;
  }

  nodeToRemove.next = null;
  return head;
}
