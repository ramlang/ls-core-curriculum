// never, undefined, null CAN BE ASSIGNED TO A VARIABLE OF ALL TYPES;

// all types can be assigned to a variable of type unknown.

// N.U.N for all
// all for unknown

//  ALL      <<for<<   N.U.N.
// ALL       <<for<<   never
// ALL       <<for<<   undefined
// ALL       <<for<<   null
// unknown   <<for<<   ALL



function spookyGreeting(name: string): string {
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return `Happy Halloween ${name}`;
}

console.log(spookyGreeting([1, 2, 3]));
console.log(spookyGreeting({}));
console.log(spookyGreeting('tess'));

let spookyArray: string[] = ["trick-or-treat!", "happy halloween!", "boo!"]
let spookierArray: Array<string> = ["trick-or-treat!", "happy halloween!", "boo!"]

type Ghost = {
  color: string;
  quantity: number;
}

type Ghost = {
  sound: string,
}

let boo: Ghost = { color: 'white', quantity: 100, sound: 'hehe' };


interface Pumpkin {
  color: string;
  weight: number;
}

interface Pumpkin {
  carving: string;
}

let cuteGhost: Pumpkin = { color: 'white', weight: 1.0 };
// Type { color: 'white', quantity: 100, sound: 'hehe' } is not assignable to Ghost
let averageGhost: Ghost = { color: 'white', quantity: 100, sound: 'hehe' };


type UnrealCoconutBars = {
	brand: 'Unreal';
  name: 'Coconut Bars';
	ingredients: string[];
	weight: number;
}

let skeleton = 'Skelly';
const spider = 'Spode';

const graveyard = { undead: 0, dead: 1, live: 3 };
graveyard.undead += 1;
// TypeScript must assume that this property can be updated and therefore it not
// infered to be the literal type of '0'.

const gothGraveyard = { undead: 0, dead: 1, live: 3 } as const;
gothGraveyard.undead += 1;
// Cannot assign to 'undead' because it is a read-only property


const superGothGraveyard = { undead: 0 as 0, dead: 1 as 1, live: 3 as 3 };
superGothGraveyard.undead = 1;
// Type '1' is not assignable to type '0'.

let x: undefined;
x = 1;

function trickOrTreat({ trick, treat }: { trick: false, treat: true }) {
	if (trick) {
		console.log('Boo!');
  } else if (treat) {
		console.log('Take all my candy!');
  } else {
		console.log("Doesn't answer the door...");
  }
}

type Skeleton = { hp: number; mp: number; items: string[] };
type Undead = { hp: number };

// Due to structural typing an object of type `Skeleton` can be assigned to 
// a variable of type `Undead`. In this case `Skeleton` has all the proerties
// `Undead` does and an additional property of `items`.
const skelly: Skeleton = { hp: 100, mp: 50, items: ['5 gold', 'bone', 'fancy hat'] };
const monster: Undead = skelly;

// Here we create an undead monster. Later we decide it's also a skeleton,
// however it's not assignable to the Skeleton type since it only has on of
// the three required properties. This means we are unable to safely type our
// `skellyMage`.
const undeadMonster: Undead = { hp: 500 };
const skellyMage: Skeleton = undeadMonster;

// Here we try to access the `items` property on our monster we created that
// references a `skelly` object type. This is actually impossible though since
// we assigned `skelly` to a variable of type `Undead`. `skelly` had all the
// required properties, but that means none of the other unrequired properties
// remain left on the object. We are unable to access `mp` or `items` on the
// monster object.
console.log(monster.items);


type Animal = { color: string; legs: number };
type Table = { color: string; legs: number };

const bear: Animal = { color: "brown", legs: 4 };
const diningTable: Table = bear;


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

