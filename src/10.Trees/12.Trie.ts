/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */
class TrieNode {
  children = new Map<string, TrieNode>();
  end = false;
}

class Trie {
  private root = new TrieNode();

  constructor() {}

  // O(h) time; O(h) space
  insert(word: string, parent = this.root): void {
    if (!word.length) {
      parent.end = true;
      return;
    }
    const char = word.slice(0, 1);
    let foundNode = parent.children.get(char);
    if (!foundNode) {
      foundNode = new TrieNode();
      parent.children.set(char, foundNode);
    }
    const substr = word.slice(1);
    return this.insert(substr, foundNode);
  }

  // O(h) time; O(h) space
  search(word: string): boolean {
    const foundNode = this.getNode(word);
    return Boolean(foundNode?.end);
  }

  // O(h) time; O(h) space
  startsWith(prefix: string): boolean {
    const foundNode = this.getNode(prefix);
    return Boolean(foundNode);
  }

  // O(h) time; O(h) space
  private getNode(str: string, parent = this.root): TrieNode | null {
    if (!str.length) return parent;
    const char = str.slice(0, 1);
    const foundNode = parent.children.get(char);
    if (!foundNode) return null;
    const substr = str.slice(1);
    return this.getNode(substr, foundNode);
  }
}

class Trie2 {
  private root = new TrieNode();

  constructor() {}

  // O(h) time; O(1) space
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

  // O(h) time; O(1) space
  search(word: string): boolean {
    const foundNode = this.getNode(word);
    return Boolean(foundNode?.end);
  }

  // O(h) time; O(1) space
  startsWith(prefix: string): boolean {
    const foundNode = this.getNode(prefix);
    return Boolean(foundNode);
  }

  // O(h) time; O(1) space
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

const trie = new Trie2();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True

export {};
