// PRACTICE PROBLEMS: PROMISES AND ASYNC/AWAIT

// Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

const promise = new Promise((resolve) => {
  return setTimeout(() => { resolve("Launch School") }, 2000);
})

promise.then((message) => console.log(message));

// LS SOLUTION
// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//       resolve('Launch School');
//   }, 2000);
// });
// ​
// promise.then(function(value) {
//   console.log(value)
// });

// Create a Promise that rejects with a value of "Error: Not Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's rejected value by using the .catch method. ​

const promise2 = new Promise((resolve, reject) => {
  return setTimeout(() => { reject("Not Launch School") }, 2000);
})

promise2.catch((message) => console.log('ERROR: ' + message));

// LS SOLUTION

// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//       reject('Error: Not Launch School');
//   }, 2000);
// })
// ​
// promise.catch(function(value) {
//   console.log(value);
// });

// Without running it, what will the following code log to the console?

const promise3 = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});

promise3.then(value => console.log(value));
console.log("I am NOT a Promise");

// I am NOT a Promise
// I am a Promise

// Without running it, what will the following code log to the console?

const promise1 = new Promise((resolve, reject) => {
  console.log("foo");
  resolve();
  console.log("bar");
});

promise1.then(() => {
  console.log("baz");
});

console.log("qux");

// qux
// foo
// baz

// SOLUTION
// foo
// bar
// qux
// baz

// Without running it, what will the following code log to the console?

const promise4 = new Promise((resolve, reject) => {
  console.log("foo");
  reject();
  console.log("bar");
});

promise4
  .then(() => {
    console.log("baz");
  })
  .catch(() => {
    console.log("qux");
  });

console.log("abc");

// foo
// bar
// abc
// qux

// Without running it, what will the following code log to the console? This problem may be a bit challenging.

const promise5 = new Promise(res => res(1));
promise5
  .then((num) => {
    console.log(num);
    return num + 2;
  })
  .then((num) => {
    console.log(num);
    return num + 3;
  })
  .then((num) => {
    console.log(num);
    return num + 4;
  })
  .finally((num) => {
    console.log(num);
    return num + 5;
  });

  // 1
  // 3
  // 6
  // undefined

  // Without running it, what will the following code log to the console? This problem may be a bit challenging.

  const promise6 = new Promise((resolve, reject) => {
    resolve("Got it!");
    reject("Oops.");
    resolve("Again!");
  });
  
  promise6
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

// Got it!


// Without running the following code, what will it log to the console? When will the logged values appear on the console?

function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

test(3).then((value) => console.log(value));

// 18
// After 2000ms

// The following code is nearly identical to the code in the previous problem, except that line 12 introduces two additional awaits. Without running the code, what will it log to the console? When will the logged values appear on the console?

function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * (await a) * (await b);
}

test(3).then((value) => console.log(value));

// error or 18 after 2 seconds

// Without running the following code, what will it log to the console? When will the logged values appear on the console?

function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b;
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b;
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));

// 18; after 2 seconds
// 12; after 4 seconds

// Without running the following code, what will it log to the console?

const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

function test2() {
  console.log("3");
}

test1();
test2();

// 2
// 3
// 1

// Without running the following code, what will it log to the console?

const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

// A
// B

// Without running it, what will the following code log to the console?

const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();

// E
// B