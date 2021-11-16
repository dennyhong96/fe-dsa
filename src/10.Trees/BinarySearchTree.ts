export class BinarySearchTree {
  public root: TreeNode | null;

  constructor(rootValue?: number) {
    this.root = rootValue ? new TreeNode(rootValue) : null;
  }

  public insert(value: number): BinarySearchTree {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let node: TreeNode = this.root;
      while (true) {
        if (value < node.value) {
          if (node.left) {
            node = node.left;
          } else {
            node.left = newNode;
            return this;
          }
        } else {
          if (node.right) {
            node = node.right;
          } else {
            node.right = newNode;
            return this;
          }
        }
      }
    }
    return this;
  }

  public lookup(value: number): TreeNode | null {
    if (!this.root) return null;
    let node: TreeNode | null = this.root;
    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else {
        return node;
      }
    }
    return null;
  }

  public remove(value: number): BinarySearchTree {
    if (!this.root) return this;
    let node: TreeNode | null = this.root;
    let leadingNode: TreeNode | null = null;
    while (node) {
      if (value < node.value) {
        leadingNode = node;
        node = node.left;
      } else if (value > node.value) {
        leadingNode = node;
        node = node.right;
      } else {
        // Handle remove root
        if (!leadingNode) {
          this.root = null;
          return this;
        }

        // Handle remove leaf
        if (!node.left && !node.right) {
          if (node.value < leadingNode.value) {
            leadingNode.left = null;
          } else {
            leadingNode.right = null;
          }

          // Handle remove node with one child node
        } else if (node.left && !node.right) {
          if (node.value < leadingNode.value) {
            leadingNode.left = node.left;
            node.left = null;
          } else {
            leadingNode.right = node.left;
            node.left = null;
          }
        } else if (!node.left && node.right) {
          if (node.value < leadingNode.value) {
            leadingNode.left = node.right;
            node.right = null;
          } else {
            leadingNode.right = node.right;
            node.right = null;
          }

          // Handle remove node with two child nodes
        } else {
          // Start from right child node, find smallest in right subtree
          let subTreeNode = node.right!;
          let leadingSubTreeNode: TreeNode | null = null;
          let smallestInSubTree: TreeNode | null = null;
          while (!smallestInSubTree) {
            // The smallest if the left most node
            if (!subTreeNode.left) {
              smallestInSubTree = subTreeNode;
            } else {
              leadingSubTreeNode = subTreeNode;
              subTreeNode = subTreeNode.left;
            }
          }
          if (!leadingSubTreeNode) {
            node.right = smallestInSubTree.right;
          } else {
            leadingSubTreeNode.left = smallestInSubTree.right;
          }
          node.value = smallestInSubTree.value;
        }
        return this;
      }
    }
    return this;
  }
}

export class TreeNode {
  public value: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//          9
//    4           20
// 1    6     15    170
//                150  190
//                  160
