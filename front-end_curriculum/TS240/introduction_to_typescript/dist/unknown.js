"use strict";
// Please write a function processData that takes data as a parameter. If data is a string, the function should return "Hello, " + data. If data is a number, the function should return "Age: " + data. If data is neither a string nor a number, the function should throw an error saying "Invalid data".
function processData(data) {
    if (typeof data === "string") {
        return "Hello, " + data;
    }
    else if (typeof data === "number") {
        return "Age: " + data;
    }
    else {
        throw new Error("invalid data");
    }
}
// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
