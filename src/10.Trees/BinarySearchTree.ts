export class BinarySearchTree {
  public root: TreeNode | null;

  constructor(rootValue?: number) {
    this.root = rootValue ? new TreeNode(rootValue) : null;
  }

  // O(log(n))
  public insert(val: number): BinarySearchTree {
    const newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (val < currNode.val) {
        if (currNode.left) {
          currNode = currNode.left;
        } else {
          currNode.left = newNode;
          return this;
        }
      } else {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          currNode.right = newNode;
          return this;
        }
      }
    }
  }

  // O(log(n))
  public find(val: number): TreeNode | null {
    if (!this.root) return null;
    let currNode: TreeNode | null = this.root;
    while (currNode) {
      if (val === currNode.val) {
        return currNode;
      } else if (val < currNode.val) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return null;
  }

  // O(log(n))
  public remove(val: number) {
    if (!this.root) return this;
    let currNode: TreeNode | null = this.root;
    let prevNode: TreeNode | null = null;
    while (currNode) {
      if (val < currNode.val) {
        prevNode = currNode;
        currNode = currNode.left;
      } else if (val > currNode.val) {
        prevNode = currNode;
        currNode = currNode.right;
      } else {
        if (!prevNode) {
          this.root = null;
          return this;
        }
        // Handle removing leaf node
        if (!currNode.left && !currNode.right) {
          if (val < prevNode.val) {
            prevNode.left = null;
          } else {
            console.log(">>>");
            console.log(prevNode);
            prevNode.right = null;
          }
          // Handle the node to remove has one child node
        } else if (currNode.left && !currNode.right) {
          if (val < prevNode.val) {
            prevNode.left = currNode.left;
          } else {
            prevNode.right = currNode.left;
          }
          currNode.left = null;
        } else if (!currNode.left && currNode.right) {
          if (val < prevNode.val) {
            prevNode.left = currNode.right;
          } else {
            prevNode.right = currNode.right;
          }
          currNode.right = null;
        } else {
          // Handle the node to remove has two child nodes
          let subtreeCurrNode: TreeNode | null = currNode.right;
          let subtreeLeadingNode: TreeNode | null = null;
          let subtreeSmallestNode: TreeNode | null = null;
          while (!subtreeSmallestNode) {
            if (subtreeCurrNode?.left) {
              subtreeLeadingNode = subtreeCurrNode;
              subtreeCurrNode = subtreeCurrNode.left;
            } else {
              subtreeSmallestNode = subtreeCurrNode;
            }
          }
          if (!subtreeLeadingNode) {
            currNode.right = subtreeSmallestNode.right;
          } else {
            currNode.right!.left = subtreeSmallestNode.right;
          }
          console.log("subtreeSmallestNode.val", subtreeSmallestNode.val);
          currNode.val = subtreeSmallestNode.val;
          subtreeSmallestNode.right = null;
        }
        return this;
      }
    }
  }
}

export class TreeNode {
  public left: TreeNode | null;
  public right: TreeNode | null;
  public val: number;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//          9
//    4           20
// 1    6     15    170
//                150  190
//                  160