function isHalloween(date: Date): string | boolean;
function isHalloween(date: undefined): string | boolean;
function isHalloween(date: Date | undefined): string | boolean {
  date = date ?? new Date();

  if (date.getMonth() === 9 && date.getDay() === 31) {
    return 'It does appear to be Halloween on this day...'
  } else {
    return false;
  }
}
/*
================== Question about TypeScript for Rachele =======================

                            *~**~**~* SOLVED *~**~**~*
Q: In this example (lines 106 - 127), which type is 'wider'? Is Person wider than Employee? or is it the opposite?

A: Person is WIDER since it has FEWER properties
   Employee is NARROWER since it has MORE specific properties


================== Question about TypeScript for Tess ==========================

                            *~**~**~* SOLVED *~**~**~*
Q: Why can optional parameter be assigned to undefined when I specify it must be of a number type? (lines 73 - 80)

A: CoderPad shows different type than VS Code. In VS Code optional paremters are shown as "type | undefined" whereas in CoderPad they show up at "type" only.

Tess: It seems that when strictNullChecks is off in the TS Config, we can assign null/undefined to any type, optional or not:


// strictNullCheck is ...     |    off    |      on
let age: number = undefined; // no error  |  cannot be assigned
let aName: string = null;    // no error  |  cannot be assigned



also, it seems like optional parameters are ok to be assigned undefined regardless of strictNullChecks on/off,
if you were to make age not optional, it would raise an error. which, makes sense, if it's optional, TS knows it could potentially be undefined (left out).

                            *~**~**~* SOLVED *~**~**~*
Q: Function overlords: did we already clarify that the top functions are the overload functions and the bottom funciton is just implementation (private not actually used for calls to the funciton itself)? Or did we talk about something else lol

A: TypeScirpt only enforces type checks for implementation funciton; doesn't do anything with overlords.

Tess: I'm not sure if we talked about it but that seems right XD I think we talked about how the overlords don't really make sure that a given input and output don't actually need to match the signature.

  Like if we had an implementation that could take either a string or a number and return either a string or a number, but two overloads, one that says if the input is a string, the output should be a string, and another that says if the input is a number, the output should be a number, if our implementation outputs a number even if the input is a string, typescript won't complain about it. 

================================================================================
*/

/*
                            *~**~**~* NEW *~**~**~*
Q: Why can I assign names to string and then it's value be immediately undefined? Did I already ask you this? I think maybe about optional parameters...Does it have to do with TDZ or TypeScript just being weird...?

*/
function spookyGreeter<T>(value: T): string {
  let names: string;             // <= How can this be undefined?

  if (Array.isArray(value)) {
    names = value.join(' and ');
  } else if (value) {
    names = value.toString();
  } else {
    names = "voidymort"
  }

  return `Happy Halloween ${names}! uwu`;
}

console.log(spookyGreeter<string[]>(["ghostboi", "skeletoni"]));
console.log(spookyGreeter(''));

function spookierGenerator<T>(value: T[]): T[] {
  value.forEach(elem => {
    console.log('There is an extra spooky ' + elem + ' lurking...');
  })

  return value;
}

spookierGenerator(['ghostboi', 'skeletoni', 'voidymort']);
spookierGenerator([1, 2, 3, 4]);

// Generic objects...?

interface Overlord<T, K> {
  readonly title: string;
  hp: T;
  mp: K;
}

const skeletonOverlord: Overlord<number, null> = {
  title: "Mr. Skeleton Overlord",
  hp: 1_000_000,
  mp: null,
}

// BASICALLY WHAT TESS WAS TRYING TO TELL ME EARLIER
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

// However, when using the strictNullChecks flag, null and undefined are only assignable to unknown, any and their respective types (the one exception being that undefined is also assignable to void). This helps avoid many common errors. In cases where you want to pass in either a string or null or undefined, you can use the union type string | null | undefined.

// TYPE => (CAN BE ASSIGNED TO) => OTHER TYPE(S)
// null                         => any type (not that 'any')
// undefined                    => any type (not that 'any')
// never                        => any type (not that 'any')
// (strictNullChecks) null      => ONLY unknown, null, undefined
// (strictNullChecks) undefined => ONLY unknown, null, undefined, voidymort

interface Avatar {
  skin?: string;
  hair?: string;
  eyes?: string;
  clothes?: string[];
  special?: string;
}

interface GhostBoi extends Avatar {
  color: string;
}

function isGhostBoi(character: Avatar): character is GhostBoi {
  return character.special === 'ghost';
}

const ghost: GhostBoi = {special: 'ghost', color: 'white'};
console.log(isGhostBoi(ghost));


// TYPE => (CAN BE ASSIGNED TO) => OTHER TYPE(S)
// other types                  => unknown
// null                         => any type (not that 'any')
// undefined                    => any type (not that 'any')
// never                        => any type (not that 'any')
// unknown                      => N/A
// void                         => N/A
// object                       => non-primitive type
// (strictNullChecks) null      => ONLY unknown, null
// (strictNullChecks) undefined => ONLY unknown, undefined, voidymort


