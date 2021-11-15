// Stack implemented with LinkedList
export class Stack<T> {
  private top: Node<T> | null; // Head Node
  private bottom: Node<T> | null;
  private length: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // O(1)
  public peek(): Node<T> | null {
    return this.top;
  }

  // O(1)
  public isEmpty(): boolean {
    return this.length === 0;
  }

  // O(1)
  public push(value: T): Stack<T> {
    const newNode = new Node(value);
    if (!this.top) {
      // Fist time push
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
    return this;
  }

  // O(1)
  public pop(): Node<T> | null {
    this.length--;
    if (!this.top) {
      return null;
    } else if (this.top === this.bottom) {
      const node = this.top!;
      this.top = null;
      this.bottom = null;
      return node;
    } else {
      const node = this.top!;
      this.top = node.next;
      node.next = null;
      return node;
    }
  }

  // O(n)
  toString() {
    const buffer: string[] = [];
    let node = this.top;
    let result = "[ ";
    while (node) {
      buffer.push(`${node.value}`);
      node = node.next;
    }
    result += buffer.reverse().join(", ");
    result += ` ]
BOTTOM: ${this.bottom?.value ?? "null"}
TOP: ${this.top?.value ?? "null"}
LENGTH: ${this.length}
    `;
    return result;
  }
}

export class Node<T> {
  public value: T;
  public next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
