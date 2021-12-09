// Recursive
class Trie {
  root: TrieNode = new TrieNode();

  constructor() {}

  // O(h) - h is height of tree
  insert(word: string, parent = this.root): void {
    const char = word[0];
    let node = parent.children.get(char);
    if (!node) {
      node = new TrieNode(char);
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
  startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  // O(h) - h is height of tree
  search(word: string): boolean {
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
  insert(word: string): void {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!curr.children.has(char)) {
        curr.children.set(char, new TrieNode(char));
      }
      curr = curr.children.get(char)!;
    }
    curr.endOfWord = true;
  }

  // O(h) - h is height of tree
  startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  // O(h) - h is height of tree
  search(word: string): boolean {
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

class TrieNode {
  val: string | null = null;
  children = new Map<string, TrieNode>();
  endOfWord: boolean = false;
  constructor(val: string | null = null) {
    this.val = val;
  }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // return True
console.log(trie.search("app")); // return False
console.log(trie.startsWith("app"));
trie.insert("app");
console.log(trie.search("app"));
