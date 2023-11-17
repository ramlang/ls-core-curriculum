"use strict";
// Please convert this code to TypeScript using interfaces and interface extension. Assume all animals have a name and can makeSound, and dogs in addition can fetch.
const myDog = {
    name: "Rex",
    makeSound: () => "Generic animal sound",
    fetch: () => "Rex fetches a stick.",
};
console.log(myDog.fetch());
