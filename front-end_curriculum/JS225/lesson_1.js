/*
JS225 NOTES
------------
To Do 4/26/23:
1. Fix directory -- add package.json file so I can use nodde to run files
2. Move notes to the JS225 directory
3. Create a new file lesson_1
4. Check study session to see if anyone else signed up
5. 
*/
/*
// ASSIGNMENT #5
// Practice Problems: Objects

// Question 1
let invoices = {
  unpaid: [],
}

// Question 2
invoices.add = function(name, amount) {
  this.unpaid.push({
    name,
    amount,
  });
};

// Question 3
invoices.totalDue = function() {
  return this.unpaid.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);
}

// LS Solution

// invoices.totalDue = function() {
//   let total = 0;
//   let i;

//   for (i = 0; i < this.unpaid.length; i += 1) {
//     total += this.unpaid[i].amount;
//   }

//   return total;
// };

// Question 4
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

// Quesiton 5
invoices.paid = [];

invoices.payInvoice = function(name) {
  unpaid = [];
  
  this.unpaid.forEach((invoice) => {
    if (name === invoice.name) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  });

  this.unpaid = unpaid;
}

// invoices.payInvoice('Moonbeam Interactive');

// Question 6
invoices.totalPaid = function() {
  return this.paid.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);
}

// console.log(invoices.totalPaid());

// Quesiton 7
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

// ASSIGNMENT #7
// Practice Problems: Mutating Objects

// Question 1
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);         // "Hello from the function scope!"
console.log(message);  // "Hello from the global scope!"

// Question 2
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);                 // "Greetings from the function scope"

console.log(myObj.message);  // "Greetings from the function scope"

// This demonstrates that objects are reference values, meaning the variable point to pointers which point to a location in memory. When this object gets changed, the variables that point to it will reference the new value as well.

// Question 3
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();                // "Hello from the function scope!"
console.log(message);  // "Hello from the function scope!"

// Question 4
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);         // false
console.log(newObj.a === obj.a);  // true

// Question 5
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// line 155 returns false because the variable animal has been reassigned and no longer references a pointer to the original animal object. This means on lines 155 and 156 the variable animal is referencing the animal object on line 148.

// ASSIGNMENT #8
// Functions as Object Factories - Problems

// Problem 1
function makeCar(rate) {
  return {
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate;
    }
  }
}

// Problem 2
let hatchback = makeCar(9)

// Problem 3
function makeCar(rate, brakeRate) {
  return {
    speed: 0,
    rate,
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },

    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    },
  }
}


let sedan = makeCar(8, 6);
sedan.accelerate();
sedan.speed;
// 8
sedan.brake();
sedan.speed;
// 2
sedan.brake();
sedan.speed;
// 0

// ASSIGNMENT #9
// Practice Problems: Functions as Object Factories

// Question 1 / Question 2

function makeCountry(name, continent) {
  return {
    name,
    continent,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  }
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

// Question 3

function makeCountry(name, continent) {
  return {
    name,
    continent,
    visited: false,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  }
}

// Question 4

function makeCountry(name, continent, visited = false) {
  // if (visited === undefined) {
  //   visited = false;
  // }

  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  }
}

// Question 5
function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return this.name + ' is located in ' + this.continent + '.';
    },
    visitCountry() {
      this.visited = true;
    }
  }
}

// Question 6

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      if (this.visited) {
        return this.name + ' is located in ' + this.continent + '. I ' + (this.visited ? 'have' : "haven't") + ' visited ' + this.name + '.';
      }
    },
    visitCountry() {
      this.visited = true;
    }
  }
}

// ASSIGNMENT #11
// Practice Problems: Object Orientation

// Question 1

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// let scissors = {
//   id: 0,
//   name: 'scissors',
//   stock: 8,
//   price: 10,
// }

// let drill = {
//   id: 1,
//   name: 'drill',
//   stock: 15,
//   price: 45,
// }

// Quesiton 2

function updatePrice(product, price) {
  if (price < 0) {
    console.log('Cannot enter a negative price');
  } else {
    product.price = price;
    console.log(product.name + ' has a new price of ' + product.price);
  }
}

updatePrice(scissors, -10);
updatePrice(drill, 40);

// Question 3

function describeProduct(product) {
  console.log();
  console.log('=> Name: ' + product.name);
  console.log('=> ID: ' + product.id);
  console.log('=> Price: $' + product.price);
  console.log('=> Stock: ' + product.stock);
  console.log();
}

describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// Question 4

function newProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice() {
      if (price < 0) {
        console.log('Cannot enter a negative price');
      } else {
        product.price = price;
        console.log(this.name + ' has a new price of ' + this.price);
      }
    },
    describe() {
      console.log();
      console.log('=> Name: ' + this.name);
      console.log('=> ID: ' + this.id);
      console.log('=> Price: $' + this.price);
      console.log('=> Stock: ' + this.stock);
      console.log();
    },
  }
}

/// Question 5 / 6

let scissors = createProduct(0, 'Scissors', 10, 8);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);
*/

