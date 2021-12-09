/**
 * 211. Design Add and Search Words Data Structure
 * https://leetcode.com/problems/design-add-and-search-words-data-structure/
 */

// Use a prefix tree (trie)
class WordDictionary {
  root = new WordDictionaryNode();

  constructor() {}

  // O(h) - h is height of tree
  addWord(word: string, parent = this.root): void {
    const char = word[0];
    let node = parent.children[char];
    if (!node) {
      node = new WordDictionaryNode();
      parent.children[char] = node;
    }
    const substr = word.slice(1);
    if (!substr.length) {
      node.endOfWord = true;
      return;
    } else {
      return this.addWord(substr, node);
    }
  }

  // O(h * l) - h is height of tree, l is word length
  search(word: string): boolean {
    const dfs = (startIndex: number, node: WordDictionaryNode) => {
      let curr = node;
      for (let i = startIndex; i < word.length; i++) {
        const char = word[i];
        if (char === ".") {
          for (const childNode of Object.values(curr.children)) {
            if (dfs(i + 1, childNode!)) return true;
          }
          return false;
        } else {
          if (!curr.children[char]) return false;
          curr = curr.children[char]!;
        }
      }
      return curr.endOfWord;
    };
    return dfs(0, this.root);
  }
}

class WordDictionaryNode {
  children: Record<string, WordDictionaryNode | undefined> = {};
  endOfWord = false;
}
