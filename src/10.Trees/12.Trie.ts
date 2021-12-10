/**
 * 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */

class TrieNode {
  children = new Map<string, TrieNode>();
  end: boolean = false;
}

class Trie {
  public root = new TrieNode();

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
      node.end = true;
      return;
    }
    this.insert(substr, node);
  }

  // O(h) - h is height of tree
  public search(word: string): boolean {
    return Boolean(this.getNode(word)?.end);
  }

  // O(h) - h is height of tree
  public startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  // O(h) - h is height of tree
  private getNode(word: string, parent = this.root): TrieNode | null {
    const char = word[0];
    const node = parent.children.get(char);
    if (!node) return null;
    const substr = word.slice(1);
    if (!substr.length) return node;
    return this.getNode(substr, node);
  }
}

class Trie2 {
  public root = new TrieNode();

  constructor() {}

  // O(h) - h is height of tree
  public insert(word: string): void {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let node = parent.children.get(char);
      if (!node) {
        node = new TrieNode();
        parent.children.set(char, node);
      }
      parent = node;
    }
    parent.end = true;
  }

  // O(h) - h is height of tree
  public search(word: string): boolean {
    let parent = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      const node = parent.children.get(char);
      if (!node) return false;
      parent = node;
    }
    return parent.end;
  }

  // O(h) - h is height of tree
  public startsWith(prefix: string): boolean {
    let parent = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      const node = parent.children.get(char);
      if (!node) return false;
      parent = node;
    }
    return Boolean(parent);
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie2();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app")); // return True

export {};
