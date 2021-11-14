import { MyArray } from "./MyArray";
import { reverse } from "./reverse";
import { mergeSortedArrays } from "./mergeSortedArrays";

import { twoSum } from "./twoSum";
import { moveZeroes } from "./moveZeroes";
import { containsDuplicate } from "./containsDuplicate";
import { rotate } from "./rotate";
import { maxSubArray } from "./maxSubArray";

export async function ArrayDataStructure() {
  const myArray = new MyArray<string>();
  myArray.push("Denny");
  myArray.push("Sharon");
  console.log(myArray);
  console.log(myArray.remove(0));
  console.log(myArray);

  console.log(reverse("Hi my name is Denny"));
  console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
  console.log(twoSum([2, 7, 11, 15], 9));
  const arr = [0, 1, 0, 3, 12];
  moveZeroes(arr);
  console.log(arr);
  console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
  rotate(arr, 15);
  console.log(arr);
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}
