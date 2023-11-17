"use strict";
function combine(input1, input2) {
    if (typeof input1 === "string" && typeof input2 === "string") {
        return input1.concat(input2);
    }
    else if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        throw new Error("Invalid input types: both inputs must be strings or both inputs must be numbers.");
    }
}
const concatenated = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.
const added = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
