import { TreeNode } from "../10.Trees/BinarySearchTree";

export function isValidBST(root: TreeNode | null): boolean {
  const validate = (
    node: TreeNode | null,
    min = -Infinity,
    max = Infinity
  ): boolean => {
    if (!node) return true;
    if (node.value <= min) return false;
    if (node.value >= max) return false;
    return (
      validate(node.left, min, node.value) &&
      validate(node.right, node.value, max)
    );
  };
  return validate(root);
}
