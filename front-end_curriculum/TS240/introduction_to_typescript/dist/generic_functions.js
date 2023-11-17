"use strict";
function identity(arg) {
    return arg;
}
// Please write a TypeScript function called pair similar to the identity function above, it should accept two parameters of the same type and returns an array of that type.
// Here's how pair behaves.
function pair(arg1, arg2) {
    return [arg1, arg2];
}
const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