interface Skeleton {
  giveCandy:() => string;
}

// ========================= MOCK INTERVIEW ===============================

// What is TypeScript? Why is it useful? Can you provide an example of what TypeScript looks like?

// Do TypeScript errors have any impact on runtime? Why is that?

// Give some examples of primitives types in TypeScript. What are some primitive types unique to TypeScript that aren't present in JavaScript?

// How can you type more complex structures like objects or arrays? What do you have to be careful of when working with thesse structures?

// Can you show am example of how we are able to apply TypeScript's structural typing?

// Fix the following code so that the `method` property is typed to the literal value 'GET' instead of type `string`...

const fetchURL = {
  url: 'https://app.gather.town/app',
  method: 'GET',
  body: '',
};

// Can you demonstrate how to use class syntax in TypeScript?

// What is the difference between `any`, `unknown`, and `never`?

// TypeScript can infer many of our types for us, however there are times when TypeScript can't infer values. When is this the case?

// Examine the following code snippet and explain how you might resolve the problem

type Cat = { color: string; weight: number };
type Pumpkin = { color: string; weight: number };

const kitty: Cat = { color: "black", weight: 10 };
const pumpkin: Pumpkin = kitty;

// What is the difference between interfaces and type aliases? When would you use one over the other?

// What is type assertion? Can you give an example using type assertion?

// How can you performing narrowing?

// Fix the following code...

interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: string;
}

// What are some examples of utility types that we can use in TypeScript? Can you show an example of one?

// Explain the following code...

function first<T>(arr: T[]): T {
  return arr[0];
}

let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d"];
let firstNum = first<number>(numArray);
let firstStr = first<string>(strArray);

// What are the ways you can extend custome types? Are there any limitations?

let test: null | string = "string";
console.log(test!.toLowerCase());

interface Ghost {
  name: string;
}

interface Ghoul {
  type: number;
}

type Monsters = Ghost & Ghoul;


/* =================== TYPESCRIPT QUESTIONS ===================== */

// 1. What is a dynamically typed language? Give examples…

// 2. What is a statically typed language? Give examples…

// 3. Give an example of how TypeScript can help catch errors at compile time instead of runtime?

function getSpider(): string {
  return 'I am a spider uwu';
}

let spider: string = getSpider();
spider.toUpperCase();

// 4. Why can’t JavaScript runtime errors be caught until the code is actually executed?

// 5. What other errors can TypeScript help catch?

// 6. Why is type safety important?

// 7. Why is TypeScript becoming popular?

// 8. What are some downsides to using TypeScript?

// 9. When is JavaScript more preferable to TypeScript?

// 10. What is the most common way that TypeScript is installed?

// 11. Why does TypeScript need a compiler?

// 12. What is down leveling?

// 13. What do we mean when we say TypeScript is a superset of JavaScript?

// 14. What are the benefits to TypeScript being a superset of JavaScript?

// 15. What occurs when we run the compiler against a ts file?

// 16. What happens when a value is of type `any`?

// 17. What happens if you don’t specify a type and TypeScript can’t infer a type?

// 18. What is contextual typing?

// 19. How can you specify some or all of the properties are optional?

// 20. What is a union type?

// 21. What is a type alias?

// 22. What is an interface declaration?

// 23. What are the differences between type aliases and interface declarations?

// 24. What are type assertions?

// 25. What are literal types?

// 26. What affects how types are inferred by TypeScript?

// 27. What is one problem with literal inference?

const num = "1";
const spider2 = {name: "spode"} as const;
const spider3 = {name: "spode" as "spode"};

// 28. What should you do if you have `strictNullChecks` turned on?

const a: null = null;
// const b: undefined = a;

// 29. What is the special syntax to remove `null` or `undefined` from a type without explicitly checking?

// 30. Why doesn’t TypeScript raise a warning when we try to access an out of bounds index on an array?

// 31. To work around TypeScript not raising an error, what are some tactics you can use so that TypeScript will raise an error if an index is out of bounds?

// 32. What is the difference between a tuple and an array?

// 33. How can you replace an element in a tuple?

// 34. Why won’t TypeScript raise an error even if we attempt to add an element of an acceptable type to a tuple?

// 35. What does tuple syntax look like?

let creatures: [string, string, boolean] = [
  "spider",
  "ghost",
  false,
]

