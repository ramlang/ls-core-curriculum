"use strict";
function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            throw new Error("Invalid operation");
    }
}
calculate("invalid", 3, 4);
