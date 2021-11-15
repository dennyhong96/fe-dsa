// Stack implemented with built-in Array
export class Stack2<T> {
  private data: T[];

  constructor() {
    this.data = [];
  }

  public get length(): number {
    return this.data.length;
  }

  // O(1)
  public peek(): T | null {
    return this.data[this.length - 1] ?? null;
  }

  // O(1)
  public push(value: T): Stack2<T> {
    this.data.push(value);
    return this;
  }

  // O(1)
  public pop(): T | null {
    return this.data.pop() ?? null;
  }

  // O(n)
  public toString() {
    return this.data.toString();
  }
}
