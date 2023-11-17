"use strict";
// Write a function describeAnimal that takes an Animal object as a parameter and returns a description string. The Animal type is a discriminated union that can be either a dog or a bird.
function describeAnimal(animal) {
    if (animal.type === "bird") {
        return "name is a bird with a wingspan cm wingspan.";
    }
    else {
        return "name is a age year(s) old dog.";
    }
}
