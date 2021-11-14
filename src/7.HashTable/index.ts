import { HashTable } from "./HashTable";
import { firstRecurringNum, firstRecurringNum2 } from "./firstRecurringNum";

export async function HashTableDataStructure() {
  const hashTable = new HashTable<string, string>(50);
  hashTable.set("key1", "denny");
  hashTable.set("key2", "Sharon");
  console.log(hashTable);
  console.log(hashTable.get("key1"));
  console.log(hashTable.keys());

  console.log(firstRecurringNum([2, 5, 5, 2, 3, 5, 1, 2, 4]));
  console.log(firstRecurringNum2([2, 5, 5, 2, 3, 5, 1, 2, 4]));
}
