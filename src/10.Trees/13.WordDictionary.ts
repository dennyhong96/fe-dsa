/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

// Use a prefix tree (trie)
class WordDictionaryNode {
  children = new Map<string, WordDictionaryNode>();
  end = false;
}

class WordDictionary {
  root = new WordDictionaryNode();

  constructor() {}

  // O(h) - h is height of tree
  addWord(word: string, parent = this.root): void {
    const char = word[0];
    let node = parent.children.get(char);
    if (!node) {
      node = new WordDictionaryNode();
      parent.children.set(char, node);
    }
    const substr = word.slice(1);
    if (!substr.length) {
      node.end = true;
      return;
    } else {
      return this.addWord(substr, node);
    }
  }

  // O(h * l) - h is height of tree, l is word length
  search(word: string, startIndex = 0, node = this.root): boolean {
    let parent = node;
    for (let i = startIndex; i < word.length; i++) {
      const char = word[i];
      if (char === ".") {
        for (const [, childNode] of parent.children) {
          if (this.search(word, i + 1, childNode)) return true;
        }
        return false;
      } else {
        const node = parent.children.get(char);
        if (!node) return false;
        parent = node;
      }
    }
    return parent.end;
  }
}

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True

export {};
