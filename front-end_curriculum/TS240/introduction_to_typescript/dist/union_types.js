"use strict";
function concatenateStrings(a, b) {
    return a + b;
}
function addNumbers(a, b) {
    return a + b;
}
const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);
function concatenate(val1, val2) {
    if (typeof val1 === 'string' && typeof val2 === 'string') {
        return val1.concat(val2);
    }
    else if (typeof val1 === 'number' && typeof val2 === 'number') {
        return val1 + val2;
    }
    else {
        return "Values must be of the same type...";
    }
}
