// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

//     If the input is not an array, return undefined.
//     If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

/*
Problem
--------
Move the first element of an array to the end of the array, but do not modify the array.

INPUT:
array, not-an-array, empty array

OUTPUT:
new array, undefined, empty array

RULES
- Move the first element to the end of the array
- Do not mutate the array
- If non-array input return undefined
- If empty array input return empty array
- elements can be of any type
- if one element return array as is since nothing to rotate
  or if rotated it will be the same?
- elements can be more than one type

Examples
---------
rotateArray([7, 3, 5, 2, 9, 1]); => [3, 5, 2, 9, 1, 7]
- took 7 and moved to the end of the array

rotateArray(['a']); => ["a"]
- took "a" and moved to the end of the array

rotateArray([]); => []
- empty array returns an empty array

rotateArray(); => undefined
- no input (not an array) returns undefined

const array = [1, 2, 3, 4];
rotateArray(array); => [2, 3, 4, 1]
array; => [1, 2, 3, 4]
- Shows that the array is not mutated after method call

Data Structure
---------------
Array

Algorithm
----------
Take array and make a copy
- use slice
Remove the first element
- use slice with argument
Add to the end of the array
- slice skipping first element to end of array
- push previous slice to end of the array
Return the new array
*/

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];

  return inputArray.slice(1).concat(inputArray[0]);
}
/*
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
*/

///////////////////////////////////////////////////////

// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
Problem
--------
Rotate the last digits in a number specified by a separate argument.

INPUT:
number, digit to rotate by

OUTPUT:
rotated number

