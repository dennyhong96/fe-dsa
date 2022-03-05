export class HashTable<T extends string, U> {
  public data: [T, U][][];

  constructor(size: number) {
    this.data = new Array(size);
  }

  // O(1) if no collision, O(n) with collision
  public get(key: T): U | undefined {
    const address = this.hash(key);
    const items = this.data[address];
    if (!items || !items.length) return undefined;
    for (let i = 0; i < items.length; i++) {
      const currItem = items[i];
      const [k, v] = currItem;
      if (k === key) return v;
    }
  }

  // O(1)
  public set(key: T, val: U): void {
    const address = this.hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, val]);
  }

  // O(n) if no collision, O(n^2) with collision
  public keys(): T[] {
    const keys = [];
    for (const item of this.data) {
      if (!item || !item.length) continue;
      for (const entry of item) {
        const [k] = entry;
        keys.push(k);
      }
    }
    return keys;
  }

  // O(1)
  private hash(key: T): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}
