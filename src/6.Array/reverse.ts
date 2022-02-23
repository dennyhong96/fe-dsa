// A function that reverses a string:
// "Hi my name is Denny" should be:
// "ynneD si eman ym iH"

// O(n)
export function reverse(str: string) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// O(n)
export const reverse2 = (str: string) => [...str].reverse().join("");
