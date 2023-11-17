"use strict";
// Write a function describeAnimal that takes an Animal as an argument and returns a string describing that animal's characteristic feature. For example, if the animal is an elephant, the function should return "An elephant weighs [weight] kg.". Include an exhaustiveness check in your function to handle potential future additions to the Animal type.
function describeAnimal(animal) {
    switch (animal.kind) {
        case "elephant":
            "An elephant weighs [weight] kg.";
            break;
        case "tiger":
            "A tiger.";
            break;
        case "peacock":
            break;
        default:
            const _exhaustiveCheck = animal;
            throw new Error("animal unknown");
    }
}