// Exercises - JS225 Object Oriented JavaScript

// 1. Buggy Code 1

// > const helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

// However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?

// The code results in an error because within the function `greet` there are no variables declared called `morning`, `afternoon`, etc. This means when JS tries to execute the string interpolation it results in an error. This can be fixed by prepending each interpolated variables call with `this`.

function createGreeter(name) {
// ...
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }
// ...
}

// Note technically you do not need `name` prepended with `this` since `name` is the parameter of the encompassing function.

// 2. Buggy Code 2

// Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    let discountedPrice = this.price - discount;

    console.log(discountedPrice);
  },
};

// > item.discount(20)   // should return 40
// = 40
// > item.discount(50)   // should return 25
// = 20
// > item.discount(25)   // should return 37.5
// = 15

// 3. Testing Object Equality

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false


// function objectsEqual(obj1, obj2) {
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) return false;

//   return obj1Keys.every((key, index) => {
//     let obj1Key = key;
//     let obj2Key = obj2Keys[index];

//     if (obj1Key !== obj2Key || obj1[obj1Key] !== obj2[obj2Key]) {
//       return false;
//     } else {
//       return true;
//     }
//   });
// }

// function objectsEqual(a, b) {
//   if (a === b) {
//     return true;
//   }

//   return (keysMatch(a, b) && valuesMatch(a, b));
// }

// function keysMatch(a, b) {
//   const aKeys = Object.getOwnPropertyNames(a).sort();
//   const bKeys = Object.getOwnPropertyNames(b).sort();

//   if (aKeys.length !== bKeys.length) {
//     return false;
//   }

//   return aKeys.every((key, index) => key === bKeys[index]);
// }

// function valuesMatch(a, b) {
//   const aKeys = Object.getOwnPropertyNames(a).sort();

//   return aKeys.every(key => a[key] === b[key]);
// }

// 4. Student

// Create an object factory for a student object. The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

    // info: Logs the name and year of the student.
    // addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
    // listCourses: Returns a list of the courses student has enrolled in.
    // addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
    // updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
    // viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.
/*
let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
*//*
function createStudent(name, year) {
  return {
    name,
    year,
    courses: {},
    notes: [],
    info() {
      console.log(`${name} is a ${year} year student`)
    },

    listCourses() {
      console.log(Object.values(this.courses) || []);
    },

    addCourse(course) {
      this.courses[course.code] = course;
    },

    addNote(code, note) {
      let course = this.courses[code];

      if (course['notes'] === undefined) {
        course['notes'] = note;
      } else {
        course['notes'] = course.notes.concat('; ' + note);
      }
    },
    
    updateNote(code, note) {
      this.courses[code]['notes'] = note;
    },

    viewNotes() {
      Object.values(this.courses).forEach((course) => {
        if (course['notes']) {
          console.log(`${course.name}: ${course.notes}`);
        }
      });
    }
  }
}
*/

// function createStudent(name, year) {
//   return {
//     name,
//     year,
//     courses: [],
//     info() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     listCourses() {
//       return this.courses;
//     },

