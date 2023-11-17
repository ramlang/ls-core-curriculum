// OBJECT CREATION PATTERNS

// Practice Problems: Create Objects with Factory Functions

// Question 1

// What are the two disadvantages of working with factory functions?

// - Each object created from the function will have the same methods and properties which can be redundant
// - We can't tell that an object was created from a specific function. In other words it's impossible to tell what type an object is.

// Question 2

// Rewrite the code below to use object-literal syntax to generate the returned object:

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }
/*
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  }
}
*/
// Question 3

// In the following problems, we'll be working through an invoice processing program. To get you started, we provide you with the following code that can process one invoice:
/*
let invoice = {
  phone: 3000,
  internet: 6500,
};
let payment = {
  phone: 1300,
  internet: 5500,
};
let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal);         // => 6800
console.log(remainingDue);         // => 2700
*/
// To be able to process multiple invoices, we'll need to have a factory function that we can use to create invoices. The requirements for this factory function are the following:

// It returns an invoice object, with phone and internet properties, and a total method. 

// The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!). 

// The function takes an object argument with attributes to override the default values. 

// Your implemented function should be able to work with the code below:
/*
function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000
*/
// Question 4

// Now let's build a factory function to create payments. The function can take an object argument in one of 3 forms:

// Payment for one service, such as: {internet: 1000} or {phone: 1000} 

// Payment for both services, such as: {internet: 2000, phone: 1000}. 

// Payment with just an amount property, such as: {amount: 2000}. 

// and should return an object that has paid services, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property.

// Your code should work with the following:
/*
function createPayment(services = {}) {
  let phone = services.phone || 0;
  let internet = services.internet || 0;
  let amount = services.amount || phone + internet;

  return {
    phone,
    internet,
    amount: amount,
    total() {
      return amount;
    },
  }
}
*/
// LS solution
// function createPayment(services) {
//   services = services || {};
//   return {
//     phone: services.phone || 0,
//     internet: services.internet || 0,
//     amount: services.amount,
//     total: function() {
//       return this.amount || (this.phone + this.internet);
//     },
//   };
// }
/*
function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// Question 5

// Update your createInvoice function to make it possible to add payment(s) to invoices. Use the code below as a guideline:

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
    payments: [],
    addPayment(payment) {
      this.payments.push(payment);
    },
    addPayments(arr) {
      arr.forEach((payment) => this.payments.push(payment));
    },
    amountDue() {
      let total = this.phone + this.internet;
      
      this.payments.forEach((payment) => total -= payment.amount);
      console.log(total);
    }
  }
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.payments)
invoice.amountDue();       // this should return 0
*/
// Constructor Pattern

// Problems

// Question 1

// What naming convention separates constructor functions from other functions?

// The name of the constructor function should be capitalized.

// Question 2

// What will the code below output? Why?

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper(); // ?

// This will throw an error since lizard doens't return explicitly

// Question 3

// Alter the code in problem 2 so that it produces the desired output.

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?

// Objects and Prototypes

// Problems

// Question 1

// Use the method we learned above to assign foo below to a new Object with prot as its prototype.

// let prot = {};

// let foo = Object.create(prot);

// Question 2

// Use getPrototypeOf to demonstrate the prototypal relationship between prot and foo.

// console.log(Object.getPrototypeOf(foo) === prot);

// Question 3

// Use isPrototypeOf to demonstrate the prototypal relationship between prot and foo.

// console.log(prot.isPrototypeOf(foo));

// Question 4

// What will the last two lines of the code below return? Why?

// These output true because `prot` is a prototype of `foo` and `Object.prototype` is the prototype of all Objects.

///////////////////////////////////////////////////////////////////////////////

// Prototypal inheritance and Behavior Delegation

// Problems

// Question 1

// What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a);

// 1

// Question 2

// What will the code below log to the console?

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a);

// 2

// Question 3

// Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by boo? How can we test that far is not delegating to boo?

// let boo = {};
// boo.myProp = 1;

// let far = Object.create(boo);

// lots of code