RULES
- n is the number of end digits to rotate
- "rotate by one digit to the left, moving the first digit to the end"
- 123 (Rotate one digit to left) rotates to 132 (because 2 moves to the end and 3 moves to 2's place)
- digit can be any length
- input will always be a digit
- potentail NaN inputs
- potential -Infinity and Infinity inputs

Examples
---------
rotateRightmostDigits(735291, 1);      // 735291
Number of last digits to rotate = 1
735291
735291
No change

rotateRightmostDigits(735291, 2);      // 735219
Number of digits to rotate = 2
735291
735219
9 moved to end
1 moved to 9's place

rotateRightmostDigits(735291, 3);      // 735912
Number of digits to rotate = 3
735291
735912
2 moved to end
9 & 1 moved forward

rotateRightmostDigits(735291, 4);      // 732915
number of digits to rotate = 4
735219
732915
5 moved to the end
2 & 1 & 9 moved forward

rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

Data Structure
---------------
String (since no selection or transformation occuring)
- can access character at index

Algorithm
----------
get part of string that stays the same
get part of string that needs to rotate
- slice the string cutting off beginning character
- append character to the end
 
join the two parts of the string
return the string
*/

function rotateRightmostDigits(value, n) {
  let prefix = String(value).slice(0, -n);
  let suffix = String(value).slice(-n);
  let rotatedSuffix = suffix.slice(1).concat(suffix[0]);

  return parseInt(prefix + rotatedSuffix, 10);
}



// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

/////////////////////////////////////////////////////////////////////

// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
// Keep the first two digits fixed in place and rotate again to get 321759. Keep the first
// three digits fixed in place and rotate again to get 321597. Finally, keep the first four
// digits fixed in place and rotate the final two digits to get 321579. The resulting number
// is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation
// of that integer. You can (and probably should) use the rotateRightmostDigits function
// from the previous exercise.

/*
Problem
--------
Get the maximum rotation of a number by rotating the values sequentially
You can use the rotateRightmostDigits function from before

INPUT:
number
number may contain zeros
number may be single digits

OUTPUT:
number rotated maximum amount

RULES:
- after the numbers are rotated they must remain in place
- When a number is rotated it's brough to the end of the number and
  other values are shifted up by one place
- in the problem example the number is 6 digits in length but rotated
  a total of 5 times.
- if zeros are leading, they get dropped per test case
- single digits will return themselves

Examples
---------
   735291
=> 352917
=> 329175
=> 321759
=> 321597
=> 321579

   105
=> 051
=> 015

   8703529146
=> 7035291468
=> 7352914680
=> 7329146805
=> 7321468059
=> 7321680594
=> 7321605948
=> 7321609485
=> 7321609854
=> 7321609845 
9 times rotated

Data Structures
----------------
string

Algorithm
----------
Count the current index to determine where to slice the string
- use a for loop for an initialized index
- loop until index is one less than the length of the string
- if the length of the number is length than the original length, pad front with zeros
- obtain prefix of current string
- assign the return value of the method rotate right most function to current string
  to be the suffix
- add the prefix to the suffix and assign current string before loop executes again
- return string once loop ends
*/

function maxRotation(value) {
  value = String(value)

  for (let negInd = value.length; negInd > 0; negInd -= 1) {
    value = rotateRightmostDigits(value, negInd)
  }
  return parseInt(value, 10);
}

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

////////////////////////////////////////////////////////////////////////////////////

// A stack is a list of values that grows and shrinks dynamically. A stack may be
// implemented as an Array that uses two Array methods: Array.prototype.push and
// Array.prototype.pop.

// A stack-and-register programming language is a language that uses a stack of values.
// Each operation in the language operates on a register, which can be thought of as the
// current value. The register is not part of the stack. An operation that requires two
// values pops the topmost item from the stack (i.e., the operation removes the most
// recently pushed value from the stack), operates on the popped value and the register
// value, and stores the result back in the register.

// Consider a MULT operation in a stack-and-register language. It removes the value from
// the stack, multiplies the removed stack value with the register value, then stores the
// result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4
// is the topmost item in the stack) and a register value of 7, the MULT operation mutates
// the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left
// in the register. If we do another MULT at this point, the stack is mutated to [3], and the
// register is left with the value 168.

// Write a function that implements a miniature stack-and-register-based programming language
// that has the following commands (also called operations or tokens):

//     n : Place a value, n, in the register. Do not modify the stack.
//     PUSH : Push the register value onto the stack. Leave the value in the register.
//     ADD : Pop a value from the stack and add it to the register value, storing the
//           result in the register.
//     SUB : Pop a value from the stack and subtract it from the register value, storing
//           the result in the register.
//     MULT : Pop a value from the stack and multiply it by the register value, storing the
//            result in the register.
//     DIV : Pop a value from the stack and divide the register value by the popped stack
//           value, storing the integer result back in the register.
//     REMAINDER : Pop a value from the stack and divide the register value by the popped
//                 stack value, storing the integer remainder of the division back in the
//                 register.
//     POP : Remove the topmost item from the stack and place it in the register.
//     PRINT : Print the register value.

// All operations are integer operations (which is only important with DIV and REMAINDER).

// Programs will be supplied to your language function via a string argument. Your function may
// assume that all arguments are valid programs — i.e., they will not do anything like trying to
// pop a non-existent value from the stack, and they will not contain any unknown tokens.

// Initialize the stack and register to the values [] and 0, respectively.

/*
Problem
--------
Create a stack and register using an Array and a variable for the register.
The stack-and-register should have the following commands:
- n, PUSH, ADD, SUB, MULT, DIV, REMAINDER, POP, PRINT

INPUT:
string
also integers?

OUTPUT:
return of command execution (integer)

RULES:
- all operations are integer operations
- string arguments will be given
- assume all arguments are valid programs
- initialize the stack to []
- initialize the register to 0
- Use two array methods (pop, push)

Examples
---------
- See below for commands and reuslts 
- Print: outputs the value in the register
- No other command gives an output except print
- negtive numbers will be stored as absolute values

Data Structure
---------------
Array

Algorithm
----------
Create a function that accepts all commands and values
a stack should be initialized
a register should be initialized

the command should be parsed and split into an array of commands
- any numbers should be temp assigned
- determine if push or other command
- keep iterating over commands
- execute all the commands using a case statement
- only output values if print is used
*/

function minilang(command) {
  let stack = [];
  let register = 0;
  let commands = command.split(' ');

  commands.forEach((value) => {
    if (/[0-9]+/.test(value)) {
      register = Number(value);
    }

    switch (value) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'ADD':
        register = register + stack.pop();
        break;
      case 'SUB':
        register = register - stack.pop();
        break;
      case 'MULT':
        register = register * stack.pop();
        break;
      case 'DIV':
        register = Math.round(register / stack.pop());
        break;
      case 'REMAINDER':
        register = register % stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  });
}


// Examples:

// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

///////////////////////////////////////////////////////////////////////////////////

// Write a function that takes a sentence string as an argument and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
// 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
// digit character.

/*
Problem
--------
Given a string with written numbers, convert the numbers to their respective digits

INPUT:
String

OUTPUT:
String

RULES:
- 'one' => '1'
- 'four.' => '4.'
- only the number words should be transformed into their numeric digits
  No other part of the sentence should be changed
- numbers will be zero - nine so if ten is included it will remain 'ten'

Examples
---------
wordToDigit('zero, one, two, three, four, five, six, seven. eight, and nine.');
// '0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.'

wordToDigit('zeroonetwothreefourfivesixseveneightnine');
// '0123456789'

wordToDigit('eight and nine and ten and eleven');
// '8 and 9 and ten and eleven'

Data Structure
---------------
String

Algorithm
----------
determine if any number words match the words in the sentence
if any words match replace those words with the number equivalent
otherwise do not replace any words
repeat for eacb number 0 through 9
return the new string that is created
*/

const NUMBERS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

function wordToDigit(string) {
  NUMBERS.forEach((word, index) => {
    regex = new RegExp(word, "g");
    string = string.replace(regex, index)
  });
  return string;
}


// Example:

// console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."
// console.log(wordToDigit('zero, one, two, three, four, five, six, seven. eight, and nine.'));
// // '0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.'

// console.log(wordToDigit('zeroonetwothreefourfivesixseveneightnine'));
// // '0123456789'

// console.log(wordToDigit('eight and nine and ten and eleven')); // '8 and 9 and ten and eleven'

////////////////////////////////////////////////////////////////////////////

// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that
// the first two numbers are 1 by definition, and each subsequent number is the sum of the two
// previous numbers. Fibonacci numbers often appear in mathematics and nature.

// Computationally, the Fibonacci series is a simple series, but the results grow at an
// incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,
// 915,075—that's enormous, especially considering that it takes six iterations just to find
// the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that
// has the number of digits specified by the argument. (The first Fibonacci number has an index
// of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// JavaScript's normal Number type can represent integers accurate up to the value of
// Number.MAX_SAFE_INTEGER, which is the 16-digit value 9007199254740991. Any integer larger
// than that value loses accuracy. For instance, the following code outputs 1, not 2 as you
// may expect:

// console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);

// We'll be working with much larger numbers in this problem. Fortunately, JavaScript now
// supports a BigInt type that lets you work with massive integers, limited only by the amount
// of memory available to your program, and the time you can devote to waiting for an answer.

// To use BigInt integers in your solution, simply append the letter n to any numbers you use
// in your solution: 1n, 1234567890123456789012345678901234567890n, and so on. JavaScript will
// take care of the rest.

// The last example may take a minute or so to run.

/*
Problem
--------
Find the index of the fib num that is the given number of digits in length
For example 2n as an argument means the number should be 2n digits in length
This makes 13 the number we are searching for and the index is 7n

INPUT:
BigInt (number length)

OUTPUT:
BigInt (index of found number)

RULES:
- first two fib nums are 1 and 1
- each following fib num is the sum of the previous two numbers
- Might need to verfiy that the input is a valid BigInt
- Return the index as a BigInt
- the argument will always be greater than or equal to 2
- the first fib has index of one

Examples
---------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13

findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
- 3 digits in length
- 144 has three digits and it's index is 12

findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

Data Structure
---------------
No strcucture just variables

Algorithm
----------
Use a counter to keep track of the idnex
- use index variable

Loop until the condition of the lengths are met
Generate the fib nums
- start at the beginning so 1 and 1
- add numbers for each iteration (fib num = previous + num)

Check to see how many digits in length each fib num is
- if the argument is equal to the length of the number generated stop

If the length matches the argument return the index of the fib num
- return the index variable

*/

function findFibonacciIndexByLength(numberLength) {
  let currNumIndex = 2n;
  let fibNum = 0n;
  let currNum = 1n;
  let prevNum = 1n;
  
  while (BigInt(String(fibNum).length) !== numberLength) {
    fibNum = currNum + prevNum
    prevNum = currNum
    currNum = fibNum
    currNumIndex += 1n;
  }

  console.log(currNumIndex);
}

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

//////////////////////////////////////////////////////////////////////////////////

// The Fibonacci series is a sequence of numbers in which each number is the sum of
// the previous two numbers. The first two Fibonacci numbers are 1 and 1. The third
// number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on.
// In mathematical terms, this can be represented as:

// F(1) = 1
// F(2) = 1
// F(n) = F(n - 1) + F(n - 2) where n > 2

// This simple sequence can easily be computed using a recursive function. A recursive
// function is one in which the function calls itself. For example, the following function
// is a recursive function that computes the sum of all integers between 1 and n:

// function sum(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }

// A good recursive function has three primary qualities:

//     It calls itself at least once.
//     It has an ending condition — e.g., if (n === 1), in the sum function above.
//     The results of each recursion are used in each step — e.g., n + sum(n - 1) uses sum(n - 1).

// Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed
// to the function.

// NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you
// are not able to solve it on your own; recursion is tricky, and even experienced developers can
// have difficulty dealing with it.

/*
Problem
--------
Write a function that computes the nth fib num using recursion

INPUT:
number representing which fib num to compute

OUTPUT:
the nth fib num

RULES:
- 1 and 1 are the first values of the fib num sequence
- recursion must be used
- needs to have an ending condition
-

Examples
---------
1st fib num is 1
4th fib num is 3
12th fib num is 144

Data Structure
---------------
None

Algorithm
-----------
Define a function that uses recursion

Set a ending condition
n <= 2 return 1

set first fib num
F(1) = 1

set second fib num
F(2) = 1

calculate fib num using function call
call function with arguments n -1 and n -2 

fibNum = F(n - 1) + F(n - 2)
4      = F(3) + F(2)
       = F(2) + F(0)
       = 1 + 1

*/

function fibonacci1(f) {
  if (f <= 2) { return 1 }

  return fibonacci1(f - 1) + fibonacci1(f - 2);
}

// Examples:

// console.log(fibonacci1(1));       // 1
// console.log(fibonacci1(2));       // 1
// console.log(fibonacci1(3));       // 2
// console.log(fibonacci1(4));       // 3
// console.log(fibonacci1(5));       // 5
// console.log(fibonacci1(12));      // 144
// console.log(fibonacci1(20));      // 6765

////////////////////////////////////////////////////////////////////////////////

// In the previous exercise, we developed a recursive solution for computing the nth
// Fibonacci number. In a language that is not optimized for recursion, some (but not all)
// recursive functions can be extremely slow and may require massive quantities of memory
// and/or stack space. If you tested for bigger nth numbers, you might have noticed that getting
// the 50th fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Examples:

// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050

// Note that JavaScript can accurately compute integers up to 16 digits long; this means that
// fibonacci(78) is the largest Fibonacci number that you can accurately compute with simple operations
// in JavaScript.

/*
Algorithm
----------
- Rewrite my recursive function as procedural
- Use the given value as the number of times to loop
- then compute the sum by manually calculating the sum
- return the fib num

*/

function fibonacci2(nth) {
  let currentNum = 1;
  let previousNum = 1;
  let fibNum;

  for (let count = 2; count < nth; count += 1) {
    fibNum = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = fibNum;
  }

  return fibNum;
}

// console.log(fibonacci2(20));       // 6765
// console.log(fibonacci2(50));       // 12586269025
// console.log(fibonacci2(75));       // 2111485077978050

/////////////////////////////////////////////////////////////////////////
// Our recursive fibonacci function from the previous exercise is not very efficient. It starts slowing down with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci function (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future reuse, instead of computing it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization saves calls to fibonacci(nth - 2) because the necess fibonacci(nth - 1).ary values have already been computed by the recursive calls to

// For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

// Hint: One approach to memoization is to use a lookup table, such as an object, for storing and accessing previously computed values.

function fibonacci3(f, obj={}) {
  if (f <= 2) {
    obj[f] = 1;
    return obj[f - 1] = 1;
  }

  obj[f] = fibonacci3(f - 1, obj) + obj[f - 2];
  return obj[f];
}

// console.log(fibonacci3(1));       // 1
// console.log(fibonacci3(2));       // 1
// console.log(fibonacci3(3));       // 2
// console.log(fibonacci3(4));       // 3
// console.log(fibonacci3(5));       // 5
// console.log(fibonacci3(12));      // 144
// console.log(fibonacci3(20));      // 6765

///////////////////////////////////////////////////////////////////////////////

// Write a function that takes a string and returns an object containing the following three properties:

//     the percentage of characters in the string that are lowercase letters
//     the percentage of characters that are uppercase letters
//     the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

/*
Problem
--------
Create an object that will track the type of characters in a string

INPUT:
string of at least one character

OUTPUT:
object with string stats

RULES:
- string will always have at least one character
- the string will be made up of upper, lower, or niether
- digits and puncutation count as neither
- empty string probably returns empty stats object
- the properties are categories
- the values are string representations of floats
- rounded to two decimal points
- percentage is (num_category_chars / total_chars) * 100
- space characters count as neither

Examples
---------
console.log(letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('a');
// { lowercase: '100.0', uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('');
// { lowercase: '100.0' }

Data Structure
---------------
object

Abstractions
-------------
None

Algorithm
----------
iterate over the string using a for loop to access each character

pass the object and the character into a separate helper method to determine the category

once the category is determined increment the value

Now i will have the total number of each character

Get the percentages for each category

*/

function letterPercentages(string) {
  if (string.length === 0) return '';

  const categories = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  for (let index = 0; index < string.length; index += 1) {
    categorizeCharacter(string[index], categories);
  }

  calculatePercentages(categories, string.length);

  return categories;
}

function calculatePercentages(obj, total) {
  let keys = Object.keys(obj);

  keys.forEach((key) => {
    obj[key] = ((obj[key] / total) * 100.00).toFixed(2)
  });

  return obj;
}

function categorizeCharacter(char, obj) {
  if (/[A-Z]/.test(char)) {
    obj.uppercase += 1;
  } else if (/[a-z]/.test(char)) {
    obj.lowercase += 1;
  } else {
    obj.neither += 1;
  }

  return obj;
}

// console.log(letterPercentages('abCdef 123'));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// console.log(letterPercentages('a'));
// // { lowercase: '100.0', uppercase: "0.00", neither: "100.00" }

// console.log(letterPercentages(''));
// // { lowercase: '100.0', uppercase: "0.00", neither: "0.00"}

///////////////////////////////////////////////////////////////////////////////

// A triangle is classified as follows:

//     Equilateral: All three sides are of equal length.
//     Isosceles: Two sides are of equal length, while the third is different.
//     Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:
/*
Problem
---------
Write a function that identifies what type of triangle is represented by the arguments given.

INPUT:
3 Numbers

OUTPUT:
string

RULES:
- Three types of triangles and invalid are the possible return values
- Equilateral is when all sides are the same
- Isosceles is when two sides are the same but the third is not
- Scalene is when all three sides are of different lengths
- A valid triangle is when the sum of the smallest sides is greater than the longest side and all sides must be greater than 0
- Invalid triangle is when the sum of the smaller sides is less than or equal to the legnth of the longest side.

Examples
---------
triangle(3, 3, 3); => "equilateral"
- 3 + 3 = 6
- 6 is greater than 3
- all the sides are the same length

triangle(3, 3, 1.5); => "isosceles"
- 3 + 1.5 = 4.5
- 4.5 is greater than 3
- two sides are the same, one is not

triangle(3, 4, 5); => "scalene"
- 3 + 4 = 7
- 7 is greater than 5
- all sides are different

triangle(0, 3, 3); => "invalid"
- one side is 0 so the triangle is invalid

triangle(3, 1, 1); => "invalid"
- 1 + 1 = 2
- 2 is not greater than 3

Data Structure
---------------
an array?

Algorithm
----------
How to check for a valid triangle?
- check the sum of the shortest sides and compare to the greatest side
- check if any sides are zero

How to check triangle type?
- compare to see if all values are the same
- compare if only two values are the same
- compare to see if the values are all different

Given a list of arguments save into an array

Check if any values are zero

Sort the array

take the two values that are the smallest and sum then make sure that the values sum to a value greater than the largest side

compare each element in the array
- check if they are all the same value using every? for equilateral

How to check if only two are the same?
- check if two different slices of the array are the same?

If not then the triangle must have different sides for everything and should be a scalene
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];

  if (invalidTriangle(sides)) return "invalid";

  if (sides.every((elem) => elem === sides[0])) {
    return "equilateral";
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return "isosceles"; 
  } else {
    return "scalene";
  }
}

function invalidTriangle(array) {
  array = array.sort()
  return array.some((side) => side === 0) || (array[0] + array[1]) < array[2]
}

// console.log(triangle(3, 3, 3));        // "equilateral"
// console.log(triangle(3, 3, 1.5));      // "isosceles"
// console.log(triangle(3, 4, 5));        // "scalene"
// console.log(triangle(0, 3, 3));        // "invalid"
// console.log(triangle(3, 1, 1));        // "invalid"

///////////////////////////////////////////////////////////////////////////////

// A triangle is classified as follows:

//     Right: One angle is a right angle (exactly 90 degrees).
//     Acute: All three angles are less than 90 degrees.
//     Obtuse: One angle is greater than 90 degrees.

// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

/*
Problem
--------
Write a function that, given three angles in degrees, checks to see what type of tringle it is: "right", "acute", and "obtuse"

INPUT:
three Numbers

OUTPUT:
string

RULES:
- The angles must add up to 180 degrees
- the triangle can be acute, right, obtuse, or invalid
- to be a right triangle, one angle must be 90
- to be a acute triangle all three angles must be less than 90 degrees
- to be obtuse one angle must be greater than 90 degrees
- all arguments provided will be valid

*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (sum(angles) !== 180 || angles.includes(0)) return "invalid";

  if (numberOf90Degrees(angles) === 1) {
    return "right";
  } else if (angles.every((angle) => angle < 90)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function sum(array) {
  return array.reduce((acc, num) => {
    return acc + num
  }, 0);
}

function numberOf90Degrees(array) {
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 90) counter += 1;
  }

  return counter;
}

// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"

///////////////////////////////////////////////////////////////////////////////

// Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

/*
Problem
--------
Determine how many Friday the 13ths there are in a given year

INPUT:
integer

OUTPUT:
integer

RULES:
- Argument is a year greater than 1752
- the number of friday the 13ths should be returned
- Date object should probably be used
- The number of the day of the week might be sunday: 0 ... friday: 5
- The month doesn't matter
- The day must be 13
- need count the total number in a year

Examples
---------
fridayThe13ths(1986);      // 1
- This year only had one friday the 13th

fridayThe13ths(2015);      // 3
- This year had three friday the 13ths

fridayThe13ths(2017);      // 2
- This year had two friday the 13ths

Data Structure
---------------
Date object
Could add each to an array, or might be easier to simply increment and count

Algorithm
----------
Main Steps

1. Determine a day is a friday and the 13th day of the month
  - Use a Date object
  - Create a new date object and check
  - OR increment the date object until the end of the year?
  - Start January 1st
  - Time doesn't matter

2. Track the number of days that are friday the 13ths
  - Initialize a counter 
  - If the date on the current iteration meets the above criteria then increment the counter

  new Date(year, month starts at 0, day)

  getDay() also starts at 0



*/

function fridayThe13ths(year) {
  let counter = 0;

  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) {
      counter += 1;
    }
  }

  return counter;
}

