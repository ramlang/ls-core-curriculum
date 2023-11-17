// How Closures Affect Garbage Collectino

// Problems

// Question 1

// When can JS collect [1], [2], [1, 2]?

let a = [1]; // line 1

function add(b) {
  a = a.concat(b);
}
// line 6
function run() {
  let c = [2];
  let d = add(c);
}

run(); // line 12

// Garbage collection can occur for the following:
// - after line 4 since we are reassigning `a` to a new array we can collect the array `[1]`
// - after line 12 returns since `c` is no longer needed after the function returns
// - since `a` is a global variable the reference to `[1, 2]` doesn't go away until the program terminates so after the program is done JS can garbage collect `[1, 2]`

// Question 2

// When can JS collect the value `['Steve', 'Eddie']`?

function makeHello(names) {
    return function() {
      console.log("Hello, " + names[0] + " and " + names[1] + "!");
    };
  }
  
  let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

// Only when the program terminates since `helloSteveAndEddie` is a global variable. More specifically this occurs after the function references by `helloSteveAndEddie` is garbage collected.

///////////////////////////////////////////////////////////////////////////////

// Practice Problem: Garbage Collection

// Question 1

// Is JavaScript a garbage-collected language, and if so, what does this entail?

// Yes, JS is a garbade-collected language. This means that it will automatically allocate and deallocate memory for us once a value is no longer being referenced. Essentially it uses the mark and reach that starts at the root, then determines if a value is reachable or still in scope. If it is it won't collect it, but if it's not reachable then it will collect it

// LS Solution:
// JavaScript is a garbage-collected language. This means that the JS runtime, rather than the developer, handles memory deallocation.

// Question 2

let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code

// Are either of the values 1 or ['this is an array] eligible for garbage collection on line 5? What about on line 10?

// line 5 => nothing is eligible for garbage collection
// line 10 => `['this is an array']` will be eligible

// Question 3

function makeGreeting() {
    let foo = { greeting: 'hello' };
    return function(name) {
      foo.name = name;
      return foo;
    };
  }
  
  let greeting = makeGreeting();
  
  // is the object eligible for GC here?
  
  // more code

// Is the object created and assigned to foo on line 2 eligible for garbage collection on line 11?

// No because it's function scoped and `greeting` refers to the function that contains the variable within it's closure.

// Question 4

let bash = {};

// Eventually the object {} will be available for garbage colleciton once the program terminates or the variable gets reassigned.

///////////////////////////////////////////////////////////////////////////////

// Partial Function Application

// Problem

// Question 1

// Write a function named greet that takes two arguments and logs a greeting:

