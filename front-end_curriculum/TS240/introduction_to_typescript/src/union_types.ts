function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

// Now, let's make the code more flexible by creating a new function that can handle both operations using type unions.

// Write a function called combine that takes two parameters and can either concatenate strings or add numbers based on the types of the input parameters.

type stringOrNumber = string | number;


function concatenate(
  val1: stringOrNumber,
  val2: stringOrNumber
  ): stringOrNumber {
    if (typeof val1 === 'string' && typeof val2 === 'string') {
      return val1.concat(val2);
    } else if (typeof val1 === 'number' && typeof val2 === 'number') {
      return val1 + val2;
    } else {
      return "Values must be of the same type...";
    }
}