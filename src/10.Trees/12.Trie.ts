/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class TrieNode {
  children = new Map<string, TrieNode>();
  endOfWord: boolean = false;
}

// Recursive
class Trie {
  public root: TrieNode = new TrieNode();

  constructor() {}

  // O(h) - h is height of tree
  public insert(word: string, parent = this.root): void {
    const char = word[0];
    let node = parent.children.get(char);
    if (!node) {
      node = new TrieNode();
      parent.children.set(char, node);
    }
    const substr = word.slice(1);
    if (!substr.length) {
      node.endOfWord = true;
      return;
    } else {
      return this.insert(substr, node);
    }
  }

  // O(h) - h is height of tree
  public startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  // O(h) - h is height of tree
  public search(word: string): boolean {
    return Boolean(this.getNode(word)?.endOfWord);
  }

  // O(h) - h is height of tree
  private getNode(word: string, node: TrieNode = this.root): TrieNode | null {
    const char = word[0];
    const charNode = node.children.get(char);
    if (!charNode) return null;
    const substr = word.slice(1);
    if (!substr.length) return charNode;
    return this.getNode(substr, charNode);
  }
}

// Iterative
class Trie2 {
  root: TrieNode = new TrieNode();

  constructor() {}

  // O(h) - h is height of tree
  public insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode());
      }
      curr = curr.children.get(char)!;
    }
    curr.endOfWord = true;
  }

  // O(h) - h is height of tree
  public startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  // O(h) - h is height of tree
  public search(word: string): boolean {
    return Boolean(this.getNode(word)?.endOfWord);
  }

  // O(h) - h is height of tree
  private getNode(word: string): TrieNode | null {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) return null;
      curr = curr.children.get(char)!;
    }
    return curr;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
