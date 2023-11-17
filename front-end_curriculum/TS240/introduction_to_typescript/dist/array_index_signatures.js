"use strict";
const customArray = ["apple", 42, "banana"];
// The CustomArray type uses an index signature, which can describe both objects and arrays. Write a function processCustomArray that takes a CustomArray as an argument and returns an array containing only the string elements, in uppercase.
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(elem => typeof elem === "string");
    }
    else {
        const keys = Object.keys(arr);
        const values = keys.map(key => arr[key]);
        return values.filter(elem => typeof elem === "string");
    }
}
