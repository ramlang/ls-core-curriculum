"use strict";
function spookyGreeting(name) {
    name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
    return `Happy Halloween ${name}`;
}
console.log(spookyGreeting([1, 2, 3]));
console.log(spookyGreeting({}));
console.log(spookyGreeting('tess'));
let spookyArray = ["trick-or-treat!", "happy halloween!", "boo!"];
let spookierArray = ["trick-or-treat!", "happy halloween!", "boo!"];
let boo = { color: 'white', quantity: 100, sound: 'hehe' };
let cuteGhost = { color: 'white', weight: 1.0 };
// Type { color: 'white', quantity: 100, sound: 'hehe' } is not assignable to Ghost
let averageGhost = { color: 'white', quantity: 100, sound: 'hehe' };
let skeleton = 'Skelly';
const spider = 'Spode';
const graveyard = { undead: 0, dead: 1, live: 3 };
graveyard.undead += 1;
// TypeScript must assume that this property can be updated and therefore it not
// infered to be the literal type of '0'.
const gothGraveyard = { undead: 0, dead: 1, live: 3 };
gothGraveyard.undead += 1;
// Cannot assign to 'undead' because it is a read-only property
const superGothGraveyard = { undead: 0, dead: 1, live: 3 };
superGothGraveyard.undead = 1;
// Type '1' is not assignable to type '0'.
// interface Bag {
//   sweet?: Array<string>;
//   sour?: Array<string>;
//   chocolate?: Array<string>;
//   favorites?: Array<string>;
// }
// function candyBag(bag: Bag): void {
//   let keys = Object.keys(bag);
// 	return keys.forEach((typeOfCandy) => {
// 		if (typeOfCandy !== 'favorites') {
//       console.log(`I got ${bag[typeOfCandy]?.length} pieces of ${typeOfCandy} candy!`);
//     } else {
//        console.log(`I got my favorite candies! An ${bag[typeOfCandy]}`);
//     }
//   });
// }
// candyBag({
//   sour: ['gummy worms', 'sour patch kids'],
//   chocolate: ['reeses', 'unreal coconut bar', 'dark chocolate'],
//   favorites: ['unreal coconut bar'],
// });
// interface A {
//   a?: string;
//   b?: number;
// }
// function myFunction(arg1: A): void {
//   let keys = Object.keys(arg1);
// 	return keys.forEach((key) => {
// 		if (key !== 'b') {
//       console.log(`${keys[key]}`);
//     } else {
//       console.log(`${keys[key]}`);
//     }
//   });
// }
