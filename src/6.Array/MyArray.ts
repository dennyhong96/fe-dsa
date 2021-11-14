export class MyArray<T> {
  public length: number;
  public data: Record<number, T>;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  public get(index: number): T | undefined {
    return this.data[index];
  }

  // O(1)
  public push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // O(1)
  public pop(): T | undefined {
    const lastItem = this.data[this.length - 1];
    if (!lastItem) return undefined;
    delete this.data[this.length];
    this.length--;
    return lastItem; 
  }

  // O(n)
  public remove(index: number): T | undefined {
    const itemDeleted = this.data[index];
    if (!itemDeleted) return undefined;
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return itemDeleted;
  }
}