// far.myProp;       // 1

// We don't know for certain unless we use Object.hasOwnProperty()

// far.hasOwnProperty('myProp');

///////////////////////////////////////////////////////////////////////////////

// Practice Problem

// Question 1

// Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:
/*
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
*/
// Question 2

// Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:
/*
function shallowCopy(object) {
  let proto = Object.getPrototypeOf(object);
  let props = Object.getOwnPropertyNames(object);
  let shallow = Object.create(proto);

  props.forEach((prop) => {
    shallow[prop] = object[prop];
  })

  return shallow;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false
console.log(baz.hasOwnProperty('c'));  // true

// LS solution

function shallowCopy(object) {
  let result = Object.create(Object.getPrototypeOf(object));
  let prop;

  for (prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop)) {
      result[prop] = object[prop];
    }
  }

  return result;
}
*/
// Question 3

// Write a function that extends an object (destination object) with contents from multiple objects (source objects).

// function extend(destination, ...objects) {
//   objects.forEach((object) => {
//     let properties = Object.getOwnPropertyNames(object);
//     properties.forEach((property) => {
//       destination[property] = object[property];
//     })
//   });

//   return destination;
// }

// function addProperties(destination, object) {

// }

// let foo = {
//   a: 0,
//   b: {
//     x: 1,
//     y: 2,
//   },
// };

// let joe = {
//   name: 'Joe'
// };

// let funcs = {
//   sayHello() {
//     console.log('Hello, ' + this.name);
//   },

//   sayGoodBye() {
//     console.log('Goodbye, ' + this.name);
//   },
// };

// let object = extend({}, foo, joe, funcs);

// console.log(object.b.x);          // => 1
// object.sayHello();                // => Hello, Joe

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: Constructor Functions and Prototypes (1)

// Question 1

// What does the following code log to the console?

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// logs: 
// 2
// 2
// 2
// 2
// 2
// 2

// Question 2

// What does the following code log to the console?

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area();
//   this.perimeter = RECTANGLE.perimeter();
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// NaN (since we are only trying to access properties)
// NaN

// How would you fix this problem?

// this.area = RECTANGLE.area.call(this);
// this.perimeter = RECTANGLE.perimeter.call(this);

// Question 3

// Write a constructor function Circle, that takes a radius as an argument. You should be able to call an area method on the created objects to get the circle's area. Test your implementation with the following code:

// let Circle = function(radius) {
//   this.radius = radius;
// };

// Circle.prototype.area = function() {
//   return Math.PI * this.radius**2;
// };

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// Question 4

// What will the following code log out and why?

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// true
// When the `new` keyword is used to call `Ninja()` a new object is instanitated and given the context of `this`. This will get returned and assigned to the variable `ninja`. Additionally a `prototype` object is created automatically. When we call `swingSword()` on the object `ninja` references we look inside the prototype propeprty. There we find our desired method. If we had not we would have moved on to the location of the dunder proto within `Ninja.prototype`.

// Question 5

// What will the following code log out and why? 

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());

// Error

// `ninja` still points to the old prototype object. We need to switch where the object is instanitated.

// Question 6

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = !this.swung;
//   return this;
// }

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// Questioin 7

// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// // let ninjaB = Object.create(ninjaA);

// let ninjaB = new ninjaA.constructor();

// // LS Solution Alt
// // let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));


// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: Constructor Functions and Prototypes (2)

// const p = function(value) {console.log(value)};

// Question 1

// Follow the steps below:

//     1. Create an object called shape that has a getType method.
//     2. Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
//     3. Add a new method to the prototype called getPerimeter.

// Test your implementation with the following code:

// let shape = {
//   getType() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// Triangle.prototype = shape;


// Triangle.prototype.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// Triangle.prototype.constructor = Triangle;

// let t = new Triangle(3, 4, 5);
// p(t.constructor);                 // Triangle(a, b, c)
// p(shape.isPrototypeOf(t));        // true
// p(t.getPerimeter());              // 12
// p(t.getType());                   // "triangle"

// Question 2

// Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

// Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

// function User(first, last) {
//   if (this.prototype === undefined) {
//     User.prototype = {};
//   }

//   this.name = first + ' ' + last;
//   return this;
// }

// // LS Solution

// function User(first, last){
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// Question 3

// Create a function that can create an object with a given object as its prototype, without using Object.create.

// function createObject(obj) {
//   let newObj = new Object();
//   newObj.__proto__ = obj;
//   return newObj;
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// p(foo.isPrototypeOf(bar));         // true

// LS Solution

// function createObject(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// Queston 4

// Similar to the problem above, without using Object.create, create a begetObject method that you can call on any object to create an object inherited from it:


// let foo = {
//   a: 1,
// };

// foo.begetObject = function() {
//   function F() {}
//   F.prototype = this;
//   return new F();
// }

// let bar = foo.begetObject();
// p(foo.isPrototypeOf(bar));         // true

// Question 5

// Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

// function neww(constructor, args) {
//   p(constructor.prototype)
//   let object = Object.create(constructor.prototype);
//   let result = constructor.apply(object, args);

//   return typeof result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

//  greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();          // => Hello, John Doe
// john.constructor;         // Person(firstName, lastName) {...}

// SOLUTION OVERVIEW WITH TESS 06/14/2023

// Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

// new
// - creates a new object 
// - sets this to new object 
// - executes the code
// - returns the new obj 
// unless the function return some other obj

// the new object inherits from the function prototype (the __proto__ of new object points to constructor.prototype)

// function neww(constructor, args) {
  // p(constructor.prototype)
  // let object = Object.create(constructor.prototype);
  // let result = constructor.apply(object, args);

  // return typeof result === 'object' ? result : object;
// }

// function Person(firstName, lastName) {
//   if(firstName === undefined) {
//     return {error: true};
//   }
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

//  greeting = function() {
//   console.log('Hello, ' + this.firstName + ' ' + this.lastName);
// };

// let john = neww(Person, ['John', 'Doe']);
// john.greeting();          // => Hello, John Doe
// john.constructor;         // Person(firstName, lastName) {...}

///////////////////////////////////////////////////////////////////////////////

// More Methods on the Object Constructor

// Using this method, create a function that constructs a new object with a log method that is read-only. The log method will use console.log to output the name property on itself.

// function newPerson(name) {
//   return Object.defineProperties({}, {
//     log: {
//       value: function() {console.log(name)},
//       writable: false,
//     }
//   })
// }

// let me = newPerson('Shane Riley');
// me.log();     // => Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // => Shane Riley

// LS Solution

// function newPerson(name) {
//   return Object.defineProperties({ name: name }, {
//     log: {
//       value() {
//         console.log(this.name);
//       },
//       writable: false
//     },
//   });
// }

// Can you explain why the array and object properties are changed, but the method is not?

// Because the objects themselves aren't frozen so they can be mutated.

///////////////////////////////////////////////////////////////////////////////

// Exercises JS225 - Object Oriented JavaScript

// Object Creation Patterns > Ancestors

// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

// name property added to make objects easier to identify
// const foo = {name: 'foo'};
// const bar = Object.create(foo);
// bar.name = 'bar';
// const baz = Object.create(bar);
// baz.name = 'baz';
// const qux = Object.create(baz);
// qux.name = 'qux';

// const p = function(value) {console.log(value)};

// foo.ancestors = function ancestors(chain = []) {
//   let proto = Object.getPrototypeOf(this);

//   if (proto.name === undefined) {
//     chain.push('Object.prototype');
//     return chain;
//   } else {
//     chain.push(proto.name);
//     return ancestors.call(proto, chain);
//   }
// }

// p(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// p(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// p(bar.ancestors());  // returns ['foo', 'Object.prototype']
// p(foo.ancestors());  // returns ['Object.prototype']

// // LS Solution

// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

// Object Creation Patterns > Delegate

// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

// Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.

// Here's a sample run;

// function delegate(obj, method, ...args) {
//   return function() {
//     let func = obj[method];
//     func.call(obj, ...args);
//   }
// }