function greet(greeting, person) {
  greeting = greeting.slice(0,1).toUpperCase() + greeting.slice(1);
  console.log(greeting + ', ' + person + '!');
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!


// Question 2

// Use the partial function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}


let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');


sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: Partial Function Application

// Question 1

function subtract(a, b) {
  return a - b;
}

function makeSub() {
  // implement this function using partial function application
  return function(value) {
    return subtract(value, 5);
  }
}

const sub5 = makeSub();

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

// Question 2

function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  // implement this function using partial function application
  return function(m) {
    return subtract(m, n);
  }
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13

// Question 3

function makePartialFunc(func, b) {
  // implement this function...
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50

 // Question 4

 // In our previous solution, multiplyBy5 retains access to func and b long after makePartialFunc has finished execution. What makes this possible?

 // Closures make this possible. Since the function scope closes over it's surroudnings, these values are still accessible to the function even after the initial execution. In fact its what lets us still use the function the way we are.

 // Question 5

 let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: IIFEs

// Question 1

// function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// }();

// The following will output an error since there are no surrounding parentheses

// Question 2

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

// Question 3

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let sumOfArray = (function() {
  return function(arr) {
    return arr.reduce(function(sum, number) {
      sum += number;
      return sum;
    }, 0);
  }
})();

console.log(sum += sumOfArray(numbers));  // ?

// LS Solution

sum += (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

// Question 4

// let countdown = (function() {
//   return function(start) {
//     for (let i = start; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   }
// })();

// function countdown(count) {
//   (function(n) {
//     for (let i = n; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log('Done!');
//   })(count);
// }

// function countdown(count) {
//   (function(n) {
//     for (let i = n; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log('Done!');
//   })(count);
// }

// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!

// Question 5

(function foo() {
  console.log('Bar');
})();

foo() // ?

// No the function is not available in the global scope.

// Question 6


function countdown(count) {
  (function countdownToZero(n) {
    if (n === 0) {
      console.log(0);
      console.log('Done!');
      return;
    }

    console.log(n);
    countdownToZero(n - 1);
  })(count);
}

countdown(7);

///////////////////////////////////////////////////////////////////////////////

// Function Context, Scope, and Closure

// Exercise 1

// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// NaN

// `this` outside a function references the global object which means we are looking at `window.firstName` and `window.lastName` so `undefined + undefined` which results in NaN

// Exercise 2

// The method franchise.allMovies is supposed to return the following array:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

// Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     let self = this;

//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     });
//   },
// };

// The function will not provide the desired output because of context loss that occurs with callback functions 

// alternative solution

// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(number => `${this.name} ${number}`);
//   },
// };

// Exercise 3

// In the previous exercise, we had a situation where an anonymous method passed to map had an undesirable execution context. We solved the problem by taking advantage of lexical scoping and introducing a new variable self. Solve the same problem again by passing a hard-bound anonymous function to map.


// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     }.bind(this));
//   },
// };


// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${self.name} ${number}`;
//     }, this);
//   },
// };

// Exercise 4 

// Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(func, object) {
  let context = object;

  return function() {
    return func.apply(context);
  }
}

// LS Solution
function myBind(func, ctx) {
  return function() {
    return func.apply(ctx);
  }
}

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

const test = {
  name: "Not the right name",
}

let binding = myBind(franchise.allMovies, franchise)
console.log(binding());
console.log(binding.call(franchise));

// Exercise 5

// Our earlier implementation of the Function.prototype.bind was simplistic. Function.prototype.bind has another trick up its sleeve besides hard-binding functions to context objects. It's called partial function application. Read this assignment and the MDN documentation to learn more about partial function application.

// Alter the myBind function written in the previous exercise to support partial function application of additional arguments to the original function.


function myBind(func, ctx, ...partialArgs) {
  return function(...args) {
    const allArgs = partialArgs.concat(args);

    return func.apply(ctx, allArgs);
  }
}

// LS Solution

function myBind(func, ctx, ...partialArgs) {
  return function(...args) {
    const fullArgs = partialArgs.concat(args);

    return func.apply(ctx, fullArgs);
  };
}

// Exercise 6 

// In this exercise we'll update the implementation of myFilter by adding the functionality of accepting an optional thisArg just like the original Array.prototype.filter.

// Here's our original implementation. We also show an example of how we want to call our modified function: the 3rd argument, filter, supplies the desired context (thisArg).

// function myFilter(array, func) {
//   const result = [];

//   array.forEach(value => {
//     if (func(value)) {
//       result.push(value);
//     }
//   });

//   return result;
// }


function myFilter(array, func, thisArg) {
  const result = [];

  array.forEach(value => {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}


const filter = {
  allowedValues: [5, 6, 9],
};

myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter); // returns [5, 6]

// Modify the original implementation such that the expected result is returned. Don't use the thisArg argument of Array.prototype.forEach.

// Exercises 7

// Read the following code carefully. Will the JavaScript garbage collection mechanism garbage collect the array assigned to the variable array after the function pushIt is called on line 11?

function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

// No the array will not be garbage collected because it's still in the closure of the returned function

// Exercise 8

// Create a function newStack, that, when called, returns a stack object with three methods: push, pop, and printStack. push takes a value and appends it to the stack. pop removes and returns the last element from the stack. printStack logs each remaining element of the stack on its own line, starting with the item that was least recently added to the stack and ending with the most recently added item that is still on the stack.

// Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods.

function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((value) => {
        console.log(value);
      });
    },
  }
}


let testStack = newStack();
testStack.push(10);
testStack.push(5);
testStack.push(5);
testStack.pop();
testStack.printStack();

// Exercise 9

// const name = 'Naveed';
// const greeting = 'Hello';

// const greeter = {
//   message: `${greeting} ${name}!`,
//   sayGreetings() {
//     console.log(this.message);
//   }
// };

// Note that the message property uses the result of interpolation as its value. As a result, we have two global variables: name, and greeting that pollute the global scope. As we already know, we should limit the use of global variables as much as we can. Here we can avoid using the global variables by simply setting the message property to the value "Hello Naveed!". But let's pretend that we must use variables and interpolation to accomplish this. Can you think of a way to refactor this code so we don't have any other variables in the global scope besides greeter?


const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';
    return `${greeting} ${name}!`
  })(),
  sayGreetings() {
    console.log(this.message);
  }
};

// Exercise 10

// In an earlier exercise, we created a school object. It works, however, it can still be improved. The following are improvements for you to implement in the solution provided:

// Make the list students private. Right now, anyone can gain access to it and manipulate it. 

// Make the constraint for allowed values for years a private variable. As a private variable it avoids an unnecessary statement in the addStudent method and at the same time makes the code more declarative. 

// Make the getCourse function accessible in the addGrade method also. As it is, only the courseReport method has access. 


const school = (function() {
  let students = [];
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }

  return {
    addStudent(name, year) {
      if (VALID_YEARS.includes(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
  
    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },
  
    addGrade(student, courseName, grade) {
      const course = getCourse(student, courseName);
  
      if (course) {
        course.grade = grade;
      }
    },
  
    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log(`${name}: ${String(grade)}`);
        } else {
          console.log(`${name}: In progress`);
        }
      });
    },
  
    courseReport(courseName) {  
      const courseStudents = this.students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);
  
      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);
  
        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;
  
        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  };
})();