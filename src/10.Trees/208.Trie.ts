/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class TrieNode {
  public children: Map<string, TrieNode>;
  public end: boolean;
  constructor() {
    this.children = new Map<string, TrieNode>();
    this.end = false;
  }
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // O(n) time; O(h) space;
  public insert(word: string, parent = this.root): void {
    if (!word.length) {
      parent.end = true;
      return;
    }
    const char = word.slice(0, 1);
    let node: TrieNode;
    if (parent.children.has(char)) {
      node = parent.children.get(char)!;
    } else {
      node = new TrieNode();
      parent.children.set(char, node);
    }
    this.insert(word.slice(1), node);
  }

  // O(n) time; O(h) space;
  public search(word: string): boolean {
    return Boolean(this.findNode(word)?.end);
  }

  // O(n) time; O(h) space;
  public startsWith(prefix: string): boolean {
    return Boolean(this.findNode(prefix));
  }

  // O(n) time; O(h) space;
  private findNode(word: string, parent = this.root): TrieNode | null {
    if (!word.length) return parent;
    const char = word.slice(0, 1);
    if (parent.children.has(char)) {
      const node = parent.children.get(char)!;
      return this.findNode(word.slice(1), node);
    } else {
      return null;
    }
  }
}

class Trie2 {
  private root = new TrieNode();

  constructor() {}

  // O(n) time; O(1) space
  insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let node = curr.children.get(char);
      if (!node) {
        node = new TrieNode();
        curr.children.set(char, node);
      }
      curr = node;
    }
    curr.end = true;
  }

  // O(n) time; O(1) space
  search(word: string): boolean {
    const foundNode = this.getNode(word);
    return Boolean(foundNode?.end);
  }

  // O(n) time; O(1) space
  startsWith(prefix: string): boolean {
    const foundNode = this.getNode(prefix);
    return Boolean(foundNode);
  }

  // O(n) time; O(1) space
  private getNode(str: string): TrieNode | null {
    let curr = this.root;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      let node = curr.children.get(char);
      if (!node) return null;
      curr = node;
    }
    return curr;
  }
}

function printTrieNode(rootNode: TrieNode) {
  if (!rootNode.children.size) return;
  rootNode.children.forEach((val, key) => {
    console.log(key, val.end);
    printTrieNode(val);
  });
}

const trie = new Trie();
trie.insert("apple");
printTrieNode(trie.root);
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True

export {};