// console.log(fridayThe13ths(1986));      // 1
// console.log(fridayThe13ths(2015));      // 3
// console.log(fridayThe13ths(2017));      // 2
// console.log(fridayThe13ths(2023));      // 2

///////////////////////////////////////////////////////////////////////////////

// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).
 
// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.
 
// NOTE: The largest possible featured number is 9876543201.

/*

Problem
--------
Keywords:
featured number = odd, multiple of 7, digits occur once within number

Given a starting value, find the next featured number or return an error message if there is no next featured number

INPUT:
number

OUTPUT:
number

RULES:
- see definition of a featured number
- find next featured number if possible
- a next featured number may not exist
- limit for featured number is given as 9876543201

Examples
---------
featured(12);
- 21 since it's odd, digits are unique and multiple of 7

featured(997);
- 1029 since odd, digits are unique and multiple of 7

featured(9876543201);
 - "There is no possible number that fulfills those requirements."
 - since any value after this surpasses the limit for a featured number

Data Structure
---------------
no structure
working with numbers

Algorithm
----------
Main steps
1. Find value greater than the given argument

2. Determine if the value is a featured number
   - check if odd
   - check if multiple of 7
   - check if all the values within the number are unique by having a separate array and adding each digit to the array. Before adding each digit determine if the value is already present within the separate array. If it is separate then the number is not a valid featured number

*/

