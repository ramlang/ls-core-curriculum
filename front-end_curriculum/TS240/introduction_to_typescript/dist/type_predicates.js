"use strict";
function isCar(vehicle) {
    return "doors" in vehicle;
}
// Usage
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    type: "car",
    doors: 4,
};
if (isCar(myCar)) {
    console.log(myCar.doors);
}
// Please implement the isCar function as a type predicate (type guard) function that determines if the input argument is of type Car.
