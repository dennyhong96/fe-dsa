import readline from "readline";

import { ArrayDataStructure } from "./6.Array";
import { HashTableDataStructure } from "./7.HashTable";
import { LinkedListDataStructure } from "./8.LinkedLists";

const printMenu = () => {
  const menu = `
  Data Sctructures:
  1. Array
  2. Hash Table
  3. Linked List
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