function featured(start) {
  for (let currNum = start + 1; currNum <= 9876543201; currNum += 1) { if (currNum % 2 !== 0 && currNum % 7 === 0 && uniqueDigits(currNum)) {
      return currNum;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}

function uniqueDigits(num) {
  let storage = [];
  let array = String(num).split('');

  for (let index = 0; index < array.length; index += 1) {
    if (storage.includes(array[index])) {
      return false;
    }
    storage.push(array[index]);
  }

  return true;
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

///////////////////////////////////////////////////////////////////////////////

// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
Problem
--------
Obtain the difference of the sum of 1 to n and taking the square, verses taking the square of each value 1 to n and summing those values

INPUT:
number

OUTPUT:
number

RULES:
- one operand will be the sum of values 1 - n squared
- the other operand will be the sum of the squared values 1 - n

Examples
---------
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

Data Structure
---------------
Maybe an array?
Or just loop using for?

Algorithm
-----------
Loop through all values 1 - n
track the sum of both needed operands
take the difference at the end

*/

function sumSquareDifference(num) {
  let sumThenSquare = 0;
  let squareThenSum = 0;

  for (let n = num; n > 0; n -= 1) {
    sumThenSquare += n;
    squareThenSum += n**2;
  }

  return sumThenSquare**2 - squareThenSum;
}

// console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// console.log(sumSquareDifference(10));     // 2640
// console.log(sumSquareDifference(1));      // 0
// console.log(sumSquareDifference(100));    // 25164150

///////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

/*
Problem
--------
Write a function that uses bubble sort, where the sorting takes place in place, mutating the array

INPUT:
array

OUTPUT:
sorted array

RULES:
- mutate the array
- sort the array while iterating through the array
- when the array is iterated through and no swap occurs the array is done
- the array can contain strings or numbers
- what if any array is empty?
- 

Examples
---------
bubbleSort([6, 2, 7, 1, 4]);
=> [1, 2, 4, 6, 7]

Data Structures
----------------
Array

Abstractions
-------------
can use forEach() since it iterates through the whole array

Algorithm
----------
Main Steps:

Track when a swap occurs
- Use a tracker to determine when a swap occurs
- Intialize to false when iterating starts
- When the swap occurs flip the switch and continue iterating

Iterate through the array as many times as it takes to sort
- Keep iterating if switch is true

Determine when no swap occured so the array is sorted
- Don't iterate if switch is flipped to true

Return the sorted array
- Return mutated array

*/

function bubbleSort(array) {
  let swapper;

  do {
    swapper = false;

    array.forEach((elem, index) => {
      let nextElement = array[index + 1];

      if (elem > nextElement) {
        [array[index], array[index + 1]] = [nextElement, elem];
        swapper = true;
      }
    });
  } while (swapper);

  return array;
}

// const array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// const array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

///////////////////////////////////////////////////////////////////////////////

// let ladder = ''

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
//   if (ladder !== '') {
//     ladder += '-'
//   }

//   ladder += word
// })

// console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

///////////////////////////////////////////////////////////////////////////////

const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let match = false;

  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      match = true;
    }
  });

  return match;
}

