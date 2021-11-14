export class LinkedList<T> {
  public head: Node<T>;
  public tail: Node<T>;
  public length: number;

  constructor(headValue: T) {
    this.head = new Node<T>(headValue);
    this.tail = this.head;
    this.length = 1;
  }

  // O(1)
  public prepend(value: T): LinkedList<T> {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // O(1)
  public append(value: T): LinkedList<T> {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // O(n)
  public insert(index: number, value: T): LinkedList<T> {
    if (index < 0 || index > this.length) {
      throw new Error(`index ${index} is out of bound`);
    }
    if (index === 0) return this.prepend(value);
    if (index === this.length) return this.append(value);
    const newNode = new Node(value);
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
      this.head = currHead.next as Node<T>;
      currHead.next = null;
    } else {
      const leadingNode = this.traverse(index - 1);
      const nodeToDelete = leadingNode.next as Node<T>;
      leadingNode.next = nodeToDelete.next;
      nodeToDelete.next = null;
      // If removing the last Node, need to re-assign Tail
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
    let currNode: Node<T> | null = this.head.next!;
    this.tail = this.head;
    while (currNode) {
      const nextNode: Node<T> | null = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head.next = null;
    this.head = prevNode;
    return this;
  }

  // O(n)
  // Returns Node at index
  private traverse(index: number): Node<T> {
    if (index < 0 || index > this.length - 1) {
      throw new Error(`index ${index} is out of bound`);
    }
    let node: Node<T> = this.head;
    for (let i = index; i > 0; i--) {
      node = node.next as Node<T>;
    }
    return node;
  }

  // O(n)
  public toString(): string {
    let result = "[ ";
    let currNode: Node<T> | null = this.head;
    while (currNode !== null) {
      result += `${currNode.value} --> `;
      currNode = currNode.next;
    }
    result += `null ]
HEAD: ${this.head.value}
TAIL: ${this.tail.value}
LENGTH: ${this.length}`;
    return result;
  }
}

export class Node<T> {
  public next: Node<T> | null = null;
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}
