export class HashMap<T> {
  private data: [string, T][][];

  constructor() {
    this.data = [];
  }

  // O(n + m) time; O(1) space; n is key length, m is avg. bucket size
  public set(key: string, value: T): void {
    const hash = this.hash(key); // O(n) n is key length
    let bucket = this.data[hash]; // O(1)
    if (bucket) {
      // Handle overwrite value for a key
      for (const entry of bucket) {
        const [k] = entry;
        if (k === key) entry[1] = value;
        return;
      } // O(m) m is avg. bucket size
      bucket.push([key, value]);
    } else {
      this.data[hash] = [[key, value]];
    }
  }

  // O(n + m) time; O(1) space; n is key length, m is avg. bucket size
  public get(key: string): T | undefined {
    const hash = this.hash(key); // O(n) n is key length
    let bucket = this.data[hash]; // O(1)
    if (!bucket) return undefined;
    for (const entry of bucket) {
      const [k, v] = entry;
      if (k === key) return v;
    } // O(m) m is avg. bucket size
  }

  // O(n) time; O(n) space; n is total entries
  public entries(): [string, T][] {
    const result: [string, T][] = [];
    for (const bucket of this.data) {
      if (!bucket) continue;
      for (const [k, v] of bucket) {
        result.push([k, v]);
      }
    }
    return result;
  }

  // O(n) time; O(n) space; n is total entries
  public keys(): string[] {
    return this.entries().map(([key]) => key);
  }

  // O(n) time; O(n) space; n is total entries
  public values(): T[] {
    return this.entries().map(([_, value]) => value);
  }

  // O(n) time; O(1) space; n is key's length
  private hash(key: string): number {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
      result += key.charCodeAt(i);
    }
    return result;
  }
}

// Example
const map = new HashMap<string>();
map.set("denny", "hong");
map.set("denny", "hong1");
map.set("sharon", "zhang");
map.set("sharon", "zhang1");
console.log(map.entries());
console.log(map.keys());
console.log(map.values());
console.log(map.get("denny"));
console.log(map.get("sharon"));