// const foo = {
//   name: 'test',
//   bar(greeting) {
//     console.log(`${greeting} ${this.name}`);
//   },
// };

// const baz = {
//   qux: delegate(foo, 'bar', 'hello'),
// };

// baz.qux();   // logs 'hello test';

// foo.bar = () => { console.log('changed'); };

// baz.qux();          // logs 'changed'

// LS Solution

// function delegate(context, methodName, ...args) {
//   return () => context[methodName].apply(context, args);
// }

// Object Creation Patterns > Classical Object Creation

// Implement the following diagram using the pseudo-classical approach. Subclasses should inherit all of the superclass's methods. Reuse the constructors of the superclass when implementing a subclass.

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    console.log(this.firstName + ' ' + this.lastName);
  }

  communicate() {
    console.log('communicating');
  }

  eat() {
    console.log('eating');
  }

  sleep() {
    console.log('sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log('diagnosing');
  }
}


class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log('teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log('studying');
  }
}


class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log('reasearching');
  }
}

// const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// LS Solution

// - Use of Function.prototype.call to have the subclass "inherit" properties from the parent class.
// - Use of Function.prototype = Object.create(obj) to "inherit" methods from the parent class.
// - Use of Function.prototype.constructor to manually reset the property to point back to the appropriate constructor.

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.communicate = () => {
//   console.log('Communicating');
// };

// Person.prototype.eat = () => {
//   console.log('Eating');
// };

// Person.prototype.sleep = () => {
//   console.log('Sleeping');
// };

// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.diagnose = () => {
//   console.log('Diagnosing');
// };
// Doctor.prototype.constructor = Doctor;

// function Professor(firstName, lastName, age, gender, subject) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.subject = subject;
// }

// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.teach = () => {
//   console.log('Teaching');
// };
// Professor.prototype.constructor = Professor;

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.study = () => {
//   console.log('Studying');
// };
// Student.prototype.constructor = Student;

// function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
//   Student.call(this, firstName, lastName, age, gender, degree);
//   this.graduateDegree = graduateDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.research = () => {
//   console.log('Researching');
// };
// GraduateStudent.prototype.constructor = GraduateStudent;

// Object Creation Patterns > Anonymizer

// Using OLOO create an Account prototype object that anonymizes user objects on init. The created object should not have access to the function that anonymizes a user other than through the init and reanonymize methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the Account object:

//     init: The init method sets the email, password, firstName, lastName, and displayName of user. The displayName is a 16 character sequence generated for the user. It's used as the display name of a user.
//     reanonymize: This method generates a new 16 character sequence and reassigns it to the displayName property if the password provided is valid. Returns true if successfully re-anonymized. Returns 'Invalid Password' if the password provided is not valid.
//     resetPassword: This method asks the user for a new password and reassigns it to the password property. To reset the password, the user must provide the current password. Returns 'Invalid Password' if the password provided is not valid. Returns true if the password is successfully reset.
//     firstName: This method returns the first name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
//     lastName: This method returns the last name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
//     email: This method returns the email name of the user if the password provided is valid. Returns 'Invalid Password' if the password provided is not valid.
//     displayName: This property returns the displayName — the 16 character sequence.

// Other than the above properties, methods, and properties inherited from Object.prototype, no other method or property should exist on the object returned by the Account prototype object.

// Here's a sample for your reference:

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

function isEmpty(value) {
  let type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  } else if (Array.isArray(value)) {
    return value.length === 0;
  } else if (type === 'object') {
    return Object.keys(value).length === 0;
  }
}

// current test cases
console.log(isEmpty({}));                  // true
console.log(isEmpty({ name: 'Janice' }));  // false

console.log(isEmpty(''));                  // true
console.log(isEmpty('Janice'));            // false

console.log(isEmpty([]));                  // true
console.log(isEmpty(['Janice']));          // false

array = [];
array[-1] = 'foo';
console.log(isEmpty(array)); //true

array.push('Janice');
console.log(isEmpty(array)); //false