// console.log(isReserved('monkey')); // false
// console.log(isReserved('patch'));  // false
// console.log(isReserved('switch')); // should be: true

///////////////////////////////////////////////////////////////////////////////

const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

// addTask('oil change');
// addTask('dentist');
// addTask('homework');

// completeTasks(3);
// displayTaskList();

///////////////////////////////////////////////////////////////////////////////

function range(start, end) {
  const range = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

// console.log(range(10, 20));
// console.log(range(5));

///////////////////////////////////////////////////////////////////////////////

const memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^[A-Za-z]+ [A-Za-z]+$/).test(name);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

// addMember('Laura Carlisle', '444-2223');
// addMember('Rachel Garcia', '232-1191');
// addMember('Earl 5mith', '331-9191');
// addMember('Earl     Smith', '331-9191');
// addMember('EarlSmith', '331-9191');

// console.log(memberDirectory);

///////////////////////////////////////////////////////////////////////////////

function valence(element) {
  switch (element) {
    case 'H': return 1;
    case 'C': return 4;
    case 'N': return 5;
    case 'O': return 6;
    // omitting the rest
  }
}

function valenceOfMolecule(...args) {
  let sum = 0;

  args.forEach(atom => {
    const match   = /([a-zA-Z]+)([0-9]*)/.exec(atom);
    const element = match[1];
    const number  = parseInt(match[2]) || 1;

    sum += number * valence(element);
  });

  return sum;
}