// 36. What is `void`?

// 37. Can values with type `void` be assigned to another type?

// 38. What is the purpose of `void`?

// 39. What built-in method is typed to return `void`?

// 40. When is TypeScript not reliable at inferring?

// 41. What do object types define in TypeScript?

// 42. What do we mean when we say “shape of an object”?

// 43. What should you do if you are using a one time object or maybe decide it’s not worth defining an entire type?

// 44. What is a literal object type?

// 45. How can you destructure objects passed as function parameters?

function spookyStories({story, author}: {story: "owo", author: "mr.obama"}) {
  return `${story} by ${author}`;
}

function spookyStories2(book: {story: "owo", author: "mr.obama"}) {
  return `${book.story} by ${book.author}`;
}
// 46. What do we mean when we say TypeScript uses a structural typing system?

// 47. What is an important detail about TypeScript’s structural typing rules?

// 48. Explain the following code snippet…

type Skeleton = { hp: number; mp: number; items: string[] };
type Undead = { hp: number };

const skelly: Skeleton = { hp: 100, mp: 50, items: ['5 gold', 'bone', 'fancy hat'] };
const monster: Undead = skelly;

const undeadMonster: Undead = { hp: 500 };
// const skellyMage: Skeleton = undeadMonster;

// console.log(monster.items);

// 49. What is the exception to the rule that a type with more properties can be assigned to a type with fewer properties?

// 50. How can structural typing lead to problems within TypeScript? Give an example…

// 51. What are `readonly` properties?

// 52. What is the syntax to define a `readonly` property?

// 53. What are some real life applications of `readonly` properties?

// 54. What happens when an object is assigned to a `readonly` property?

// 55. What are solutions to being able to modify `readonly` properties that point to objects?

// 56. What is a `ReadonlyArray`?

// 57. How do array type and `ReadonlyArray` type interact?

// 58. When should you use type assertions?

// 59. To use class syntax in TypeScript what should you do with instance properties?

// 60. What must be done to the constructor method?

// 61. How should instance methods be altered within a class?

// 62. What is `implements` and how can it be used?

// 63. What should be noted about overriding class methods and properties in TypeScript?

// 64. What are the two ways to implement private properties or methods?

// 65. What is the problem with this code?

class Person {
  age?: number;
  name: string;
  
