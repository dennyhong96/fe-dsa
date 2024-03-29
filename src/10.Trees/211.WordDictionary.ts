/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

// Use a prefix tree (trie)

class WordDictionaryNode {
  public children: Map<string, WordDictionaryNode>;
  public end: boolean;
  constructor() {
    this.children = new Map<string, WordDictionaryNode>();
    this.end = false;
  }
}

class WordDictionary {
  public root: WordDictionaryNode;

  constructor() {
    this.root = new WordDictionaryNode();
  }

  // Iterative - O(n) time; O(1) space;
  // public addWord(word: string): void {
  //   let parent = this.root;
  //   for (let i = 0; i < word.length; i++) {
  //     const char = word[i];
  //     let node = parent.children.get(char);
  //     if (!node) {
  //       node = new WordDictionaryNode();
  //       parent.children.set(char, node);
  //     }
  //     parent = node;
  //   }
  //   parent.end = true;
  // }

  // Recursive - O(n) time; O(h) space
  public addWord(word: string, index = 0, parent = this.root): void {
    if (index >= word.length) {
      parent.end = true;
      return;
    }
    const char = word[index];
    let node = parent.children.get(char);
    if (!node) {
      node = new WordDictionaryNode();
      parent.children.set(char, node);
    }
    return this.addWord(word, index + 1, node);
  }

  // Iterative - O(n) time; O(h) space;
  // search(word: string, startIndex = 0, root = this.root): boolean {
  //   let parent = root;
  //   for (let i = startIndex; i < word.length; i++) {
  //     const char = word[i];
  //     if (char === ".") {
  //       for (const [_, node] of parent.children) {
  //         if (this.search(word, i + 1, node)) {
  //           return true;
  //         }
  //       }
  //       return false;
  //     } else {
  //       const node = parent.children.get(char);
  //       if (!node) return false;
  //       parent = node;
  //     }
  //   }
  //   return parent.end;
  // }

  // Recursive - O(m) time; O(n) space; m is total number of nodes, n is word length
  // Use index instead of slicing the words to reduce memory usage
  search(word: string, index = 0, parent = this.root): boolean {
    if (index === word.length) return parent.end; // base case
    const char = word[index];
    if (char === ".") {
      for (const [_, child] of parent.children) {
        if (this.search(word, index + 1, child)) {
          return true; // if we found a result for any child, we have a result
        }
      }
      return false;
    } else {
      const node = parent.children.get(char);
      if (!node) return false;
      return this.search(word, index + 1, node);
    }
  }
}

function printNode(rootNode: WordDictionaryNode, prefix = "") {
  if (!rootNode.children.size) return;
  rootNode.children.forEach((val, key) => {
    console.log(prefix + key, val.end);
    printNode(val, prefix + "  ");
  });
}

// Example
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
printNode(wordDictionary.root);
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True

export {};
