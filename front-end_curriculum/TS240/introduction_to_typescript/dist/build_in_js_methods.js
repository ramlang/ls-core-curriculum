"use strict";
const numbersInStringFormat = ["10", "20", "30", "40"];
function convertToNumbers(arr) {
    return arr.map((elem) => parseInt(elem, 10));
}
console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