// Example

// console.log('Number of valence electrons');
// console.log('---------------------------');
// console.log(`Water:     ${String(valenceOfMolecule('H2', 'O'))}`);
// console.log(`Propane:   ${String(valenceOfMolecule('C3', 'H8'))}`);
// console.log(`Vitamin C: ${String(valenceOfMolecule('C6', 'H8', 'O6'))}`);
// console.log(`Caffeine:  ${String(valenceOfMolecule('C8', 'H10', 'N4', 'O2'))}`);

// Expected output:
// Number of valence electrons
// ---------------------------
// Water:     8
// Propane:   20
// Vitamin C: 68
// Caffeine:  74

///////////////////////////////////////////////////////////////////////////////

function average(nums) {
  const sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort((a, b) => a - b);

  let median;
  const length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

// const quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
// const quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
// const quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
// const quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// // should all log 'true':
// console.log(average(quarter1ExamScores) === 86.8);
// console.log(average(quarter2ExamScores) === 86.3);
// console.log(average(quarter3ExamScores) === 83.7);
// console.log(average(quarter4ExamScores) === 88.8);

// console.log(median(quarter1ExamScores) === 89.5);
// console.log(median(quarter2ExamScores) === 89.5);
// console.log(median(quarter3ExamScores) === 87);
// console.log(median(quarter4ExamScores) === 89.5);

///////////////////////////////////////////////////////////////////////////////

const TODAY = toDate("2018-08-05");

function toDate(string) {
  return new Date(`${string}T00:00:00`);
}

function toString(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

function isInThePast(date) {
  return date < TODAY;
}

function isWeekday(date) {
  return date.getDay() >= 1 &&
         date.getDay() <= 5;
}

const myCalendar = {
  "2018-08-13": ["JS debugging exercises"],
  "2018-08-14": ["Read 'Demystifying Rails'", "Settle health insurance"],
  "2018-08-15": ["Read 'Demystifying Rails'"],
  "2018-08-16": [],
  "2018-08-30": ["Drone video project plan"],
  "2018-09-10": ["Annual servicing of race bike"],
  "2018-09-12": ["Study"],
  "2018-11-02": ["Birthday Party"],
  "2018-11-03": ["Birthday Party"],
};

const offeredClasses = {
  "Back To The Future Movie Night": ["2018-07-30"],
  "Web Security Fundamentals": ["2018-09-10", "2018-09-11"],
  "Pranayama Yoga For Beginners": ["2018-08-30", "2018-08-31", "2018-09-01"],
  "Mike's Hikes": ["2018-08-16"],
  "Gordon Ramsay Master Class": ["2018-09-11", "2018-09-12"],
  "Powerboating 101": ["2018-09-15", "2018-09-16"],
  "Discover Parachuting": ["2018-11-02"],
};

function getCompatibleEvents(classes, calendar) {
  function isAvailable(date) {
    const dateStr = toString(date);
    console.log(dateStr);
    console.log(calendar);
    console.log(calendar[dateStr]);
    // console.log(calendar[dateStr].length);

    return !calendar[dateStr] || calendar[dateStr].length === 0;
  };

  const compatibleClasses = [];

  Object.keys(classes).forEach(className => {
    const classDates = classes[className].map(toDate);

    if (classDates.some(isInThePast)) {
      return;
    }

    if (classDates.filter(isWeekday).every(isAvailable)) {
      compatibleClasses.push(className);
    }
  });

  return compatibleClasses;
}

// console.log(getCompatibleEvents(offeredClasses, myCalendar));
// expected: ["Mike's Hikes", "Powerboating 101"]

///////////////////////////////////////////////////////////////////////////////

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0;
  pomodoro();
}

pomodoro();

///////////////////////////////////////////////////////////////////////////////
