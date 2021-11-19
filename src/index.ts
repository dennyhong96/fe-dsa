import readline from "readline";
import { TreeDataStructure } from "./10.Trees";
import { GraphDataStructure } from "./11.Graphs";
import { RecursionAlgorithm } from "./12.Recursion";
import { SortingAlgorithm } from "./13.Sorting";

import { ArrayDataStructure } from "./6.Array";
import { HashTableDataStructure } from "./7.HashTable";
import { LinkedListDataStructure } from "./8.LinkedLists";
import { StacksQueuesDataStructure } from "./9.Stacks&Queues";

const printMenu = () => {
  const menu = `
  Data Sctructures:
  1. Array
  2. Hash Table
  3. Linked List
  4. Stack & Queue
  5. Tree
  6. Graph

  Algorithms
  7. Recursion
  8. Sorting
  `;
  console.log(menu);
};

const main = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  printMenu();
  await new Promise<void>((resolve) => {
    rl.question("Choose from the modules - \n", async (answer: string) => {
      switch (Number(answer)) {
        case 1: {
          await ArrayDataStructure();
          break;
        }
        case 2: {
          await HashTableDataStructure();
          break;
        }
        case 3: {
          await LinkedListDataStructure();
          break;
        }
        case 4: {
          await StacksQueuesDataStructure();
          break;
        }
        case 5: {
          await TreeDataStructure();
          break;
        }
        case 6: {
          await GraphDataStructure();
          break;
        }
        case 7: {
          await RecursionAlgorithm();
          break;
        }
        case 8: {
          await SortingAlgorithm();
          break;
        }
        default: {
          break;
        }
      }
      rl.close();
      resolve();
    });
  });
};
main();
