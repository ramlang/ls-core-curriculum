// Consider the following TypeScript function that throws an error when called with a negative argument:

function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

// In a separate function, you need to call the sqrt function inside a try block and handle any potential errors. If the sqrt function throws an error, your function should return -1.

function safeSqrt(x: number): number {
  try {
    return sqrt(x);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return -1;
    } else {
      return NaN;
    }
  }
}

// Please implement the safeSqrt function following the error handling approach in TypeScript using try/catch blocks and type guards.