/*
// Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, and logs each number after that number of seconds. It should log 1 after 1 second, 2 after 2 seconds, etc. Note that the computation of the time is not dependent on when a previous number was logged. This means that for 10 numbers a total of 10 seconds would have passed.

// > delayLog();
// 1  // 1 second later
// 2  // 2 seconds later
// 3  // 3 seconds later
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10

function delayLog() {
  for (let count = 1; count <= 10; count++) {
    setTimeout(() => {console.log(count)}, 1000 * count);
  }
}

delayLog();

// In what sequence will the JavaScript runtime run the following lines of code? Number them from 1-8 to show the order of execution.

setTimeout(() => {     // 1
  console.log('Once'); // 5
}, 1000);

setTimeout(() => {     // 2
  console.log('upon'); // 7
}, 3000);

setTimeout(() => {     // 3
  console.log('a');    // 6
}, 2000);

setTimeout(() => {     // 4
  console.log('time'); // 8
}, 4000);

// In what sequence does the JavaScript runtime run the functions q, d, n, z, s, f, and g in the following code?

setTimeout(() => {
  setTimeout(() => {
    q();               // 7
  }, 15);

  d();                 // 3

  setTimeout(() => {
    n();               // 5
  }, 5);

  z();                 // 4
}, 10);
// ------
setTimeout(() => {
  s();                 // 6
}, 20);

setTimeout(() => {     // 2
  f();
});

g();                   // 1

// CORRECT ORDER
// g, f, d, z, n, s, q

// Write a function named afterNSeconds that takes two arguments: a callback and a time duration in seconds. The function should wait for the indicated period, then invoke the callback function.

function afterNSecond(callback, n) {
  setTimeout(callback, 1000 * n);
}

*/
// setInterval

// Write a function named startCounting that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.
let id;

function startCounting() {
  let count = 1;

  function logNumber() {
    console.log(count);
    count += 1;
  }

  id = setInterval(logNumber, 1000);
}

startCounting();

// Extend the code from the previous problem with a stopCounting function that stops the logger when called.

function stopCounting() {
  clearInterval(id);
}

// stopCounting();