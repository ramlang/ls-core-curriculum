// Given the code examples you have seen in the assignment, which both involve using the any type, try to create a reusable type guard function called isNumber to make our code safer when working with these external code snippets.

function isNumber(value: any): value is number {
  return typeof value === "number";
}

// example 1
let x2: any = "Launch School";
const y2: number = x2;
console.log(y2);

// example 2
let x3: any = "Launch School";
const y3: number = x3 as number;

// Try to create a utility function called safeGet that allows us to access the elements in any array safely. safeGet should take two arguments: an array and the index of an element in the array. If the index is within the bounds of the array, return the element at that index, otherwise, return undefined.

function safeGet<T>(arr: Array<T>, idx: number): T | undefined {
  if(arr.length > idx) {
    return arr[idx];
  }

  return undefined;
}

const names: string[] = ["John", "Jane"];
const name = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2