//     addCourse(course) {
//       this.courses.push(course);
//     },

//     addNote(courseCode, note) {
//       const course = this.courses.filter(({code}) => code === courseCode)[0];
      
//       if (course) {
//         if (course.note) {
//           course.note += `; ${note}`;
//         } else {
//           course.note = note;
//         }
//       }

//     },

//     viewNotes() {
//       this.courses.forEach(course => {
//         if (course.note) {
//           console.log(`${course.name}: ${course.note}`);
//         }
//       });
//     },

//     updateNote(courseCode, note) {
//       const course = this.courses.filter(({code}) => code === courseCode)[0];

//       if (course) {
//         course.note = note;
//       }
//     },
//   };
// }


// // 5. School

// function createSchool() {
//   return {
//     students: [],
//     addStudent(studentName, year) {
//       if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
//         let newStudent = createStudent(studentName, year);
//         this.students.push(newStudent);
//         return newStudent;
//       }

//       return 'Invalid Year';
//     },

//     enrollStudent(student, course) {
//       student.addCourse(course);
//     },

//     addGrade(student, courseName, grade) {
//       const course = student.courses.filter(({name}) => name === courseName)[0];
//       course.grade = grade;
//     },

//     getReportCard(student) {      
//       student.courses.forEach((course) => {
//         if (course.grade === undefined) {
//           console.log(`${course.name}: In progress`);
//         } else {
//           console.log(`${course.name}: ${course.grade}`)
//         }
//       })
//     },

//     courseReport(courseName) {
//       let sum = 0;
//       let courseGrades = this.students.reduce((arr, student) => {
//         let courses = student.courses;
//         let course = courses.filter(({name}) => courseName === name)[0];

//         if (course && course.grade) {
//           sum += course.grade;
//           arr.push({name: student.name, grade: course.grade});
//         }

//         return arr;
//       }, []);

//       if (courseGrades.length === 0) return undefined;

//       console.log(`=${courseName} Grades=`);
//       courseGrades.forEach((student) => {
//         console.log(`${student.name}: ${student.grade}`);
//       });
//       console.log('---');
//       console.log(`Course Average: ${sum / courseGrades.length}`);
//     },
//   }
// }

// // Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// // The following are only showing the properties that aren't methods for the three objects

// let school = createSchool();
// let foo = school.addStudent('foo', '1st');
// let bar = school.addStudent('bar', '2nd');
// let qux = school.addStudent('qux', '3rd');

// school.enrollStudent(foo, { name: 'Math', code: 101 });
// school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
// school.enrollStudent(foo, { name: 'Physics', code: 202, });
// school.addGrade(foo, 'Math', 95);
// school.addGrade(foo, 'Advanced Math', 90);

// school.enrollStudent(bar, { name: 'Math', code: 101});
// school.addGrade(bar, 'Math', 91);

// school.enrollStudent(qux, { name: 'Math', code: 101});
// school.enrollStudent(qux, { name: 'Advanced Math', code: 102});
// school.addGrade(qux, 'Math', 93);
// school.addGrade(qux, 'Advanced Math', 90);

// // school.getReportCard(foo);
// // school.getReportCard(bar);
// // school.getReportCard(qux);

// school.courseReport('Math');
// school.courseReport('Advanced Math');
// school.courseReport('Physics');

const school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseName, grade) {
    const course = student.listCourses().filter(({name}) => name === courseName)[0];
    
    if (course) {
      course.grade = grade;
    }
  },

  getReport(courseName) {
    student.listCourses().forEach(({grade, name}) => {
      if (grade) {
        console.log(`${name}: ${String(grade)}`);
      } else {
        console.log(`${name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)
    }

    const courseStudents = this.students.map(student => {
      const course = getCourse(student, courseName) || { grade: undefined };
      return {name: student.name, grade: course.grade};
    }).filter(({grade}) => grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades =`);

      const average = courseStudents.reduce((total, {name, grade}) => {
        console.log(`${name}: ${grade}`);
        return total + grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
};
