/*
// Strict Mode Gist

let obj = {
  a: 5,
  go() {
    this.a = 42;
  },
}

let doIt = obj.go;
doIt();
console.log(obj.a);

// Practice Problems: The Global Object

// Question 1

// The global object serves as the implicit execution context when strict mode is not enabled. This is either `global` or `window` in browser. When strict mode is enabled the global object is inaccessible.

// Question 2

a = 10;

console.log(window.a === a);

// This should log true since when a variable is not declared it creates a property on the global object. The global object is the implicit execution context.

// Question 3

// "use strict"
a = 10;
console.log(window.a === a);

// A ReferenceError is raised since this is not allowed in strict mode

// Question 4

function func() {
  let b = 1;
}

func();
console.log(b);

// This raises an error since `b` is not in scope even after function invocation. Variables declared with `let` are scoped at the function level.

// Question 5

function func() {
  b = 1;
}

func();
console.log(b);

// This creates a property on the global object, so the output is 1

// Question 6

// "use strict"
function func() {
  b = 1;
}

func();
console.log(b);

// This would also throw a ReferebceError since strict mode does not allow undeclared variables to be used.

// Practice Problems: Implicit and Explicit Function Execution Contexts

// Question 1

function foo() {
  return this;
}

let context = foo();
console.log(context);

// This will return window or global since the function was invoked as `foo()`

// Question 2

// In strict mode the above code snippet would log undefined because the global `this` undefiend in strict mode.

// Question 3

let obj2 = {
  foo() {
    return this;
  },
};

let context2 = obj2.foo()
console.log(context2);

// This will log obj2 since the function is being invoked when it is assigned to a variable.
// output => {foo: f}

// Quesiton 4

var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage();

// 'Hello from the global scope'
// 'Hello from the function scope'

// Quesiton 5

var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add());
console.log(c.add());

// 20
// 0
// If var was changed to let then this would result in an error or undefined being added to an integer.

// Question 6

// call and apply can be used for explicit function execution context

// Question 7

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

// added code:
bar.add.call(foo);

// 3

// Question 8

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here:
outputList.apply(fruitsObj, fruitsObj.list);

// Alternatively:
outputList.call(fruitsObj, ...fruitsObj.list);


// Question 9

// They are invoking call because arguments is not actually an array object, so the slice method needs to have a different context passed to it in order for it to work properly.

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList(...args) {
  console.log(this.title + ':');

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here
*/

// Practice Problems: Hard Binding Functions with Contexts

// Question 1

// We can use the `bind` method to permanently bind a function to a context
// Note: `bind` is a `Function` method

// Quesiton 2

// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);

// Nothing is logged to the console, because the function `foo()` hasn't been invoked yet. `bind` does not execute the function like `call` and `apply` it simply sets the context of the funciton and returns a new function.

// Question 3

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b
// }

// let bar = foo.bind(obj);

// console.log(bar());

// This will log 5

// Question 4

// let positiveMentality = {
//   message: 'JavaScript makes sense!',
// };

// let negativeMentality = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positiveMentality);

// negativeMentality.logMessage = bar; // setting the method;
// negativeMentality.logMessage();

// The output will be `JavaScript makes sense!` because `bar` which is assigned to the new funciton returned from binding `foo` to `positiveMentality` will not be changed.

// Question 5

// let obj = {
//   a: 'Amazebulous!',
// };
// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj);

// bar.call(otherObj);

// This will log `Amazebulous` because again `bind` is permanent.

// Practice Problems: Dealing with Context Loss

// Question 1

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);

// The output is "undefined undefined is a undefined" due to context loss from having the function `getDescription` passed as an argument into another funciton. The context is now the global scope or window object rather than `turk` like it should be.

// Question 2

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
//   }
// };

// function logReturnVal(func, context) {
//   let returnVal = func.call(context);
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk);

// Question 3

// getTurkDescription = turk.getDescription.bind(turk);

// Question 4

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// desired output:
// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim

// This will not produce the desired output due to the callback function including the use of `this`. This will be accessing the global object rather than the `TESgames` context.

// Functions as arguments lose their surrounding context.

// Question 5

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Question 6

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ' ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Question 7

// let TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ' ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

// Question 8

// let foo = {
//   a: 0,
//   incrementA() {
//     function increment() {
//       this.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// `foo.a` will have a value of 0. This is because a nested function also loses it's context so `increment` will not be able to access `this.a` instead it will access `a` on the global object which will give it a value of undefined.

// Question 9

// let foo = {
//   a: 0,
//   incrementA() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();

// console.log(foo.a);

// Quesiton 10

// let foo = {
//   a: 0,
//   incrementA() {
//     let func = function increment() {
//       this.a += 1;
//     }.bind(this);
    
