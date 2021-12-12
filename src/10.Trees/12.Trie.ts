/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class TrieNode {
  children = new Map<string, TrieNode>();
  end: boolean = false;
}

class Trie {
  root = new TrieNode();

  constructor() {}

  // O(h) time; O(1) space
  insert(word: string, parent = this.root): void {
    if (word.length === 0) {
      parent.end = true;
      return;
    }
    const char = word[0];
    let node = parent.children.get(char);
    if (!node) {
      node = new TrieNode();
      parent.children.set(char, node);
    }
    const substr = word.slice(1);
    return this.insert(substr, node);
  }

  // O(h) time; O(1) space; h is height of tree
  search(word: string): boolean {
    const foundNode = this.findNode(word);
    return Boolean(foundNode?.end);
  }

  // O(h) time; O(1) space; h is height of tree
  startsWith(prefix: string): boolean {
    const foundNode = this.findNode(prefix);
    return Boolean(foundNode);
  }

  private findNode(word: string, parent = this.root): TrieNode | null {
    if (!word.length) return parent;
    const char = word[0];
    const node = parent.children.get(char);
    if (!node) return null;
    const substr = word.slice(1);
    return this.findNode(substr, node);
  }
}

// Iterative Trie
class Trie2 {
  root = new TrieNode();

  constructor() {}

  // O(h) time; O(1) space
  insert(word: string): void {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let node = currNode.children.get(char);
      if (!node) {
        node = new TrieNode();
        currNode.children.set(char, node);
      }
      currNode = node;
    }
    currNode.end = true;
  }

  // O(h) time; O(1) space; h is height of tree
  search(word: string): boolean {
    let currNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const node = currNode.children.get(char);
      if (!node) return false;
      currNode = node;
    }
    return currNode.end;
  }

  // O(h) time; O(1) space; h is height of tree
  startsWith(prefix: string): boolean {
    let currNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      const node = currNode.children.get(char);
      if (!node) return false;
      currNode = node;
    }
    return true;
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
