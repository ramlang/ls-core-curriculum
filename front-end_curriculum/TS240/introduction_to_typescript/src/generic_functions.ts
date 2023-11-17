function identity<T>(arg: T): T {
  return arg;
}

// Please write a TypeScript function called pair similar to the identity function above, it should accept two parameters of the same type and returns an array of that type.

// Here's how pair behaves.

function pair<T>(arg1: T, arg2: T): T[] {
  return [arg1, arg2];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]