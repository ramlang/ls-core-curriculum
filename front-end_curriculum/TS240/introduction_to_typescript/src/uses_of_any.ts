function processInput(input: any) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (Array.isArray(input)) {
    console.log(input.length);
  } else if (typeof input === "number") {
    console.log(input.toFixed(2));
  } else {
    console.log("unknown")
  }
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3

function processInput(input: any) {
  console.log(input.toUpperCase());
  console.log(input.toFixed(2));
  console.log(input.length);
}