  // constructor(age?: number, name: string) {
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

// 66. What is assignability?

// 67. What is an example of a wide type? What is an example of a narrow type?

// 68. What are type guards?

// 69. What are some real world examples of using union types?

// 70. What should be noted about the properties on two objects that are part of a union?

// 71. What type of type guard can you use in this scenario?

// 72. What is function overloading?

// 73. What are the top function signatures?

// 74. What is the bottom function signature?

// 75. What should the relationship between the overload and implementation signature be?

// 76. How should the overload functions and implementation function be compatible?

// 77. How many overload functions are required?

// 78. What should you be cautious about when using function overloads?

// 79. What are generics?

// 80. What is the `<Type>` variable?

// 81. Give an example of a generic function and the two ways it can be invoked…

function determineType<T>(arg: T[]): T {
  return arg[0];
}

determineType<string>(["hello"]);
determineType(["world"]);

// 82. What does the compiler enforce within the body of a generically typed function?

// 83. What if we want our function to work on an array of types? What does this type of syntax mean?

// 84. Identify the steps the compiler follows for this code…

function first<T>(arr: T[]): T {
  return arr[0];
}

let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d"];
let firstNum = first<number>(numArray);
let firstStr = first<string>(strArray);

// 85. How do generic objects work?
interface Test<T> {
  name: T;
}

// 86. What is the array type?

// 87. What are the two types of syntax and which is more common?

// 88. What are the different narrowing constructs TypeScript recognizes?

// 89. What is a type predicate?

// 90. Why can’t you use `typeof` for narrowing all the time?

// 91. What is a discriminated union?

// 92. What is the `never` type?

// 93. What are the `never` rules?

// 94. What is the `unknown` type?

// 95. If we are going to use type assertion why don’t we just type the parameter as the expected value instead of using `unknown`?

// 96. What can you use if you know the shape of a type’s property but not the names?

// 97. What types allow for index signature properties?

// 98. Is the following code acceptable?
interface NumberDictionary {
  // [index: string]: number;
  length: number;
  name: string;
}

// 99. How could you resolve the above code?

interface NumberDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

// 100. How can you prevent assignment to an index?

// 101. What structure gets special treatment when assigned to another variable?

// 102. What is the `extends` keyword used for?

// 103. What are intersection types?

// 104. What is the difference between interfaces with`extends` and `&`?

interface Ghost {
  name: string;
}

interface Ghoul {
  type: number;
}

type Monsters = Ghost & Ghoul;

// 105. How could you update an imported type?

// 106. What does declaration merging look like?

// 107. Can you merge declarations with interfaces, types, or both?

// 108. Can interfaces extend more than one interface?

// 109. Can interfaces extend types?

// 110. What happens when you try to extend an interface with conflicting properties?

// 111. How do you resolve conflicting properties?

// 112. Can you use `extends` to extend type definitions?

// 113. How can you specify a type to have a function?

interface Zombie {
  attack: () => string;
}

// 114. What happens when you try to have conflicting properties with intersections?

// 115. What does this mean for developers?

// 116. What is the difference between what interfaces defined and what types define?

// 117. Why are type aliases considered “closed” and interfaces considered “open”?

// 118. What are the ways interfaces and type aliases can be extended?

// 119. What sort of error messages does each provide?

// 120. When an interface preferred and when is a type alias preferred?

// 121. What is the basic syntax for defining an index signature in TypeScript?

// 122. What is a `Map`?

// 123. What should be noted about using the `object` type?

// 124. What can you do when you want to define an object that can take any set of properties with any type of value?

// 125. What does the `keyof` operator do?

// 126. Give an example of using `keyof`?

interface Pirate {
  weapon: string;
  ships: number;
  money: number;
}

function pirateProps(arg: Pirate, key: keyof Pirate) {
  return arg[key];
}
// 127. What are generic constraints?

// 128. How do you use generic constraints?

// 129. What does this code snippet do?

// 130. What is using `extends` the same as?

// 131. What do you have to be careful about with the spread operator?

// 132. What is the options parameter?

// 133. What can the `??` operator be used for?

// 134. What is the more readable option for using options parameter?

// 135. Why must you use a type annotation of `any` or `unknown` for catching errors?

// 136. Instead of typing to `Error` what are the two alternatives?

// 137. What type does TypeScript provide for Promises?

// 138. What should be noted about the type a promise is technically?

// 139. What is `PromiseLike` type?

// 140. How does TypeScript provide support for the `then` method?

// 141. What are utility types?

// 142. What is the `Pick` utility type?

interface Bunny {
  longEars: boolean;
  fuzzy: boolean;
  color: string;
}

const totoro: Pick<Bunny, "longEars" | "color"> = { longEars: true, color: "grey and white" };

// 143. What is the `Omit` utility type?

const dog: Omit<Bunny, "longEars" | "fuzzy"> = { color: "grey and white" };

// 144. What does the following mean `K extends keyof T`?

// 145. What happens if you `Omit` a property that doesn’t exist?

// 146. What is `ReturnType`?

function meetTotoro(): string {
  return "Lets go meet totoro";
}

const randomString: ReturnType<typeof meetTotoro> = "hello"

// 147. What is the TypeScript of `typeof` operator?

// 148. What should be passed in to `ReturnType`?

// 149. What is `Parameters`?

// 150. How are rest parameters treated by `Parameters`?

// 151. What is the built-in utility `Partial`?

// 152. What will you have to do when working with this type?

function sppokyGreeting(name: string): string {
  return `Happy Halloween ${name}`;
}

let msg: string = sppokyGreeting("Tess");


interface Ghost2 {
  type: "ghost";
  attack: number;
  items: null;
}

interface Skeleton2 {
  type: "skeleton";
  attack: number;
  items: Array<string>;
}

interface Pirate {
  type: "pirate"
}

function detectMonster(monster: unknown): unknown {
  if (monster.type === "ghost") {
    console.log("Boo! I'm a ghost");
  } else if (monster.type === "skeleton") {
    console.log("Grr I'm a skeleton");
  } else {
    let check: never = monster;
    console.log("monster unknown");
  }

  return monster;
}



function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface UserEmails {
  [key: number]: string;
}

let obj: UserEmails = {
  1: "wefwef",
  2: "pwoekfpw",
  '4': "wonvgawr",
}

obj[1];
obj['4'];

let num: number = 3

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string;
// }