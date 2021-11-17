import { BinarySearchTree } from "./BinarySearchTree";

export async function TreeDataStructure() {
  const tree = new BinarySearchTree();
  tree.insert(9);
  tree.insert(4);
  tree.insert(1);
  tree.insert(6);
  tree.insert(20);
  tree.insert(15);
  tree.insert(170);
  tree.insert(150);
  tree.insert(160);
  tree.insert(190);
  console.log(JSON.stringify(tree, null, 2));

  console.log(tree.find(9));
  console.log(tree.find(4));
  console.log(tree.find(6));
  console.log(tree.find(150));
  console.log(tree.find(190));

  tree.remove(20);
  tree.remove(190);
  tree.remove(4);
  console.log(JSON.stringify(tree, null, 2));
}
