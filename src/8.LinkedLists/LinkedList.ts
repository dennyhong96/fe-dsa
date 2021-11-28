export class LinkedList<T = number> {
  public head: ListNode<T>;
  public tail: ListNode<T>;
  public length: number;

  constructor(headValue: T) {
    this.head = new ListNode<T>(headValue);
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  public prepend(val: T): LinkedList<T> {
    const newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // O(1)
  public append(val: T): LinkedList<T> {
    const newNode = new ListNode(val);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(n)
  public insert(index: number, val: T): LinkedList<T> {
    if (index < 0 || index > this.length) {
      throw new Error(`index ${index} is out of bound`);
    }
    if (index === 0) return this.prepend(val);
    if (index === this.length) return this.append(val);
    const newNode = new ListNode(val);
    const leadingNode = this.traverse(index - 1);
    newNode.next = leadingNode.next;
    leadingNode.next = newNode;
    this.length++;
    return this;
  }

  // O(n)
  public remove(index: number) {
    if (index < 0 || index >= this.length) {
      throw new Error(`index ${index} is out of bound`);
    }
    if (this.length === 1) {
      throw new Error(`Cannot remove head node`);
    }
    if (index === 0) {
      const currHead = this.head;
      this.head = currHead.next as ListNode<T>;
      currHead.next = null;
    } else {
      const leadingNode = this.traverse(index - 1);
      const nodeToDelete = leadingNode.next as ListNode<T>;
      leadingNode.next = nodeToDelete.next;
      nodeToDelete.next = null;
      // If removing the last ListNode, need to re-assign Tail
      if (index === this.length - 1) {
        this.tail = leadingNode;
      }
    }
    this.length--;
    return this;
  }

  public reverse(): LinkedList<T> {
    if (this.length === 1) return this;
    let prevNode = this.head;
    let currNode: ListNode<T> | null = this.head.next!;
    this.tail = this.head;
    while (currNode) {
      const nextNode: ListNode<T> | null = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head.next = null;
    this.head = prevNode;
    return this;
  }

  // O(n)
  // Returns ListNode at index
  private traverse(index: number): ListNode<T> {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`index ${index} is out of bound`);
    }
    let node: ListNode<T> = this.head;
    for (let i = index; i > 0; i--) {
      node = node.next as ListNode<T>;
    }
    return node;
  }

  // O(n)
  public toString(): string {
    let result = "[ ";
    let currNode: ListNode<T> | null = this.head;
    while (currNode !== null) {
      result += `${currNode.val} --> `;
      currNode = currNode.next;
    }
    result += `null ]
HEAD: ${this.head.val}
TAIL: ${this.tail.val}
LENGTH: ${this.length}`;
    return result;
  }
}

export class ListNode<T = number> {
  public next: ListNode<T> | null = null;
  public val: T;
  constructor(val: T) {
    this.val = val;
  }
}
