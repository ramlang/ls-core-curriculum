// JavaScript OOP - Ryan Schaul (Youtube)
// https://youtu.be/-N9tBvlO9Bo

// Example 1
// ----------------------------------------------------------------------------

const obj = {
  cuttlefish: "I kinda of look like a squid >o<",
}

function p(input) {
  console.log(input);
}

// p(typeof obj === 'object');             // true
// p(typeof obj === 'function');           // false

// p(obj.hasOwnProperty('cuttlefish'));   // true
// p(obj.hasOwnProperty('squid'));        // false

// p(typeof Object);                      // 'function'

// p(Object.getPrototypeOf(obj) === Object.prototype); // true

// p(obj.constructor === Object);         // true
// p(obj.prototype);                      // undefined


// Example 2
// ----------------------------------------------------------------------------

const booty = function() {};
// booty.call()

// p(Object.getPrototypeOf(booty) === Function.prototype); // true
// p(booty.constructor === Function);                      // true

// Example 3
// ----------------------------------------------------------------------------

const arr = ['suba', 'uwu'];
// p(arr.join(''));                                  // 'subauwu'

// p(Object.getPrototypeOf(arr) === Array.prototype) // true
// p(arr.constructor === Array)                      // true
// p(typeof arr)                                     // 'object'
// p(arr[0])                                         // 'suba'
// p(arr[1])                                         // 'uwu'
// p(arr.prototype)                                  // undefined

// Example 4
// ----------------------------------------------------------------------------

const msg = ['f', 'u'];
// p(msg.hasOwnProperty(0));                                        // true

// p(Object.getPrototypeOf(msg) === Array.prototype)                // true
// p(msg.constructor === Array);                                    // true
// p(Object.getPrototypeOf(Array.prototype) === Object.prototype);  // true
// p(Object.getPrototypeOf(Object.prototype));                      // null
// p(msg.fuck);                                                     // undefined
// p(msg.fuck());                                                   // error

// p(Array.from(arguments));                                        //
// p(Array.hasOwnProperty('from'));                                   // true

// p(typeof Array);                                                 // 'function'
// p(typeof Function);                                              // 'function'
// p(typeof Object);                                                // 'function'
// p(Object.getPrototypeOf(Array) === Function.prototype)           // true
// p(Array.constructor === Function);                               // true

// p(Object.getPrototypeOf(Function) === Function.prototype);       // true
// p(Function.constructor === Function);                            // true

// p(Object.getPrototypeOf(Object) === Function.prototype);         // true
// p(Object.constructor === Function);                              // true

// Example 5
// ----------------------------------------------------------------------------

// const disposalFunctions = {
//   trash: function(item) {
//     this.trashed.push(item);
//     p('Item has been trashed!');
//   },
//   recycle: function(item) {
//     this.recycled.push(item);
//     p('Item has been recycled!');
//   },
// }

// function disposalInitializer() {
//   const newDisposal = Object.create(disposalFunctions);

//   newDisposal.trashed = [];
//   newDisposal.recycled = [];
//   return newDisposal;
// }

// const garbageSorter = disposalInitializer();

// p(garbageSorter.constructor === Object);                         // true
// p(Object.getPrototypeOf(garbageSorter) === disposalFunctions);   // true

// p(disposalFunctions.constructor === Object);                     // true
// p(Object.getPrototypeOf(disposalFunctions) === Object.prototype) // true

// Example 6
// ----------------------------------------------------------------------------

// function GarbageInitializer() {
//   this.trashed = [];
//   this.recycled = [];
// }

// GarbageInitializer.prototype.trash = function(item) {
//   this.trashed.push(item);
//   p('Item has been trashed!');
// };

// const garbageSorter = new GarbageInitializer();

// p(Object.getPrototypeOf(garbageSorter) === GarbageInitializer.prototype)// true
// p(Object.getPrototypeOf(garbageSorter) === GarbageInitializer);         // false
// p(garbageSorter.constructor === GarbageInitializer);                    // true

// p(Object.getPrototypeOf(GarbageInitializer.prototype) === Object.prototype)
// true

// Example 7
// ----------------------------------------------------------------------------
/*
function GarbageCreator() {
  this.trashable = [];
  this.recyclable = [];
}

GarbageCreator.prototype.trash = function(item) {
  this.trashable.push(item);
  p(item + ' has been trashed!');
};

GarbageCreator.prototype.recycle = function(item) {
  this.recyclable.push(item);
  p(item + ' has been recycled!');
}; 

GarbageCreator.prototype.emptyTrash = function() {
  this.trashable = [];
  p('Trash has been emptied.');
}

function EcoGarbageCreator() {
  GarbageCreator.call(this);
  this.compostable = [];
  this.donatable = [];
}
const gc = GarbageCreator;
const egc = EcoGarbageCreator;

p(Object.getPrototypeOf(egc.prototype) === Object.prototype);  // true
p(Object.getPrototypeOf(egc.prototype) === gc.prototype);      // false

egc.prototype = Object.create(gc.prototype);
egc.prototype.constructor = egc;

p(Object.getPrototypeOf(egc.prototype) === Object.prototype);  // false
p(Object.getPrototypeOf(egc.prototype) === gc.prototype);      // true

p(egc.prototype === gc.prototype);                             // false
// DO NOT WANT TO => egc.prototype = gc.prototype;

// BAD PERFORMANCE WISE => Object.getPrototypeOf(egc.prototype) = gc.prototype;

egc.prototype.donate = function(item) {
  this.donatable.push(item);
  p(item + ' will be donated!');
}; 

egc.prototype.compost = function(item) {
  this.compostable.push(item);
  p(item + ' has been composted!');
}; 

egc.prototype.donationDropOff = function(item) {
  this.donatable = [];
  p('Donatable items have been donated.');
}; 

const regularTrash = new GarbageCreator();
p(Object.getPrototypeOf(regularTrash) === GarbageCreator.prototype);   // true

regularTrash.recycle('water bottle');
regularTrash.recycle('cardboard');

regularTrash.trash('plasic bag');
regularTrash.trash('takeout box');
regularTrash.trash('paper');
p(regularTrash.trashable);
regularTrash.emptyTrash();
p(regularTrash.trashable);

// regularTrash.donate() // TypeError

const hippieTrash = new EcoGarbageCreator();
p(Object.getPrototypeOf(hippieTrash) === EcoGarbageCreator.prototype); // true

hippieTrash.compost('banana peel');
hippieTrash.compost('coffee grounds');

hippieTrash.donate('old clothes');
hippieTrash.donate('bike');
hippieTrash.donate('worn couch');
p(hippieTrash.donatable);
hippieTrash.donationDropOff();
p(hippieTrash.donatable);
*/
