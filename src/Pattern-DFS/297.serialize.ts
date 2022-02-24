import { TreeNode } from "../10.Trees/BinarySearchTree";

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
  // pre-order dfs
  const values: string[] = [];
  const dfs = (root: TreeNode | null) => {
    if (!root) {
      values.push("null");
      return;
    }
    values.push(`${root.val}`);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return values.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
  // pre-order dfs
  const values = data.split(",");
  let index = 0;
  const dfs = () => {
    if (values[index] === "null") {
      index++;
      return null;
    }
    const node = new TreeNode(Number(values[index]));
    index++;
    node.left = dfs();
    node.right = dfs();
    return node;
  };
  return dfs();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