//     func();
//     func();
//     func();
//   }
// };

// LS Solution

// let foo = {
//   a: 0,
//   incrementA() {
//     let increment = function() {
//       this.a += 1;
//     }.bind(this);

//     increment();
//     increment();
//     increment();
//   }
// }

///////////////////////////////////////////////////////////////////////////////

// 'use strict';
// var numbers = {
//   array: [3, 5, 10],
//   getNumbers() {
//     return this.array;
//   },
// };

// var boundGetNumbers = numbers.getNumbers.bind(numbers);
// console.log(boundGetNumbers());
// var simpleGetNumbers = numbers.getNumbers;
// console.log(simpleGetNumbers());

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: What is this? (1)

// Question 1

// function whatIsMyContext() {
//   return this;
// }

// `this` currently this does not point to anything since the function isn't being invoked yet.

// Question 2

// function whatIsMyContext() {
//   return this;
// }

// whatIsMyContext();

// `this` is pointing to the global object or window object since this is a function invocation.

// * function is being called with the global context
// * in strict mode the global context has the value undefined.

// Question 3

// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();

// `baz()` is invoked with the global context so `this` points to the global object or window object.

// Question 4

// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };

// obj.method();

// The context of the method call `method()` is the object itself, in this case `obj` is the context. So `this` points to `obj`.

// Question 5

// function foo() {
//   console.log(this.a);
// }

// let a = 2;
// foo();

// This raises an error since the function is being invoked with a global context and is in strict mode. This means that `this` points to the global object or window which in strict mode is `undefined`. When `a` is declared after the function, it's declared as a variable and not as a property on the global object, and even when the function is invoked, it is trying to access a property `a` on `undefined` which results in an error.

// Question 6

// let a = 1;
// function bar() {
//   console.log(this.a);
// }

// let obj = {
//   a: 2,
//   foo: bar,
// };

// obj.foo();

// This should log 2. Once the function `bar` is assigned to be the value of `foo` and is invoked as a method on object `obj` then the context is now `obj`. This means that `this.a` now refers to the property `a` on the objects `obj` which is  2.

// * the execution context for any method invoked without an explicit context provided is the calling object.

// Question 7

// let foo = {
//   a: 1,
//   bar() {
//     console.log(this.baz());
//   },

//   baz() {
//     return this;
//   },
// };

// foo.bar();
// let qux = foo.bar;
// qux();

// `Object {a: 1, bar: f,  baz: f}`
// Uncaught TypeError: this.baz is not a function

// The context of `foo.bar()` is still `foo` so the method executes and `this.baz()` is executed. Since the context is `foo` and `baz()` is returning `this` then the object `foo` itself will be returned and logged to the console.

// `qux()` calls `bar` as a function in the global context and since `baz()` hasn't been defined JavaScript raises an error (since we are trying to invoke a method, not just access a property).

// Practice Problems: What is this? (2)

// Question 1

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// myObject.myChildObject.myMethod();

// `this` points to...
// points to `myChildObject` which doesn't contain a property `count`.

// This method returns...
// Since this object doesn't contain the property count then the method will return `undefined`.

// Question 2

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// myObject.myChildObject.myMethod.call(myObject); // 1

// I used call to add explicit invocation context to the function `myMethod`.

// Question 3

// let person = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName +
//                 ' is the Amazing Spiderman!');
//   },
// };

// let whoIsSpiderman = person.fullName.bind(person);
// whoIsSpiderman();

// This logs to the console...
// `Peter Parker is the Amazing Spiderman!`


// Question 4

// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     function specialDiscount() {
//       if (this.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// console.log(computer.total());

// This would log 35000 because `specialDiscount` doesn't have the same context as `total` which means that it would evaluate to the `else` statement and return `0` so there would be no discount. The other parts of the function would evaluate fine.

// To fix this I would change the following:
// return this.price + this.shipping + tax - specialDiscount.call(computer);

// * can use variable
// let self = this;

// * can use permanent bind
// .bind(this);

// * can use arrow function

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: Higher-Order Functions

// Question 1

// A higher-order function is a function that can accept a function as an argument or can return a function as a return value or does both.

// Question 2

// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// numbers.filter(checkEven); // [2, 4]

// `filter` is a higher-order function because it accepts the function `checkEven` as an argument. The `checkEven` function doesn't accept or return a function.

// Question 3

// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(elem) {
//     return elem % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]

// Question 4

// function execute(func, operand) {
//   return func(operand);
// }

// console.log(execute(function(number) {
//   return number * 2;
// }, 10)); // 20

// console.log(execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy')); // "HEY THERE BUDDY"

// Question 5

function makeListTransformer(func) {
  return function(array) {
    return array.map(func);
  };
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]