class TrieNode {
  public children: Map<string, TrieNode>;
  public end: boolean;
  constructor() {
    this.children = new Map<string, TrieNode>();
    this.end = false;
  }
}

export class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  // O(n) time; O(n) space;
  public insert(word: string, parent = this.root): void {
    if (!word.length) {
      if (parent === this.root) return;
      parent.end = true;
      return;
    }
    const char = word[0];
    let node = parent.children.get(char);
    if (!node) {
      node = new TrieNode();
      parent.children.set(char, node);
    }
    this.insert(word.slice(1), node);
  }

  // O(n) time; O(1) space;
  // public insert(word: string): void {
  //     let curr = this.root;
  //     for (let i = 0; i < word.length; i++) {
  //         const char = word[i];
  //         let node = curr.children.get(char);
  //         if (!node) {
  //             node = new TrieNode();
  //             curr.children.set(char, node);
  //         }
  //         curr = node;
  //     }
  //     curr.end = true;
  // }

  // O(n) time; O(1) space;
  public search(word: string): boolean {
    return Boolean(this.getNode(word)?.end);
  }

  // O(n) time; O(1) space;
  public startsWith(prefix: string): boolean {
    return Boolean(this.getNode(prefix));
  }

  private getNode(str: string, parent = this.root): TrieNode | null {
    if (!str.length) return parent;
    const char = str[0];
    const node = parent.children.get(char);
    if (!node) return null;
    return this.getNode(str.slice(1), node);
  }

  // O(n) time; O(1) space;
  // private getNode(str:string): TrieNode | null {
  //     let curr = this.root;
  //     for (let i = 0; i < str.length; i++) {
  //         const char = str[i];
  //         const node = curr.children.get(char);
  //         if (!node) return null;
  //         curr = node;
  //     }
  //     return curr;
  // }
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
