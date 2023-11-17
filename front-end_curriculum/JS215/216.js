"use strict"
// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the result string is the one encountered earliest in the array.

// Example

// distinctString(["d","b","c","b","c","a"], 2); // "a"
// distinctString(["d","B","c","b","c","a"], 2); // "B"
// distinctString(["dog","bob","cat","bob","cat","apple"], 2); // "apple"
// distinctString(["dog","Bob","cat","bob","cat","apple"], 2); // "Bob"
// distinctString(["d","b","c","b","c","a"], 11); // ""
// distinctString(["d","b","c","b","c","a"], -2); // ""
// distinctString(["d","b","c","b","c","a"], 0); // ""
// distinctString(["b","c","b","c"], 2); // ""
// distinctString([], 2); // ""
// distinctString([], 0); // ""

/*

Problem
--------
Given an array find a distinct string based on the argument k. The k argument represents whether the string is 1st distinct 2nd distinct etc.

INPUT:
array of strings, number

OUTPUT:
string


** did not ask about number of arguments changing.
RULES:
- first argument only array input
- second argument can be any numeric value
- Number can be greater than the length of the array
- the array might be empty return empty string
- All elements will be strings
- No NaN input for k
- No Infinity or -Ibnfinity
- No sparse arrays
- Case does matter
- If not distinct string return empty string
- K does not have to be postitive
- No floats
- If there are fewer than k distinct strings return empty array

Examples
---------

distinctString(["d","b","c","b","c","a"], 2);
"d" and "a" and distinct as in they are not repeated in the array
Since k is 2 this means "a" will be returned since it occurs 2nd

distinctString(["d","B","c","b","c","a"], 2);
"d" and "B" are distinct
again "B" will be returned since it's second

distinctString([], 0);
No elements, k is 0
Return an empty string!

Data Structure
---------------
Array
Object
Examining Strings for case and such

Algorithm
----------
Main Steps:

Validation check
- Array is empty using length comparison
- Use Object.keys to double check if array is empty
- If the array is empty or not a valid array => return empty string

1. Determining which strings are distinct in the array
- Filter the array for strings that are distinct
  => write a helper function that will count the occurence of every element
  => if the occurence is only 1 then I'll keep the element
  => otherwise do not keep non-distinct values
- Should return a filtered array with element that only occur once

2. Use k to determine which distrinct string I should return from the array
- Use k to obtain the index (k - 1) to get the result string

3. Return the string or an empty string

*/

// function distinctString(array, k) {
//   if (!validArguments(array, k)) return "";

//   distinctElements = array.filter((str) => {
//     return count(array, str) === 1;
//   });

//   return distinctElements[k - 1] || "";
// }

// function validArray(array) {
//   return array.length !== 0 && Object.keys(array).length !== 0;
// }

// function validArguments(array, k) {
//   if (validArray(array)) {
//     return k > 0 && k < array.length;
//   }
//   return false;
// }
  
// function count(array, elem) {
//   return array.reduce((tally, string) => {
//       if (string === elem) {
//         return tally += 1;
//       } else {
//         return tally;
//       }
//   }, 0);
// }

// console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
// console.log(distinctString(["d","B","c","b","c","a"], 2)); // "B"
// console.log(distinctString(["dog","bob","cat","bob","cat","apple"], 2)); // "apple"
// console.log(distinctString(["dog","Bob","cat","bob","cat","apple"], 2)); // "Bob"
// console.log(distinctString(["d","b","c","b","c","a"], 11)); // ""
// console.log(distinctString(["d","b","c","b","c","a"], -2)); // ""
// console.log(distinctString(["d","b","c","b","c","a"], 0)); // ""
// console.log(distinctString(["b","c","b","c"], 2)); // ""
// console.log(distinctString([], 2)); // ""
// console.log(distinctString([], 0)); // ""

///////////////////////////////////////////////////////////////////////////////

// Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

// You are not allowed to sort the array.

// Example

// thirdMax([3, 2, 1]); // 1

/*
Problem
--------
Given an array find the 3rd greatest or largest number. If there isn't three elements or they are all the same, return the greatest number from the given array.

INPUT:
nums (array of numbers)

OUTPUT:
number

RULES:
- Do not care about 1st greatest unless 3rd greatest doesn't exist
- The array will be given only with numbers as elements
- It is possible there will be less than 3 elements
- Its possible the numbers will be negative
- If there is a number return a number, else return NaN
- Array will be numbers or NaN
- No infinity or -infinity
- Array may contain empty slots, sparse array (if no number return NaN)
- Only one argument will be given
- Order doesn't matter
- Return a number or NaN
- No floats
- if empty array return NaN
- No sorting of the array
- No mutating the array
- 


Examples
---------
thirdMax([3, 2, 1]);      // 1
thirdMax([3, 2, 1, 1]);   // 1
thirdMax([3, 2, 2, 1]);   // 1
thirdMax([4, 3, 2, 1]);   // 2
thirdMax([3]);            // 3
thirdMax([3, -2, 1]);     // -2
thirdMax([NaN, 3, 2, 1]); // 1
thirdMax([NaN]);          // NaN
thirdMax([]);             // NaN

Data Structure
---------------
Array

Algorithm
----------
Main Steps:

1. Determine if the array is valid
  => not be empty
  => contain numbers
  => else return NaN

2. Determine the 3rd largest number within the array
  => make copy of array
  => get all unique elements using filter to count the number of occurences
  => Use reduce to get the max value of the array (use max function)
  => remove value from array
  => repeat 3 times
  => return the third largest number
*/

// function thirdMax(nums) {
//   if (nums.length > 0 && /\d/.test(nums.join())) {
//     let numsCopy = unique(nums.slice());
//     let max;

//     if (numsCopy.length < 3) {
//       max = Math.max(...numsCopy);
//       return max;
//     } else {
//       for (let i = 0; i < 3; i += 1) {
//         max = Math.max(...numsCopy);
//         let index = numsCopy.indexOf(max);
//         numsCopy = numsCopy.slice(0,index).concat(numsCopy.slice(index + 1));
//       }
      
//       return max;
//     }
    
//   }

//   return NaN;
// }

// function unique(array) {
//   let uniqueElements = [];

//   array.forEach((elem) => {
//     if (!uniqueElements.includes(elem) && !Number.isNaN(elem)) {
//       uniqueElements.push(elem);
//     }
//   });

//   return uniqueElements;
// }

// console.log(thirdMax([3, 2, 1]));      // 1
// console.log(thirdMax([3, 2, 1, 1]));   // 1
// console.log(thirdMax([3, 2, 2, 1]));   // 1
// console.log(thirdMax([4, 3, 2, 1]));   // 2
// console.log(thirdMax([3]));            // 3
// console.log(thirdMax([3, -2, 1]));     // -2
// console.log(thirdMax([NaN, 3, 2, 1])); // 1
// console.log(thirdMax([NaN]));          // NaN
// console.log(thirdMax([]));             // NaN

///////////////////////////////////////////////////////////////////////////////

// Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.
/*
Problem
--------
Print all prime numbers given a string

INPUT:
string

OUTPUT:
printed array

RULES:
- prime numbers only are printed
- prime number is a number that is only divisible by 1 and itself
- 1 is not considered a prime number
- the prime numbers should be output as an array object
- the strings consistent of alphabetical characters and digits
- string may not contain any prime numbers, log empty array
- empty string returns and empty array
- case doesn't mattter
- iinput will always be a string
- if number is not prime return an empty array
- always be an argument passed into the array
- the letters between number act as spaces
- spaces are spaces
- if digits are together do not separate them
- No special characters

Examples
---------
primeNumberPrinter("a4bc2k13d");   // [2, 13]
primeNumberPrinter("a4bc13k2d");   // [13, 2]
primeNumberPrinter("a4bc123d");    // [123]
primeNumberPrinter("a4bc23d");     // [23]
primeNumberPrinter("a4bc2k1 3d");  // [2, 3]
primeNumberPrinter("a4bc13k20d");  // [13]
primeNumberPrinter("13");          // [13]
primeNumberPrinter("10");          // []
primeNumberPrinter("a4bc1kd");     // []
primeNumberPrinter("");            // []

Data Structure
---------------
Array
Filter 

Algorithm
----------
Main Steps:

1. obtain numeric substrings from the given string
- Regex to match all the numbers or varying lengths that are separated by alphabetic characters (a-z then digits then a-z again)
- once i match the right characters I can return that array

2. take numeric substrings and filter for prime only
- convert each string digit into a number value
- then check if the value is prime
  => return false is number is 1
  => iterate from 1 to the digit and determine if the value is divisible by anything
  => if it is divisble by things other than 1 return false
  => return true if not
- return new array

3. log prime numbers

*/
// function primeNumberPrinter(str) {
//   let numericSubstrings = str.match(/\d+/g) || [];

//   console.log(
//     numericSubstrings.map((elem) => Number(elem))
//                      .filter((num) => {
//                        return isPrime(num);
//                       })
//   );
// }

// function isPrime(number) {
//   if (number <= 1) return false;

//   for (let n = 2; n < number; n += 1) {
//     if (number % n === 0) return false; // ((2**(n - 1)) % n) == 1
//   }

//   return true;
// }

// primeNumberPrinter("a4bc2k13d");   // [2, 13]
// primeNumberPrinter("a4bc13k2d");   // [13, 2]
// primeNumberPrinter("a4bc123d");    // []
// primeNumberPrinter("abc");         // []
// primeNumberPrinter("a4bc23d");     // [23]
// primeNumberPrinter("a4bc2k1 3d");  // [2, 3]
// primeNumberPrinter("a4bc13k20d");  // [13]
// primeNumberPrinter("13");          // [13]
// primeNumberPrinter("10");          // []
// primeNumberPrinter("a4bc1kd");     // []
// primeNumberPrinter("");            // []

///////////////////////////////////////////////////////////////////////////////

// ​ Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

/*
Problem
--------
Given an array with nested arrays, flatten the array and remove duplicate elements. For digits and digit strings consider them as the same and remove the second occurrance of the digit (digit or digit string).

INPUT:
Array of arrays

OUTPUT:
array with no duplicate elements

RULES:
- Digit strings and digits are considered equivalent
- Empty array is valid input; return empty array
- One array argument will always be given
- There is no limit on the number of element arrays the argument can contain
- Array will only have array elements
- Nested array will only contain strings or numbers or emmpty slots
- The nested arrays do not have to be the same length
- "A" is not the same as "a"
- Ignore empty slots for sparse arrays; but include in result
- Potential NaN input
- Array elements may no contain elements
- 

Examples
---------
flattenAndUnique([]);                              // []
flattenAndUnique([[], []]);                        // []
flattenAndUnique([[1, 2], ['2', 4], ['a', 'b']]);  // [1, 2, 4, 'a', 'b']
flattenAndUnique([['a', 4], ['A', 'b']]);          // ['a', 4, 'A', 'b'] 
flattenAndUnique([[1, NaN, 3, 4, 5], [6, 7, 8]]);  // [1, NaN, 3, 4, 5, 6, 7, 8]
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]);   // [1, 2, 3, 4, 5, 'a']
flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']]);   // [1, 2, '3', 4, 5, 'a']

let a = ['a', 'b', 'c'];
a.length = 4;

let d = ['d'];
d.length = 2;

flattenAndUnique([a, d]);             // ['a', 'b', 'c', <1 empty item>, 'd']

Data Structure
---------------
Array

Algorithm
----------
Main Steps:
1. Merge the arrays that are nested by adding new elements one at a time
- check length of nested array vs object keys length
- add any potenital missing empty slots
 - also determine which elements are unique by checking if they already exist in the array I'm creating
 - Need to check if the letters are already present in the array I'm creating
   => check if typeof String
   => to check letters I can see if the eleme matches a regex
   => I could alos have numbers that are strings
   => if yes just check if the character is present
 - Need to check if the digits as numbers or stirngs are repeating
   => check if typeof Number
   => check if number or string number is present in the array I'm creating


   3 basic scenarios
   - string letter
   - string number
   - number (incl. NaN)
2. Return new array with any empty slots added
*/

// function flattenAndUnique(array) {
//   let emptySlots = [];
//   let newArray = [];

//   array.forEach((elemArray) => {
//     let length = elemArray.length;
//     let numberOfKeys = Object.keys(elemArray).length;

//     if (length > numberOfKeys) {
//       emptySlots.push(length - numberOfKeys);
//     }

//     elemArray.forEach((elem) => {
//       if (typeof elem === 'number' || /\d/.test(elem)) {
//         if (!newArray.includes(Number(elem)) && !newArray.includes(String(elem))) {
//           newArray.push(elem);
//         }
//       } else if (!newArray.includes(elem)) {
//           newArray.push(elem);
//       }
//     });
//   });
  
//   let uniqueSlot = emptySlots[0] || 0;
//   newArray.length = (newArray.length + uniqueSlot);
//   console.log(newArray);
// }

// flattenAndUnique([]);                              // []
// flattenAndUnique([[], []]);                        // []
// flattenAndUnique([[1, 2], ['2', 4], ['a', 'b']]);  // [1, 2, 4, 'a', 'b']
// flattenAndUnique([['a', 4], ['A', 'b']]);          // ['a', 4, 'A', 'b'] 
// flattenAndUnique([[1, NaN, 3, 4, 5], [6, 7, 8]]);  // [1, NaN, 3, 4, 5, 6, 7, 8]
// flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]);   // [1, 2, 3, 4, 5, 'a']
// flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']]);   // [1, 2, '3', 4, 5, 'a']

// let a = ['a', 'b', 'c'];
// a.length = 4;

// let d = ['d'];
// d.length = 2;

// flattenAndUnique([a, d]);             // ['a', 'b', 'c', <1 empty item>, 'd']

///////////////////////////////////////////////////////////////////////////////

// Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.

// The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.

// function madlibs(template) {
//   // ...
// }

// // These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

// madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

/*
Problem
--------
Make a madlibs that uses a template and generates the words for the madlibs

INPUT:
template (string)

OUTPUT:
multiline string

RULES:
- madlibs should contain noun, adverb, verb, adjective
- template is provided by caller
- each word used should be randomly generated
- No quotations are necessary its just for the example purposes

Data Structure
---------------
String

Algorithm
----------
Main Steps:
Examine the string repeatedly to replaced all the words
- Given my random word object I'll iterate through the keys and replace each occurance of the key in the given string

When replacing all the words, replace with randomly generated words
- Use regex to replace the words using replace function without global attribute
- since the object will have an array of words as values, use random index to select the appropirate word (repeat? since not deleted from array)

Repeat for as many words neceessary
- Only breaking if the string is equal to itself after changes occur
There are, however, many common adverbs that do not end in -ly, such as again, also, just, never, often, soon, today, too, very, and well. 
Return the new string
*/

// template = "Wey wook it's widward.\nWidward's woing to work.\nWhere does he work?\nAt the wusty wab?\n"

// template = "Wey wook it's [noun1].\n[noun1]'s [verb] to [noun2].\nWhere does he [noun2]?\nAt the [adjective] [noun3]?\n"

// RANDOM_WORDS = {
//   noun1: ['widward', 'watrick', 'wongebob', 'wandy', 'mr. wabs'],
//   noun2: ['work', 'wome', 'whool'],
//   noun3: ['wab', 'whale', 'wobster', 'wucket'],
//   verb: ['woing', 'wunning', 'wying', 'walling'],
//   adjective: ['wusty', 'wuddly', 'willer', 'wool', 'wold', 'wxcellent', 'weat', 'wittle'],
// }

// function madlibs(template) {
//   Object.keys(RANDOM_WORDS).forEach((partOfSpeech) => {
//     let oldTemplate;
//     do {
//       oldTemplate = template;
//       template = template.replaceAll(`[${partOfSpeech}]`, randomWord
//       (partOfSpeech));
//     } while (oldTemplate !== template)
//   });

//   console.log(template);
// }

// function randomWord(key) {
//   let max = RANDOM_WORDS[key].length;
//   let randomIndex = Math.floor(max - Math.random() * max);
//   return RANDOM_WORDS[key][randomIndex];
// }

// madlibs(template);

// const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
//                 '${verb} the ${adjective} yellow ' +
//                 '${noun}, who ${adverb} ${verb} his ' +
//                 '${noun} and looks around.';

// const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

// function madlibs(template) {
//   const REPLACEMENT_TEXTS = {
//     adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
//     noun: ['fox', 'dog', 'head', 'leg', 'tail'],
//     verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
//     adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
//   };

//   function replaceText(match) {
//     const key = match.replace(/[^a-z]/g, '');
//     const index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
//     return REPLACEMENT_TEXTS[key][index];
//   }

//   return template.replace(/\${[a-z]+}/g, replaceText);
// }

///////////////////////////////////////////////////////////////////////////////


// Transpose 3x3

// A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

// To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

// 1  4  3
// 5  7  9
// 8  2  6

// Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

/*
Problem
--------
Given a nested array (3x3) swap the columns for rows and the rows for columns (transpose) and return a new array with these changes

INPUT:
2D array

OUTPUT:
new 2D array

RULES:
- I'm assuming the array I am given will alaways be 3 x 3
- The first column 1, 4, 3 will be the first row of the new array, etc.
- values of the array are integers
- do not want to mutate the original

Examples
---------

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

[[1...],  => [1, 5, 8]
[5...],
[8...]]

first obtain the index 0 index 0 element
second obtain the index 1 index 0 element
third obtain the index 2 index 0 element

first obtain the index 0 index 1 element
second obtain the index 1 index 1 element
third obtain the index 2 index 1 element

Data Structures
---------------
Array

Abstractions
------------
forEach

Algorithm
----------
Main Steps:
1. construct the new array to return using array new and fill potentially
- use a helper method to add empty arrays to the newmatrix
- repeat for the length of matrix

2. obtain the first column by adding the elements to their respective rows
- iterating through the given array use nested iteration
- use the index to add the current element to the corresponding index in the new array
- this will add my elements to the empty array slots
- move on to the next row and start next nested iteration

3. Repeat for all rows

4. return my newly created array

*/

// function transpose(matrix) {
//   let newMatrix = createEmptyMatrix(matrix.length);

//   matrix.forEach((row) => {
//     row.forEach((elem, ind) => {
//       newMatrix[ind].push(elem);
//     });
//   });

//   console.log(newMatrix);
// }

// function createEmptyMatrix(number) {
//   let arr = [];
//   for (let count = number; count > 0; count -= 1) {
//     arr.push([]);
//   }

//   return arr;
// }

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6]
// ];

// const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

///////////////////////////////////////////////////////////////////////////////

// In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works with any MxN matrix with at least one row and one column.

/*
Problem
-------
Rework the transpose function so that it will take any number of rows and split them into columns, or given a column turn it into a single row.

INPUT:
Matrix (n x n)
=> 1 x 4 => 4 x 1
=> 4 x 1 => 1 x 4
=> 1 x 1 => 1 x 1
=> 3 x 5 => 5 x 3

OUTPUT:
transposed matrix

RULES:
- Same as before except the matrix can be any size
- minimum size is at least one row and one column

Data structure
---------------
Arrays

Algorithm
----------
Main Steps:
1. construct the new array
- use a helper method to add empty arrays to the newmatrix
- use the length of the nested array
- repeat for the length of matrix

2. obtain the first column by adding the elements to their respective rows
- iterating through the given array use nested iteration
- use the index to add the current element to the corresponding index in the new array
- this will add my elements to the empty array slots
- move on to the next row and start next nested iteration

3. Repeat for all rows

4. return my newly created array

*/

// function transpose(matrix) {
//   let newMatrix = createEmptyMatrix(matrix[0].length);

//   matrix.forEach((row) => {
//     row.forEach((elem, ind) => {
//       newMatrix[ind].push(elem);
//     });
//   });

//   console.log(newMatrix);
// }

// function createEmptyMatrix(number) {
//   let arr = [];
//   for (let count = number; count > 0; count -= 1) {
//     arr.push([]);
//   }

//   return arr;
// }

// transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
// transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
// transpose([[1]]);                     // [[1]]

// transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

///////////////////////////////////////////////////////////////////////////////

// Rotating Matrices

// As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6

// is represented by the following array of arrays:

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8

// A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

// 3  4  1
// 9  7  5

// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.

/*

Problem
--------
Given a matrix rather than go from top to bottom to obtain each row, rotate the matrix to the right by 90 degrees. In other words fill the rows starting from the bottom of the column to the top of the column.

INPUT:
matrix (n x m)

OUTPUT:
rotated matrix (m x n)

RULES:
- Rotate by 90 degrees only
- similar to transpose function

Examples
---------
const matrix1 = [               transposed(not rotated)
  [1, 5, 8],        [3, 9, 6]    [1, 4, 3]
  [4, 7, 2],        [4, 7, 2]    [5, 7, 9]
  [3, 9, 6],        [1, 5, 8]    [8, 2, 6]
];

// 3  4  1
// 9  7  5
// 6  2  8



*/

// function rotate90(matrix) {
//   let newMatrix = createEmptyMatrix(matrix[0].length);

//   matrix.slice().reverse().forEach((row) => {
//     row.forEach((elem, ind) => {
//       newMatrix[ind].push(elem);
//     });
//   });

//   return newMatrix;
// }

// function createEmptyMatrix(number) {
//   let arr = [];
//   for (let count = number; count > 0; count -= 1) {
//     arr.push([]);
//   }

//   return arr;
// }

// const matrix1 = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// const matrix2 = [
//   [3, 7, 4, 2],
//   [5, 1, 0=, 8],
// ];

// const newMatrix1 = rotate90(matrix1);
// const newMatrix2 = rotate90(matrix2);
// const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

// console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

///////////////////////////////////////////////////////////////////////////////

// Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.
/*
Problem
--------
combine two arrays and return them in sorted order without sorting the resulting array.

INPUT:
2x array

OUTPUT:
array in sorted order

RULES:
- two arrays must be combined
- two arrays must be sorted as they are combined
- array will only contain integers
- array can be of any length
- if empty array return empty array
- one argument can be an empty array
- if there are double of the argument sort them next to eachother

Examples
---------
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
=> compare 1 & 2
  => add 1 to merged array
=> compare 5 & 2
  => add 2 to merged array
=> compare 5 & 6
  => add 5 to merged array
=> compare 9 & 6
  => add 6 to merged array
=> compare 9 & 8
  => add 8 to merged array
=> nothing to compare to 9
  => add 9 to merged array

merge([2, 5, 9], [1, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([2, 2, 9], [1, 1, 8]);      // [1, 1, 2, 2, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]

Data Structure
--------------
Array

Algorithm
---------
merge([1, 5, 9], [2, 6, 8]);
Main steps:
1. Iterate through the longest array
- for every element in the longest array... 
- set index for shortest array element 

2. compare elements to see which element to add to merged array
- if the current element in longest array is greater than the current element of shortest array...add the current element from shortest array
=> increment index  index = 3
=> repeat
- if not then add element from longest array 

3. return merged array
*/

// function merge(arr1, arr2) {
//   let longArr = arr1.length < arr2.length ? arr2 : arr1;
//   let shortArr = longArr === arr1 ? arr2 : arr1;
//   let index = 0;
//   let mergedArr = [];

//   longArr.forEach((elem1) => {
//     while (elem1 > shortArr[index] && index < shortArr.length) {
//       mergedArr.push(shortArr[index]);
//       index += 1;
//     }

//     mergedArr.push(elem1);
//   });

//   if (index < shortArr.length) {
//     mergedArr = mergedArr.concat(shortArr.slice(index));
//   }

//   return mergedArr;
// }


// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([2, 5, 9], [1, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([2, 2, 9], [1, 1, 8]);      // [1, 1, 2, 2, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

///////////////////////////////////////////////////////////////////////////////

// Merge Sort

// Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

// #        ___
// #  .  .(  _  )
// #   \/_\ (G)/_
// #   '~-~-~-~-~`

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

/*
Problem
--------
Create a bunch of nested arrays and then sort them using the function we already made.

The sorting will occur in the process of re-flattening the nested array object

INPUT:
array of integers
array of strings

OUTPUT: single sorted array

RULES:
- must use the merge sort method
- the elements must be paired up and nested repeatedly until they are single element arrays
- the sorting occcurs for each pair of nested arrays until the end result is achieved
- strings or integers only
- any number of elements
- empty array?
- if odd number then one will be pairless
- recursion

Examples
---------
mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
[['Sue', 'Pete', 'Alice', 'Tyler'], ['Rachel', 'Kim', 'Bonnie']]
...split in half

[[['Sue', 'Pete'], ['Alice', 'Tyler']], [['Rachel', 'Kim'], ['Bonnie']]]
...split halves in half

[[[['Sue'], ['Pete']], [['Alice'], ['Tyler']]], [[['Rachel'], ['Kim']], ['Bonnie']]]
...split quarters into half

...done nesting

[[['Pete', 'Sue'], ['Alice', 'Tyler']], [['Kim', 'Rachel'], ['Bonnie']]]
...combine quarters

[['Alice', 'Pete', 'Sue', 'Tyler'], ['Bonnie', 'Kim', 'Rachel']]
...combine halves

// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

Data Structure
---------------
Array

Abstraction
------------
possibly using reduce
just using iteration with forEach
- we are transforming but returning different number of elements
- undoing all of that
- make use of the merge method I just made

Algorithm
----------
Main Steps:
1. Create a deep nested array object
- split array,
pass split array into current function
- retrun array when length is 1 of split arrays


2. Sort each pair of nested arrays

3. Return entire sorted array

*/

// function mergeSort(array) {
//   if (array.length <= 1) return array;
//   let half = Math.ceil(array.length / 2);

//   let nestedArray = [
//     mergeSort(array.slice(0, half)),
//     mergeSort(array.slice(half))
//   ];

//   return merge(nestedArray[0], nestedArray[1]);
// }

// console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
// console.log(mergeSort([5, 3]));                 // [3, 5]
// console.log(mergeSort([])); 
// console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

// console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

///////////////////////////////////////////////////////////////////////////////

// Binary Search

// It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the yellow pages to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.

// This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.

// A binary search algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being sorted. Going back to the yellow pages example, let's say that we're searching the following yellowPages data for the search item 'Pizzeria':

// // Yellow pages list of business names data:
// const yellowPages = ['Apple Store', 'Bags Galore',
//                      'Bike Store',  'Donuts R Us',
//                      'Eat a Lot',   'Good Food',
//                      'Pasta Place', 'Pizzeria',
//                      'Tiki Lounge', 'Zooper'];

// With a linear search, we would have to sequentially go through each of the items until we found the search item 'Pizzeria'. In a binary search, however, the following sequence happens:

//     Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
//     If the middle value is equal to 'Pizzeria', stop the search.
//     If the middle value is less than 'Pizzeria':
//         Discard the lower half, including the middle value --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
//         Repeat the process from the top, using the upper half as the starting data --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
//     If the middle value is greater than 'Pizzeria', do the same as the previous step, but with opposite halves.

// Using the process described above, the search successfully ends on the second iteration when the middle value is 'Pizzeria'.

// Implement a binarySearch function that takes an array and a search item as arguments, and returns the index of the search item if found, or -1 otherwise. You may assume that the array argument will always be sorted.

// Examples:

/*
Problem
--------
Given an array and a item use binary search to locate the index of the item in the array or return -1 if it doesn't exist

INPUT:
array
item (string or number)

OUTPUT:
integer that represents the array index
or 
-1

RULES:
- binary search
  => get the middle item of the current array
  => if greater than the middle item, discard first half and focus on second not including the middle item
  => if less than middle item, discard second half and focus on the first not including the middle item
  => continue to compare middle item to the search item
- input can strings or integers
- Case is relevant but not sensitive "A" & "a" will have the same "value"
- Array is already sorted
- return -1 if item can't be found

Examples
--------
array: ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
item: 'Tyler'

array length: 7
half index: 7 - 1 / 2 => 3
half length: 7 / 2 => 3.5 => 3

middle element: 'Pete'
middle index: 3
current index: 3
comparison: 'Pete' === 'Tyler' => false
comparison: 'Pete' < 'Tyler'   => true
comparison: 'Pete' > 'Tyler'   => false

['Rachel', 'Sue', 'Tyler']
item: 'Tyler'
3 (+ 1) -> 5
max index of array

array length: 3
half index: 3 - 1 / 2 => 1
half length: 3 / 2 => 1.5 => 1

middle element: 'Sue'
middle index: 1
current index: 5
comparison: 'Sue' === 'Tyler' => false
comparison: 'Sue' < 'Tyler'   => true
comparison: 'Sue' > 'Tyler'   => false

['Tyler']
item: 'Tyler'
5 (+ 1) -> 6

array length: 1
half index: 1 - 1 / 2 => 0
half length: 1 / 2 => 0.5 => 0

middle element: 'Tyler'
middle index: 0
current index: 6
comparison: 'Tyler' === 'Tyler' => true
comparison: 'Tyler' < 'Tyler'   => false
comparison: 'Tyler' > 'Tyler'   => false

[1, 5, 7, 11, 23, 45, 65, 89, 102]
item: 11

array length: 9
half index: 9 - 1 / 2 => 4
half length: 9 / 2 => 4.5 => 4

middle element: 23
middle index: 4
current index: 4
comparison: 23 === 11 => false
comparison: 23 < 11   => false
comparison: 23 > 11   => true

[1, 5, 7, 11]
item: 11
4 (- 2) -> 2

array length: 4
half index: 4 - 1 / 2 => 1.5 => 2
half length: 4 / 2 => 2

middle element: 7
middle index: 2
current index: 2
comparison: 11 === 5 => false
comparison: 11 < 5   => false
comparison: 11 > 5   => true

[7, 11]
item: 11
1 (+ 1) -> 3  // broken

array length: 2
half index: 2 - 1 / 2 => 0.5 => 1
half length: 2 / 2 => 1

middle element: 11
middle index: 1
current index: 3
comparison: 11 === 11 => true
comparison: 11 < 7   => false
comparison: 11 > 7   => false

half length rounds down
half index rounds up


Data Structure
---------------
Array

Abstractions
-------------
Selection/filtering invovled
There will also be reduction of index or totalling of index value

Algorithm
----------
Main Steps:

1. Track the index
- Use an object to track values
- Index initially equal to middle index
- get the middle index first

2. Compare middle item to search Item
- compare middle element to search item
- if not equal see if less than
  => if less than get slices array from 0 to current middleindex
  => subtract from index
- if not less than see if greater than
  => if greater than get slices array from current middleindex to end of array
  => add to index

3. Adjust index

4. Repeat

5. Return index or -1


*/

// function binarySearch(array, searchItem) {
//   let searchArray = array.slice();
//   let middleIndex = Math.floor((searchArray.length - 1) / 2);
//   let currentIndex = middleIndex;

//   while (searchArray.length > 0) {
//     if (searchItem === searchArray[middleIndex]) {
//       return currentIndex;
//     } else if (searchItem < searchArray[middleIndex]) {
//       searchArray = searchArray.slice(0, middleIndex);
//       middleIndex = Math.ceil((searchArray.length - 1) / 2);
//       currentIndex = middleIndex;
//     } else if (searchItem > searchArray[middleIndex]) {
//       searchArray = searchArray.slice(middleIndex + 1);
//       middleIndex = Math.floor((searchArray.length - 1) / 2);
//       currentIndex += middleIndex + 1;
//     }
//   }

//   return -1;
// }

// const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
// console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
// console.log(binarySearch(yellowPages, 'Apple Store'));                // 0
// // 
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
// console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
// console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6

///////////////////////////////////////////////////////////////////////////////

// You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

/*
[{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
*/

/*
Problem
--------
For every teacher object, extract each student's data object and create a new object with those properties and with the teacher property.

New object to create:
{
  teacher: teachers name
  name: student name
  misc: miscellaneous property
}

INPUT:
Nested data strucure (array of objects)

OUTPUT:
array of objects

RULES:
- Use the format of the new object teacher, name, misc
- the return should be an array of objects
- Every student should have their own entry
- if empty array input return empty array
- No other input
- No sparse arrays
- Only object elements
- No multiple array inputs

Examples
---------
TEST CASES:
- Possibly an empty array => empty array
console.log(groupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]));
console.log(ungroupStudents([]));   // []

Object:
{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }
  ...
Data:
[{
  name: "James",
  emergenceNumber: "617-771-1082",
}...]

Nested Object:
{
  name: "James",
  emergenceNumber: "617-771-1082",
}

Data Structure
---------------
Array and Objects

Algorithm
----------
Main Steps:
0. create a new array object

1. Iterate through the main array

2. For every object in the array

  a. Access the teacher property
  b. Access data property
  c. get keys for the objects in data array
  d. use these values to creayte new obbject with properties

3. Repeat for next teacher

*/

// function ungroupStudents(infoArray) {
//   let infoUngrouped = [];

//   infoArray.forEach((infoObject) => {
//     infoObject['data'].forEach((studentObject) => {
//       let newObject = {};
//       newObject['teacher'] = infoObject['teacher'];
  
//       Object.keys(studentObject).forEach((key) => {
//         newObject[key] = studentObject[key];
//       });
//       infoUngrouped.push(newObject);
//     });
//   });

//   return infoUngrouped;
// }

// console.log(ungroupStudents([{
//   teacher: "Ms. Car",
//   data: [{
//      name: "James",
//      emergenceNumber: "617-771-1082",
//   }, {
//      name: "Alice",
//      alergies: ["nuts", "carrots"],
//   }],
// }, {
//   teacher: "Mr. Lamb",
//   data: [{
//     name: "Aaron",
//     age: 3
//   }]
// }]));
// console.log(ungroupStudents([]));   // []

///////////////////////////////////////////////////////////////////////////////

// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.
// Examples

// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3)

// "Chapter 1b"

/*
Problem
--------
Given a "book" (object) and a page number, return the closest chapter (property).

INPUT:
object, and a integer

OUTPUT:
string representation of that chpater name

RULES:
- all page numbers will be valid integers
- "valid" it means no NaN no Infinity etc.
- Return the property or key
- if the page is the same distance away from the current page return the higher page number chapter
- No other inputs
- If empty object return empty string
- Page number will always be given
- Page number will be greater than 0
- No negative page numbers
- Page number can be current chapter page

Examples
---------
nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)                  // "Chapter 1b"

nearestChapter({}, 5)  // ""

nearestChapter({
  "Ch. 1" : 1,
  "Ch. 2" : 10,
  "Ch. 3" : 25,
  "Ch. 4" : 100,
}, 75)                 // "Ch. 4"

nearestChapter({
  "Ch. 1" : 1,
  "Ch. 2" : 10,
  "Ch. 3" : 25,
  "Ch. 4" : 100,
}, 2)                 // "Ch. 1"

nearestChapter({
  "Ch. 1" : 1,
  "Ch. 2" : 10,
  "Ch. 3" : 25,
  "Ch. 4" : 100,
}, 25)                 // "Ch. 3"

Data Structure
---------------
Object
Array

Abstraction
------------
filter
forEach
Keys
Reduce

Algorithm
----------
Main Steps:
1. Obtain the keys to iterate through the book

2. Transform the object into an array of differences

3. Get the index of the smallest difference

4. Get the index at object keys and that will be returned

*/

// function nearestChapter(book, currentPage) {
//   let chapters = Object.keys(book);
//   if (chapters.length === 0) return "";

//   let differences = chapters.map((chapterName) => {
//     return Math.abs(currentPage - book[chapterName]);
//   });

//   let smallest = Math.min(...differences);
//   let chapter = chapters[differences.lastIndexOf(smallest)];

//   console.log(chapter);
// }


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3)                  // "Chapter 1b"

// nearestChapter({}, 5)  // ""

// nearestChapter({
//   "Ch. 1" : 1,
//   "Ch. 2" : 10,
//   "Ch. 3" : 25,
//   "Ch. 4" : 100,
// }, 75)                 // "Ch. 4"

// nearestChapter({
//   "Ch. 1" : 1,
//   "Ch. 2" : 10,
//   "Ch. 3" : 25,
//   "Ch. 4" : 100,
// }, 2)                 // "Ch. 1"

// nearestChapter({
//   "Ch. 1" : 1,
//   "Ch. 2" : 10,
//   "Ch. 3" : 25,
//   "Ch. 4" : 100,
// }, 25)                 // "Ch. 3"

///////////////////////////////////////////////////////////////////////////////


// In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

//     Have the same color or different colors.
//     Have the same number or different numbers.
//     Have the same shades or different shades.
//     Have the same shape or different shapes.

// The four properties are:

//     Colors: red, purple, green
//     Numbers: 1, 2, 3
//     Shades: empty, lined, full
//     Shapes: squiggle, oval, diamond

// Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

/*

Problem
--------
Determine whether the array of cards given are considered a set. A an array of cards is considered a set if the cards have at least one property with all the same value (ex. "red", "red", "red") or if all the properties are unique (color, number, shade, shape are all different between all three cards)

INPUT:
array of objects
where the objects represent the cards

OUTPUT:
boolean value
true if the cards are a set
false is the cards are not a set

RULES:
- Argument will always be given
- Argument will never be an empty array
- Argument will only have card objects as elements
- Argument will never be a sparse array
- Argument will never be more than one Argument
- Argument array with card objects will always have the same properties listed above with the valid values for each property
- What is a set?
  + (3) cards with same value for (1) or more properties => (color: "red", "red", "red")
  + (3) cards with different values for all (4) properties => (color, number, shade, and shape)
- What is not a set?
  + (2) cards with same value for (1) property => (colors: "green", "red", "red")

Examples
---------
set1 = [
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

set2 = [
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 1, shade: "lined", shape: "diamond" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]

set3 = [
  { color: "green", number: 2, shade: "empty", shape: "squiggle" },
  { color: "purple", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 2, shade: "full", shape: "oval" }
]

set4 = [
  { color: "green", number: 1, shade: "full", shape: "squiggle" },
  { color: "purple", number: 2, shade: "full", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

set5 = [
  { color: "green", number: 1, shade: "empty", shape: "diamond" },
  { color: "purple", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "diamond" }
]

set7 = [
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

console.log(isSet(set1));  // true
console.log(isSet(set2));  // true
console.log(isSet(set3));  // true
console.log(isSet(set4));  // true
console.log(isSet(set5));  // true
console.log(isSet(set6));  // true
console.log(isSet(set7));  // false


{ color: "green", number: 1, shade: "empty", shape: "squiggle" }
{ color: "red", number: 2, shade: "lined", shape: "diamond" }
{ color: "red", number: 3, shade: "full", shape: "oval" }

Checking each card's properties:

color: ["green", "red", "red"]          // 2 / 3 match
number: [1, 2, 3]                       // 1 / 3 match
shade: ["empty", "lined", "full]"       // 1 / 3 match
shape: ["squiggle", "diamond", "oval]"  // 1 / 3 match
=> FALSE
- stop iteration if first property has a 2 / 3 match

color: ["red", "red", "red"]            // 3 / 3 match
number: [1, 2, 3]                       // 1 / 3 match
shade: ["empty", "lined", "full]"       // 1 / 3 match
shape: ["squiggle", "diamond", "oval]"  // 1 / 3 match
=> TRUE
- iterate until one property is the same for all cards

Checking all properties of each card:

color: ["green", "red", "purple"]       // 1 / 3 match
number: [1, 2, 3]                       // 1 / 3 match
shade: ["empty", "lined", "full]"       // 1 / 3 match
shape: ["squiggle", "diamond", "oval]"  // 1 / 3 match
=> TRUE
- iterate all the way through to check all do not match

Data Struture
--------------
Array to iterate through that contains the cards
Card object itself working with the properties
Master object to track all the values?
Have a storage array that resets each time unless 2 of same values present

Abstractions
------------
Object keys because of objects
Reduce
for loop
Do not use forEach because I can't break out to return false

Algorithm
----------
Main Steps:
1. Get all the values of a single property
- Get the keys of a single card object
- Iterate through the keys ['color', 'number', ...]
  - initialize a storage array to empty array
- iterate through the cards array [ {card1}, {card2}, ...]
  - Add every value to the storage array

2. Check to see if any only two value match within the values
  - Helper method check the count of the elements
  - Return true if any element count is 2

3. If only two values match return false form the main function

4. Keep iterating through the other properties

5. Return true when finished

Helper method
- Check count of every element wiht the array
- iterate through the array
- create a object
- incremented when the same element is come across
- Can I get values from a object and then check if they include 2

*/

// function isSet(cards) {
//   let properties = Object.keys(cards[0]);

//   for (let index = 0; index < properties.length; index += 1) {
//     let property = properties[index];
//     let storage = [];

//     cards.forEach((card) => {
//       storage.push(card[property]);
//     });

//     if (twoOfAKind(storage)) return false;
//   }

//   return true;
// }

// function twoOfAKind(array) {
//   let countOfElements = array.reduce((obj, element) => {
//     if (obj[element] === undefined) {
//       obj[element] = 1;
//     } else {
//       obj[element] += 1;
//     }

//     return  obj;
//   }, {});

//   let counts = Object.values(countOfElements);

//   return counts.includes(2);
// }

// let set1 = [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// let set2 = [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 1, shade: "lined", shape: "diamond" },
//   { color: "red", number: 1, shade: "full", shape: "oval" }
// ]

// let set3 = [
//   { color: "green", number: 2, shade: "empty", shape: "squiggle" },
//   { color: "purple", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 2, shade: "full", shape: "oval" }
// ]

// let set4 = [
//   { color: "green", number: 1, shade: "full", shape: "squiggle" },
//   { color: "purple", number: 2, shade: "full", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// let set5 = [
//   { color: "green", number: 1, shade: "empty", shape: "diamond" },
//   { color: "purple", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "diamond" }
// ]

// let set6 = [
//   { color: "green", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// console.log(isSet(set1));  // true
// console.log(isSet(set2));  // true
// console.log(isSet(set3));  // true
// console.log(isSet(set4));  // true
// console.log(isSet(set5));  // true
// console.log(isSet(set6));  // false

///////////////////////////////////////////////////////////////////////////////
// Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

// Arguments

//     user1Income (Object) ⁠— an income object for user1
//     user2Income (Object) ⁠— an income object for user2
//     returns: A new object with like values combined

// Challenges

//     They won't have the same number of key-value pairs.
//     The return object must return the values ordered from lowest to highest so your answers can match the test answers.

/*
Problem
--------
Given two different object combine the properites that are the same between the two.

INPUT:
two objects

OUTPUT:
single object with all properties

RULES:
- The objects will not have the same number of key vlaue pairs
- Properties should be ordered with those that have the lowest value first and the up to the highest
- Only combine the properties that are the same (same key)
- Possibilty of empty objects return empty if both empty
- Only two object will be provided as Arguments
- Only objects will be given as arumgnets
- values of the keys will always be numbers
- Valid numbers Only
- 'teacher' and 'Teacher' should be combined into one

Examples
---------
const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

// {
//   powerPlant: 70000,
//   teaching: 40000,
//   rental: 22000
// }

const user3 = {
  plantPower: 100000,
  hacking: 5000000,
}

const user4 = {}

// {
//   powerPlant: 100000,
//   hacking: 5000000
// }

const user5 = {}
const user6 = {}

// {}

console.log(combine(user1, user2));
console.log(combine(user3, user4));
console.log(combine(user5, user6));

Data Structure
---------------
objects

Algorithm
----------
Main Steps:
1. Combine the two objects
- iterate through the keys
- check to see if both keys exists
- If not, add new property
- If yes, then add values together and add new property

2. Get all the values and sort by numeric order
- Take object.values of newly combined object
- Sort the array

3. Recreate the object sorted
- Initialize and empty obejct
- access the key for each value
- add them to the array in order

4. Return the new sorted obejct

*/

// function combine(object1, object2) {
//   let keys = Object.keys(object1).concat(Object.keys(object2));
//   let combinedObject = {};
  
//   unique(keys).forEach((key) => {
//     if (object1[key] && object2[key]) {
//       combinedObject[key] = object1[key] + object2[key];
//     } else if (object1[key]) {
//       combinedObject[key] = object1[key];
//     } else {
//       combinedObject[key] = object2[key];
//     }
//   });

//   return sortObjectByValue(combinedObject);
// }


// function unique(array) {
//   return array.reduce((arr, element) =>{
//     if (!arr.includes(element)) {
//       arr.push(element);
//     }

//     return arr;
//   }, []);
// }

// function sortObjectByValue(obj) {
//   let values = Object.values(obj);
//   let sortedObject = {};
  
//   values.sort((a, b) => a - b)
//         .forEach((value) => {
//           Object.keys(obj).forEach((key) => {
//             if (obj[key] === value) {
//               sortedObject[key] = value;
//             }
//           });
//         });

//   return sortedObject;
// }

// const user1 = {
//   powerPlant: 70000,
//   rental: 12000
// }

// const user2 = {
//   teaching: 40000,
//   rental: 10000
// }

// // {
// //   powerPlant: 70000,
// //   teaching: 40000,
// //   rental: 22000
// // }

// const user3 = {
//   plantPower: 100000,
//   hacking: 5000000,
// }

// const user4 = {}

// // {
// //   powerPlant: 100000,
// //   hacking: 5000000
// // }

// const user5 = {}
// const user6 = {}

// // {}

// console.log(combine(user1, user2));
// console.log(combine(user3, user4));
// console.log(combine(user5, user6));

///////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

// Notes
// Try doing that with filter + reduce.

/*
Problem
--------
Given a data set with a note property, count the valid "notes" and return the count of each valid note in a new object.

INPUT:
Array with object elements

OUTPUT:
object

RULES:
- Only array input
- Only object elements with properties "name" and "notes"
- There will always be an argument passed in as an argument
- No sparse arrays
- No empty arrays
- "notes" value will not always contain valid notes
- Only positive or negative numbers will be included in notes array
- Order of return object does not matter
- Order of argument does not matter

Examples
----------
getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
])

// {
//   5: 3,
//   3: 2,
//   2: 1
// }

getNotesDistribution([
  {
    "name": "Widward",
    "notes": [0, 0, 0, 0, 0]
  },
  {
    "name": "Tron",
    "notes": [0, 0, 0, 0, 0]
  }
])

// {}

getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 5]
  },
  {
    "name": "John",
    "notes": [5, 5, 5]
  }
])

// {
//   5: 6,
// }

Data Structure
---------------
Array to iterate through
Object to parse for the notes
Obejct to return with the new data

Abstractions
-------------
Reduce to gather all the "notes"
Filter to filter out the invalid
Reduce again to constrcut the return object

Algorithm
----------
Main steps:
1. Iterate through the array object argument

2. Gather all the notes values into a single array
- For every object being iterated over access the notes property and add it to the accumulator array

3. Filter out any invalid notes
- after all notes are gathered, then filter to see if any values are invalid

4. Create the return object
- reduce to make a return object and count each occurance of the number

5. Return object
*/

// function getNotesDistribution(array) {
//   let notes = array.reduce((acc, currentObject) => {
//     return acc.concat(currentObject["notes"]);
//   }, []);

//   notes = notes.filter((note) => note >= 1 && note <= 5);

//   return notes.reduce((acc, note) => {
//     if (acc[note] === undefined) {
//       acc[note] = 1;
//     } else {
//       acc[note] += 1;
//     }

//     return acc;
//   }, {});
// }

// console.log(getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 3, -1, 6]
//   },
//   {
//     "name": "John",
//     "notes": [3, 2, 5, 0, -3]
//   }
// ]));

// // {
// //   5: 3,
// //   3: 2,
// //   2: 1
// // }

// console.log(getNotesDistribution([
//   {
//     "name": "Widward",
//     "notes": [0, 0, 0, 0, 0]
//   },
//   {
//     "name": "Tron",
//     "notes": [0, 0, 0, 0, 0]
//   }
// ]));

// // {}

// console.log(getNotesDistribution([
//   {
//     "name": "Steve",
//     "notes": [5, 5, 5]
//   },
//   {
//     "name": "John",
//     "notes": [5, 5, 5]
//   }
// ]));

// // {
// //   5: 6,
// // }

///////////////////////////////////////////////////////////////////////////////

// Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.
// Notes

//     Coordinates can be positive or negative integers.
//     Not all examples have overlaps.

/*
Problem
--------
Given rectangle coordinates (opposite angles of the rectangle) determine if there is any overlaps between the two rectangles. There might not be any overlap.

INPUT:
(2x arrays)

OUTPUT:
(integer) represents the area

RULES:
- coordinates represent the opposite angles
- the coodinates can consist of negative numebrs
- arrays contain objects with x and y properties
- the integer that is returned should represent the area
- there might not be any overlap
- all input will be valid
- not empty arrays or incorrect objects
- rectangles are not squares so they can different lengths and heights
- x y coordinate grid is relevant to the problem
- use visual if needed

Example
--------
overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

-5, -7 && -1, 0    

console.log(overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
));

// 10


**breakdown
[2, -9] & [13, -4]
[2, -9] >> [3, -9] ... >> [5, -9]
[2, -9] >> [2, -8] ... >> [2, -4]


[5, -11] & [7, -2]
[5, -11] >> [6, -11] >> [7, -11]
[5, -11] >> [5, -10] ... >> [5, -9]

does the 2nd rectangle fall between 2 and 13 on the x axis?
=> [5, y] & [7, y]; yes it does => 2 width

does the 2nd rectangle fall between -9 and -4 on the y axis?
=> [x, -11] & [x, -2]; yes it does => 9 but first rectanlge is only 5 tall

5 x 2 which is 10 which is the overlap

Data Structure
---------------
Array and objects

Algorithm
----------
Main steps:
1. Determine whether the x axis or y axis overlaps
- get all x values in an array
- get all y values in am array
- get second to lowest y value
- get second to loewest x value
- get second to highest y value
- get second to highest x value
- calculate the area
*/

// function overlappingRectangles(rectangle1, rectangle2) {
//   let xValues = [];
//   let yValues = [];

//   rectangle1.forEach((coordinate) => {
//     xValues.push(coordinate['x']);
//     yValues.push(coordinate['y']);
//   });

//   rectangle2.forEach((coordinate) => {
//     xValues.push(coordinate['x']);
//     yValues.push(coordinate['y']);
//   })

//   xValues.sort((a, b) => a - b);
//   yValues.sort((a, b) => a - b);

//   let point1 = [xValues[1], yValues[1]];
//   let point2 = [xValues[xValues.length - 2], yValues[yValues.length - 2]];

//   if (rectangle1[1]['x'] < rectangle2[0]['x'] ||
//         rectangle2[1]['x'] < rectangle1[0]['x']) {
//     return 0;
//   }

//   let width = Math.abs(point1[0] - point2[0]);
//   let height = Math.abs(point1[1] - point2[1]);

//   return width * height;
// }

// const overlappingRectangles = (r1, r2) => {
//   // min of r's second x - max of r's first x
//   // min of rightmost x - max of leftmost x
//   // min of max x's - max of min x's
//   const overlapWidth = Math.min(r1[1].x, r2[1].x) - Math.max(r1[0].x, r2[0].x);
//   const overlapHeight = Math.min(r1[1].y, r2[1].y) - Math.max(r1[0].y, r2[0].y);

//   if ([overlapWidth, overlapHeight].some(num => num < 0)) return 0;
//   return overlapWidth * overlapHeight;
// };

// console.log(overlappingRectangles(
//   [{ x: -8, y: -7 }, { x: -4, y: 0 }],
//   [{ x: -5, y: -9 }, { x: -1, y: -2 }]
// )); // 5 

// console.log(overlappingRectangles(
//   [{ x: 2, y: -9 }, { x: 13, y: -4 }],
//   [{ x: 5, y: -11 }, { x: 7, y: -2 }]
// )); // 10

// console.log(overlappingRectangles(
//   [{ x: 0, y: 0 }, { x: 4, y: 3 }],
//   [{ x: 5, y: 20 }, { x: 8, y: 25 }]
// )); // 0

// console.log(overlappingRectangles(
//   [{ x: 5, y: 20 }, { x: 8, y: 25 }],
//   [{ x: 0, y: 0 }, { x: 4, y: 3 }]
// )); // 0

// console.log(overlappingRectangles(
//   [{ x: 0, y: 0 }, { x: 10, y: 10 }],
//   [{ x: 0, y: 100 }, { x: 10, y: 110 }]
// )); // 0

///////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

// How to Calculate Points and Goal Difference

// team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

// Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
// Goal Difference = scored - conceded = 88 - 20 = 68

// Notes

// Input is an array of teams.

/*
Problem
--------
Given a set of data about football, calculate the total score and if there is a tie between total scores, calculate the goal difference and use that to determine who had the highest score.

INPUT:
array of objects

OUTPUT:
string (team name)

RULES:
- wins are multiplied by 3
- losses are multipled by 0
- draws are multiped by 1
- goal difference is scored minus conceded
- If there is a tie return the team with the higher goal difference

Example
-------

champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
// "Manchester United"

Data Structure
--------------
ARray of objects
Object accessing properties

Algorithm
----------
Main Steps:
1. Iterate over the array of objects (transform?)

2. Calculate the score and goal difference for each team

3. Determine which team had the highest score or goal difference
*/

// function champions(teams) {
//   let teamScores = teams.map((team) => {
//     let totalPoints = (3 * team['wins']) + (0 * team['loss']) + (1 * team['draws']);
//     let goalDifference = team['scored'] - team['conceded'];
    
//     return {
//       name: team['name'],
//       totalPoints: totalPoints,
//       goalDifference: goalDifference,
//     };
//   })

//   return teamScores.sort(sortTeams).pop().name;
// }

// function sortTeams(a, b) {
//   if (a.totalPoints < b.totalPoints) {
//     return -1;
//   } else if (a.totalPoints > b.totalPoints) {
//     return 1;
//   } else if (a.totalPoints === b.totalPoints) {
//     if (a.goalDifference < b.goalDifference) {
//       return -1;
//     } else if (a.goalDifference > b.goalDifference) {
//       return 1
//     } else {
//       return 0;
//     }
//   }
// }

// console.log(champions([
//   {
//     name: "Manchester United",
//     wins: 30,
//     loss: 3,
//     draws: 5,
//     scored: 88,
//     conceded: 20,
//   },
//   {
//     name: "Arsenal",
//     wins: 24,
//     loss: 6,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   {
//     name: "Chelsea",
//     wins: 22,
//     loss: 8,
//     draws: 8,
//     scored: 98,
//     conceded: 29,
//   },
//   ]));
// "Manchester United"

///////////////////////////////////////////////////////////////////////////////

// You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.
// Examples

// splitBunches([
//   { name: "grapes", quantity: 2 }
// ])

// [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ])

// [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
//   { name: "grapes", quantity: 2 },
// ])

// [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
// ]

// Notes

//     The input array will never be empty.
//     Objects will always have a name and quantity over 0.
//     The returned object should have each fruit in the same order as the original.

/*
Problem
--------
Expand the array based on the quanity property of each object in the existing array

INPUT:
array  of objects

OUTPUT:
array of objects

RULES:
- The input array will never be empty
- Object will always have a name
- Object will always have a quanitity over 0
- Maintain order of the fruit
- No sparse arrays
- There will only be one array argument provided
- fruits do not get grouped together maintain order
- quanity should be one for the resulting array for all fruits
- No infinity values for quanitity property
- if quanity is already 1 you can return array as is

Examples
--------
// splitBunches([
//   { name: "grapes", quantity: 2 }
// ])

// [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ])

// [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 },
//   { name: "grapes", quantity: 2  },
// ])

// [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
// ]

Data Structure
---------------
Array with objects
Read object properties

Abstractions
-------------
Reduce possibly useful
forEach for iterating maybe?

Algorithm
----------
Main Steps:
1. Iterate over the array
- Reduce (acc, currentObject)
- acc => new array to be returned

2. Examine the quanity property of each object
- Start a for loop with the limit at the quanity value
- Add the object with a quanity of 1 to the acc
  => access name property
  => default set quanity at 1
- return the new acc

3. Build a new object maintaining the order

4. Return that new object
*/

// function splitBunches(groceries) {
//   return groceries.reduce((allGroceries, groceryItem) => {
//     for (let count = groceryItem.quantity; count > 0; count -= 1) {
//       let item = {
//         name: groceryItem.name,
//         quantity: 1,
//       }
//       allGroceries.push(item);
//     }

//     return allGroceries;
//   }, []);
// }

// console.log(splitBunches([
//   { name: "grapes", quantity: 2 }
// ]));

// // [
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 }
// // ]


// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]));

// // [
// //   { name: "currants", quantity: 1},
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "bananas", quantity: 1 }
// // ]

// console.log(splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 },
//   { name: "grapes", quantity: 2  },
// ]));

// // [
// //   { name: "currants", quantity: 1},
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "bananas", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// //   { name: "grapes", quantity: 1 },
// // ]

///////////////////////////////////////////////////////////////////////////////

// Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

// No matching values:

// Scores = [99, 98, 97, 96, 95]
// Rank = 1,  2,  3,  4,  5

// With matching values:

// Scores = [99, 98, 98, 96, 95]
// Rank = 1,  2,  2,  4,  5

// // Second and third scores are equal, so rank "3" is skipped.

// Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.


// Examples

// competition_rank({
//   George: 96,
//   Emily: 95,
//   Susan: 93,
//   Jane: 89,
//   Brett: 82
//   }, "Jane") 

// => 4

// competition_rank({
//   Kate: 92,
//   Carol: 92,
//   Jess: 87,
//   Bruce: 87,
//   Scott: 84
//   }, "Bruce")

// => 3

// Notes

// The highest score has a rank value of 1.

/*
Problem
--------
Given a object that contains names and scores, and a name, return the rank for that person.

INPUT:
object
string

OUTPUT:
number

RULES:
- THe highest score rank value of 1
- If the scores are the same value they get assigned the same rank
- Only fice scores are given at a time
- No empty objects are input
- No empty string second argument
- No NaN of Infinity values of the keys

Examples
---------
// Scores = [99, 98, 97, 96, 95]
// Rank = 1,  2,  3,  4,  5

// With matching values:

// Scores = [99, 98, 98, 96, 95]
// Rank = 1,  2,  2,  4,  5

// instead of 1, 2, 3, 4, 5

Data Structures
----------------
Object
String

Algorithm
----------
1. Assign ranks to every name/score in the given object
- took the person's score
- Made an array of all the other scores and sorted those
  => gather the object keys
  => iterate over that array and access each property and get value
- Find the index of the person's score
- Get the rank of the scores up to the person's score
  => iterate over the score transfromation
  => The first score will always be index + 1
  => If the next score is the same then assign it the same value (index + 0)
  =>  If the next score is less than assign it (index + 1)



2. Get the rank for the given name

3. return that rank
*/

// function competition_rank(scores, person) {
//   let personScore = scores[person];
//   let scoreArray = Object.keys(scores).map((personName) => scores[personName]);

//   scoreArray.sort((a, b) => b - a);

//   let personScoreIndex = scoreArray.indexOf(personScore);

//   let skips = 0;
//   let rank = 1;
//   let ranks = scoreArray.map((score, index) => {
//     if (index === 0) {
//       skips += 1;
//       return rank;
//     } else if (score === scoreArray[index - 1]) {
//       skips += 1;
//       return rank;
//     } else {
//       rank = rank + skips;
//       skips = 1;
//       return rank;
//     }
//   });

//   return ranks[personScoreIndex];
// }

// competitionRank({
//   George: 96, // 1
//   Emily: 95, // 2
//   Susan: 93, // 3
//   Jane: 89, // 4
//   Brett: 82 // 5
//   }, "Jane") 

// // // => 4

// competitionRank({
//   Kate: 92, // 1
//   Carol: 92, // 1
//   Jess: 87, // 3
//   Bruce: 87, // 3
//   Scott: 84 // 
//   }, "Bruce")

// // => 3

// competitionRank({
//   Kate: 99, // 1
//   Carol: 99, // 1
//   Jess: 99, // 1
//   Bruce: 87, // 5
//   Scott: 99 // 1
//   }, "Bruce")

//   // => 5

///////////////////////////////////////////////////////////////////////////////

// You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

// Notes

//     There will always be one or more element in the given array.
//     Each element will always have a brand and name property.
//     All duplicates will be displayed in order.

/*
Problem
--------
Condense the oobjects in the array and add a count property. 

INPUT:
array of objects

OUTPUT:
array of objects (modified object)

RULES:
- There will always be an argumenet
- Each element will be an object with a brand name and property
- There will only be one or more elements in array
- count cannot be negative
- duplicates will be in order
- Case matters "s" does not equal "S"
- No spares arrays
- Order should be maintained
- No mutating original object

Examples
--------
simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) 

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 1 }
// ]

simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
])

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// ]

Data Structure
---------------
Array 
Object (elements)

Abstractions
-------------
map for transformation
forEach to iterate through the object keys to access each value

Algorithm
----------
Main Steps:
1. Iterate throught the given array and obtain all the unique elements
- Intiailze an empty array
- Iterate though given array
- Use some function to check if any of the elements in the array current have the name or brand value as the current object being iterated over
- if some returns true, then do not add the current element
- if some returns false, then add it

2. Iterate though unique elements and within that iteration iterate through the the given list

3. Check if the unique element has the same name and brand as the one in the list
- add count property at some point

4. If they do increment otherwise do not increment

5. Return the unique elements array
*/

// function simplifyList(list) {
//   let newList = [];

//   list.forEach((product) => {
//     if (!productInList(newList, product)) {
//       newList.push(product);
//     }
//   });

//   newList.forEach((product) => {
//     product.count = 0;

//     list.forEach((item) => {
//       if (item.name === product.name && item.brand === product.brand) {
//         product.count += 1;
//       }
//     })
//   });

//   console.log(newList);
// }

// function productInList(newList, product) {
//   return newList.some((item) => {
//     return item.brand === product.brand && item.name === product.name;
//   });
// }

// simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "Urban Decay", name: "Naked Honey Pallete" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
// ]) 

// // [
// //   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
// //   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
// //   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// // ]

// simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "Urban Decay", name: "Naked Honey Pallete" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
// ])

// // [
// //   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// //   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
// //   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 1 }
// // ]

// simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
// ])

// // [
// //   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// // ]

// simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "NARS", name: "Naked Honey Pallete" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
// ])

// // [
// //   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// //   { brand: "NARS", name: "Naked Honey Pallete", count: 1 },
// //   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 1 }
// // ]

// simplifyList([
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
//   { brand: "Urban Decay", name: "Cosmetics Voyageur Pallete" },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
// ])

// // [
// //   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
// //   { brand: "Urban Decay", name: "Cosmetics Voyageur Pallete", count: 1 },
// //   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 1 }
// // ]

///////////////////////////////////////////////////////////////////////////////

// Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

// recurIndex("abc abc");

// {
//   first: 0,
//   second: 4,
// }

/*
Problem
--------
Given a string identify any reoccuring characters by tracking the first index of occurrance and the second index of occurrance in an object. Then return that object.

INPUT:
string

OUTPUT:
object

RULES:
- Will an argument always be given? Yes.
- Will there be more than one argument given? No.
- Will the argument always be a string input?
  => Possible inputs include: empty string, undefined, null
- Will the string ever be empty? Yes.
- Will there always be a reoccurring character? No.
  => If there is no reoccurring character then an empty object should be returned.
- The index should be included in the object
- If the character occures more than twice, only return the second occurrance of the character because we want only the first and second occurrance.
- Is the string case sensitive? Yes.
  => That means "A" is not the same as "a"
  => They should be treated as different characters
- What is considered an item or character? Letter, number, punctuation, whitespace?
  => Letters are included, string represenation of numbers, whitespace is also included, and special characters (so anything is considered valid)

Examples
--------
recurIndex("abc abc");   // { 'a': [0, 4] }
recurIndex("abc Abc");   // { 'b': [1, 5] }
recurIndex(" abc abc");  // { ' ': [0, 4] }
recurIndex("?abc?abc");  // { '?': [0, 4] }
recurIndex("aabc abc");  // { 'a': [0, 1] }
recurIndex("ABC abc");   // {}
recurIndex("");          // {}
recurIndex(undefined);   // {}
recurIndex(null);        // {}

Data Structure
--------------
Keep string as string
Create an object or return empty object

Abstractions
------------
Iterate through the string using for/of
Or make the string an array and iterate
Or get a count of the characters and then just find the last index

Algorithm
----------
How to know that a character is repeating?
Iterate through the string
Track each character count in an array
- Or compare index and last index of to see if they are different
- After finding the first index slice the string and search again
- just incase the last index isn't the second repating character

How to track the first and second index of the repeating character?
- save to variables using index

How to return a new object after identifying the repeating character 

Main Steps:
1. Call a helper function to return the first character that appears twice

2. Helper function:
  => initialize an empty object
  => iterate through the string
  => If the character key doesn't exist already create and set to 1
  => if the characrter key does exist increment
  => return current character from function is incremented count is equal to 2

3. Take the repeating character and find the first index
  => after getting the first index slice the array from the index to the end

4. Take the repeating character and find the second index

5. Set these values to the corresponding object

6. Return the object
*/

// function recurIndex(str) {
//   if ((typeof str) !== 'string' || str === "") return {};

//   let repeatingChar = firstRepeatingCharacter(str);
  
//   if (repeatingChar === undefined) return {};

//   let charObj = {};
//   let firstIndex = str.indexOf(repeatingChar);

//   charObj[repeatingChar] = [
//     firstIndex,
//     str.indexOf(repeatingChar, firstIndex + 1)
//   ];

//   return charObj;
// }

// function firstRepeatingCharacter(str) {
//   let obj = {};

//   for (char of str) {
//     if (obj[char] === undefined) {
//       obj[char] = 1;
//     } else {
//       obj[char] += 1;
//       return char;
//     }
//   }

//   return undefined;
// }

// console.log(recurIndex("abc abc"));   // { 'a': [0, 4] }
// console.log(recurIndex("abc Abc"));   // { 'b': [1, 5] }
// console.log(recurIndex(" abc abc"));  // { ' ': [0, 4] }
// console.log(recurIndex("?abc?abc"));  // { '?': [0, 4] }
// console.log(recurIndex("aabc abc"));  // { 'a': [0, 1] }
// console.log(recurIndex("ABC abc"));   // {}
// console.log(recurIndex(""));          // {}
// console.log(recurIndex(undefined));   // {}
// console.log(recurIndex(null));        // {}

///////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.
// Notes

//     Numbers in strings can be negative, but will all be base-10 integers.
//     Negative numbers may directly follow another number.
//     The hyphen or minus character ("-") does not only occur in numbers.
//     Arrays may be ragged or empty.

// console.log(sum(["abc123"]));                    // 123
// console.log(sum(["abc123-456"]));                // -333
// console.log(sum(["abc123?!$456   678"]));        // 1368
// console.log(sum(["abc123?!$-456   678"]));       // 912
// console.log(sum(["a-bc123?!$-456 - 678"]));      // 912
// console.log(sum(["abc", ["1", ["2", ["3"]]]]));  // 6
// console.log(sum(["-", ["1", ["2", ["3"]]]]));    // 6
// console.log(sum([]));                            // 0
// console.log(sum([""]));                          // 0



/*
Problem
--------
Given an array of strings, sum every separate number in the string.

INPUT:
array (nested or not)

OUTPUT:
number (sum)

RULES:
- Argument always present
- Never more than one argument
- Array can be empty
- Array may contain an empty string
- Array can be nested to any level
- Array has more than one element
- Elements are only strings and arrays
- Strings can contain any characters
- negtive numbers can exist
- negative numbers may directly follow another number
- No NaN or Infinity string input
- Anything not a digit or a - next to a digit is a separator
- Order does not matter

Examples
--------
console.log(sum(["abc123"]));                    // 123
console.log(sum(["abc123-456"]));                // -333
console.log(sum(["abc123?!$456   678"]));        // 1368
console.log(sum(["abc123?!$-456   678"]));       // 912
console.log(sum(["a-bc123?!$-456 - 678"]));      // 912
console.log(sum(["abc", ["1", ["2", ["3"]]]]));  // 6
console.log(sum(["-", ["1", ["2", ["3"]]]]));    // 6
console.log(sum([]));                            // 0
console.log(sum([""]));                          // 0

["a-bc123?!$-456 - 678"]    // 912
"123", "-456", "678"
123 + (-456) + 678

["-", ["1", ["2", ["3"]]]]    // 6
"1", "2", "3"
1 + 2 + 3

Data Structure
---------------
Array to parse
String transform into an array or regex matching

Abstractions
-------------
ForEach (iterate through all)
Split string into an array on non numeric characters

Algorithm
----------
Questions:
How to iterate though the array, how to iterate through the array if nested?
- Maybe flatten first?
- iterate using forEach?

How to extract the number characters from the string, including negative numbers?
- Split on string with regex?
- try to match patterns with regex and return the matches in an array (match function does this for me???)
- With regex to include hyphen character and make sure to establish word boundaries for characters that are not digits since I need to find separated characters

How to transform the string into numbers and sum them
- Number function to transform
- If in an array I can use reduce to sum the value

Main Steps:
1. Flatten the array
=> flatten to infinity and beyondburger

2. Iterate through all string elements and begin extracting the numbers
=> use transformation and the return result of the matches to make the new array

3. Try using match to get an array of matches
=> regex to match any number of digits or a hyphen followed by any number of digits
=> use g flag to get array of matches and not other info from regular match
=> Return an array of matches
=> flatten after transofmration

5. sum the values
=> 
*/

// function sum(arr) {
//   arr = arr.flat(Infinity);

//   if (arr.length === 0) return 0;

//   let partialSums = arr.map((str) => {
//     let regex = /-{0,1}\d+/g;
//     if (regex.test(str)) {
//       let stringNumbers = str.match(regex);
  
//       return stringNumbers.map((strNum) => Number(strNum))
//                           .reduce((sum, num) => sum + num ); //
//     }

//     return 0;
//   });

//   return partialSums.reduce((sum, num) => sum + num); //
// }

// console.log(sum(["abc123"]));                    // 123
// console.log(sum(["abc123-456"]));                // -333
// console.log(sum(["abc123?!$456   789"]));        // 1368
// console.log(sum(["abc123?!$-456   789"]));       // 456
// console.log(sum(["a-bc123?!$-456 - 789"]));      // 456
// console.log(sum(["abc", ["1", ["2", ["3"]]]]));  // 6
// console.log(sum(["-", ["1", ["2", ["3"]]]]));    // 6
// console.log(sum([]));                            // 0
// console.log(sum([""]));                          // 0

///////////////////////////////////////////////////////////////////////////////

// Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

/*
Problem
--------
Find the student's who passed, recieved 100% in everything, the semester in alphabetical order given all their grades.

INPUT:
Object with array as key values

OUTPUT:
array of alphabetical names

RULES:
- Student must receive 100% in everything in order to pass the semester
- The returned list should be alphabetical
- Will an argument always be given? Yes.
- Will the argument always be an object? Yes.
- Will the object always contain valid name keys? Yes.
- Will the input every be an empty object? No.
- Will the array values ever be empty? No.
- Will the kids all have the same number of test scores? Maybe.
- Will there be any other numeric inputs such as NaN or Infinity/-Infinity? No.
- Return empty array if no students passed.

Examples
---------
console.log(whoPassed({
  widward: ["10/10", "9/10", "3/5", "10/10"],
  sora: ["5/10", "5/10", "2/5", "5/10"],
  riku: ["10/10", "9/10", "9/10", "10/10"],
  omlette: ["10/10", "10/10", "10/10", "10/10"],
  pence: ["10/10", "10/10", "10/10", "10/10"],
  ansem: ["10/10", "10/10", "10/10", "10/10"],
}); //[ansem, omlette, pence]

console.log(whoPassed({
  widward: ["10/10", "9/10", "3/5", "10/10"],
sora: ["5/10", "5/10", "2/5", "5/10"],
  riku: ["10/10", "9/10", "9/10", "10/10"],
}); // []

Data Structure
--------------
Object to parse
Array to parse
String to parse

Abstractions
------------
forEach to iterate, do not need to break early
iterate to check scores transformation
every or some

Algorithm
----------
Questions:
How to iterate through the object for each name?
- Getobject keys then iterate

How to check all the scores at 100%?
- use every

How to get numeric percetage of strings?
- use Number or regex to get values??? there is a '/' to deal with.

How to alphabetize the list of names that qualify as passing?
- use sort?

Main Steps:
1. Iterate through the object and for every name examine the array of scores
- Get Object keys of the object and iterate through the keys
- Iterate using filter to select names that meet a certain criteria
- 

2. For the list of scores check if the string element represents 100%
- pattern match to the digits in the string between the '/'
- if the elements in the array are equal return true

3. Sort the list of qualifying names into alphabetical order
- use sort since the default will sort by strings
*/

// function whoPassed(students) {
//   return Object.keys(students).filter((name) => {
//     let scores = students[name];

//     return scores.every((score) => {
//       let values = score.match(/\d+/g);

//       if (values === null) return false;
      
//       if (values[0] === values[1]) return true;
//     });
//   }).sort();
// }

// console.log(whoPassed({
//   widward: ["10/10", "9/10", "3/5", "10/10"],
//   sora: ["5/10", "5/10", "2/5", "5/10"],
//   riku: ["10/10", "9/10", "9/10", "10/10"],
//   omlette: ["10/10", "10/10", "10/10", "10/10"],
//   pence: ["10/10", "10/10", "10/10", "10/10"],
//   ansem: ["10/10", "10/10", "10/10", "10/10"],
// })); //[ansem, omlette, pence]

// console.log(whoPassed({
//   widward: ["10/10", "9/10", "3/5", "10/10"],
// sora: ["5/10", "5/10", "2/5", "5/10"],
//   riku: ["10/10", "9/10", "9/10", "10/10"],
// })); // []

///////////////////////////////////////////////////////////////////////////////

// You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

// Create a function that takes an object and returns the total price after discount.

/*
Problem
--------
For every shopping cart/customer give a 25% discount on the most expensive item in the shopping cart. If they buy items of the same price discount is still applied to only one item.

INPUT:
array that represents a shopping cart

OUTPUT:
number that represents the total price

RULES:
- 25% discount is applied to one item only
- item should be applied to the most expensive item
- if multiple items of same price apply to only one
- Will there always be an argument provided?
- Will the argument always be an object?
- Will there ever be more than one argument provided?
- Will the object always contain the correct key and values
- Should the total price be returned as a float with decimals?
- Should the total price be rounded?
- What if two different items are the same price and the most expesnive?
- Will the shopping cart ever be empty?
- What will item quanties ever be zero?
- Is there a quantity key?

Examples
--------
console.log(twentyFiveOnOne([
  {
    name: "cafe mocha",
    quantity: 1
    price: 3.00,
  },
  {
    name: "bamboo",
    quantity: 3
    price: 20.00,
  },
  {
    name: "fish",
    quantity: 1
    price: 5.00,
  },
])); // 63

console.log(twentyFiveOnOne([
  {
    name: "Polar Bear's Cafe",
    quantity: 1
    price: 1000000,
  },
  {
    name: "Penguin's Car",
    quantity: 1
    price: 20000,
  },
  {
    name: "Grizzly's Bike",
    quantity: 1
    price: 50000,
  },
]));  // 820,000

console.log(twentyFiveOnOne([
  {
    name: "cafe mocha",
    quantity: 1
    price: 3.00,
  },
  {
    name: "bamboo",
    quantity: 1
    price: 20.00,
  },
  {
    name: "fish",
    quantity: 1
    price: 20.00,
  },
]));  // 38

console.log(twentyFiveOnOne([
  {
    name: "cafe mocha",
    quantity: 1
    price: 3.00,
  },
]));  // 2.25

console.log(twentyFiveOnOne([
  {
    name: "cafe mocha",
    quantity: 1
    price: 3.00,
  },
  {
    name: "cafe mocha",
    quantity: 1
    price: 3.00,
  },
]));  // 5.25

console.log(twentyFiveOnOne([]));  // 0

Data Structures
---------------
Object to parse
Object to parse
Maybe an array for storage

Abstraction
------------
Use object keys to iterate through object
Iterate through everything no need to breakaway
Reduce to sum values
Map for tranformation => array

Algorithm
----------
How will I iterate through the shopping cart array?
- forEach

How will I iterate through each item object? And access the name, quantity, price?
- Object keys to acess the key value pairs
- Do not care about the name
- Access price and quantity
- 

How to find the most expesnive item?
- Use the function max to find the most expenisve item

If more than one expensive item how to only disocunt one?
- I'll have expanded the quantities out to multiple prices

How will I sum all the values?
- reduce to sum

Determine whether the given array is empty or not?
- guard clause

Main Steps:
1. Initialize a array for storage

2. Iterate through the cart

3. For each object iterate through the keys and access the necessary properties

4. For the value of qunaitity add the price to the srtoage array

5. Get the max value from the sotrage array

6. Find the index of the most expensive item in sotrage array and give discount

7. Sum the sotrage array using reeduce
*/

// function twentyFiveOnOne(shoppingCart) {
//   if (shoppingCart.length === 0) return 0;

//   let prices = [];

//   shoppingCart.forEach((item) => {
//     for (let qty = item.quantity; qty > 0; qty -= 1) {
//       prices.push(item.price);
//     }
//   });

//   let priceToDiscount = Math.max(...prices);
//   let index = prices.indexOf(priceToDiscount);
//   prices[index] = priceToDiscount - (priceToDiscount * 0.25);

//   return parseFloat(prices.reduce((sum, num) => sum + num ).toFixed(2), 10);
// }

// console.log(twentyFiveOnOne([
//   {
//     name: "cafe mocha",
//     quantity: 1,
//     price: 3.00,
//   },
//   {
//     name: "bamboo",
//     quantity: 3,
//     price: 20.00,
//   },
//   {
//     name: "fish",
//     quantity: 1,
//     price: 5.00,
//   },
// ])); // 63

// console.log(twentyFiveOnOne([
//   {
//     name: "Polar Bear's Cafe",
//     quantity: 1,
//     price: 1000000,
//   },
//   {
//     name: "Penguin's Car",
//     quantity: 1,
//     price: 20000,
//   },
//   {
//     name: "Grizzly's Bike",
//     quantity: 1,
//     price: 50000,
//   },
// ]));  // 820,000

// console.log(twentyFiveOnOne([
//   {
//     name: "cafe mocha",
//     quantity: 1,
//     price: 3.00,
//   },
//   {
//     name: "bamboo",
//     quantity: 1,
//     price: 20.00,
//   },
//   {
//     name: "fish",
//     quantity: 1,
//     price: 20.00,
//   },
// ]));  // 38

// console.log(twentyFiveOnOne([
//   {
//     name: "cafe mocha",
//     quantity: 1,
//     price: 3.00,
//   },
// ]));  // 2.25

// console.log(twentyFiveOnOne([
//   {
//     name: "cafe mocha",
//     quantity: 1,
//     price: 3.00,
//   },
//   {
//     name: "cafe mocha",
//     quantity: 1,
//     price: 3.00,
//   },
// ]));  // 5.25

// console.log(twentyFiveOnOne([]));  // 0

///////////////////////////////////////////////////////////////////////////////

// Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.

/*
Problem
--------
Given an array with potentially repeating elements, create an object that counts the number of times each element was repeated, then return that object with the highest number of repeating elements first.

INPUT:
array

OUTPUT:
object (in a specific order)

RULES:
- Will argument always be given? Yes.
- Will more than one argument ever be given? No.
- Will the argument always be an array? Yes.
- Will the array ever be empty? Yes.
  => If the array is empty return an empty object
- If no elements are repeating then the count will be one
- If all the elements repeat the same number of times how to organize the object? In the order they appear.
  => [6, 6, 6, 3, 3, 3, 5, 5, 5]  => { '6': 3, '3': 3, '5': 3}
- Can the array contain any type of element? Yes.
  => possible values include undefined, NaN, and null
  => Other elements can also be collections or objects
  => Also numbers, strings, booleans
- Will the array ever have sparse elements? No.
- Does the order of the array matter? Yes, in case they are all of equal count
- Does the number of elements matter? No.
- 

Examples
---------
console.log(countRepetitions([true, false, true]));
// { 'true': 2, 'false': 1 }
console.log(countRepetitions(['hello', 'hello']));
// { 'hello': 2 }
console.log(countRepetitions([null, undefined, NaN]));
// { 'null': 1, 'undefined': 1, 'NaN': 1 }
console.log(countRepetitions([6, 6, 3, 3, 5, 5]));
// { '6': 2, '3': 2, '5': 2 }
console.log(countRepetitions([6, 3, 3, 5, 5, 5]));
// { '5': 3, '3': 2, '6': 1 }
console.log(countRepetitions([6, 3, 5]));
// { '6': 1, '3': 1, '5': 1 }
console.log(countRepetitions([]));
// {}

Data Structure
--------------
Array to iterate through
Object to create and return

Abstractions
------------
iterative method like foreach since I don't need to terminate early
Reduce to count up values or to create an object
I could sort to sort values

Algoirthm
----------
Questions:
How to count up the elements and store each count?
- Reduce to create an object or manually create object

How to sort the object?
- recreate object after gettingkeys and sorting by their respective values
=> get keys, iterate through keys, use sort, use the comparison value of the count to sort the keys, then reitereate through the keys and create an object

How to create the object?
- Use reduce or manually

Main Steps:
1. Get a count of all the elements by creating an object, out of order

2. Get the keys of the object, iterate, then sort the array by value of key in object that has count

3. Iterate through the sorted array of keys, and recreate the object
*/

// function countRepetitions(arr) {
//   let unsortedCounts = arr.reduce((storage, element) => {
//     if (storage[element] === undefined) {
//       storage[element] = 1;
//     } else {
//       storage[element] += 1;
//     }

//     return storage;
//   }, {});

//   let keys = Object.keys(unsortedCounts)
//                    .sort((a, b) => unsortedCounts[b] - unsortedCounts[a]);

//   let obj = {};
//   for (let ind = 0; ind < keys.length; ind += 1) {
//     obj[keys[ind]] = unsortedCounts[keys[ind]];
//   }

//   return obj;
// }

// console.log(countRepetitions([6, 6, 6, 3, 3, 5, 5, 5]));
// // { '5': 3, '3': 2, '6': 1 }
// console.log(countRepetitions(['d', 'c', 'c', 'a', 'a', 'a']));
// // { 'a': 3, 'c': 2, 'd': 1 }
// console.log(countRepetitions([true, false, true]));
// // { 'true': 2, 'false': 1 }
// console.log(countRepetitions(['hello', 'hello']));
// // { 'hello': 2 }
// console.log(countRepetitions([null, undefined, NaN]));
// // { 'null': 1, 'undefined': 1, 'NaN': 1 }
// console.log(countRepetitions([6, 6, 3, 3, 5, 5]));
// // { '6': 2, '3': 2, '5': 2 }
// console.log(countRepetitions([6, 3, 5]));
// // { '6': 1, '3': 1, '5': 1 }
// console.log(countRepetitions([]));
// // {}

///////////////////////////////////////////////////////////////////////////////

// Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

/*
Problem
--------
Given an array of words select the words that contain the same vowels as the first word. The words should not contain any other vowels other than the ones included in the first word. The first word should always be included in the returned array.

INPUT:
Array

OUTPUT:
Array

RULES:
- Argument given, only one arguments, never no argument, etc.
- Array might be empty
- The strings are only lowercase characters (not case sensitive)
- The strings only include letters and whitespace
- If the first word only contains an 'a' vowel, they all other words can contain 'a' and no other vowels.
- 

Examples
--------
console.log(sameVowelGroup(['wey', 'wook', 'its', 'widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// ['wey', 'where', 'he', 'the']

console.log(sameVowelGroup(['wook', 'its', 'widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// ['wook', 'to', 'work', 'work']

console.log(sameVowelGroup(['widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// ['widward', 'widwards']

console.log(sameVowelGroup([]));
// []

Data Structures
----------------
Arrays
Nested iterations because we possibly need to examine every character in every word
Keep the vowels in a data structure, an Array makes the sense (just a list)

Abstractions
-------------
Filter because were eliminating words that don't meet the criteria
ForEach because we don't terminate early from the iteration
Every or Some could be useful since we need ALL of something

Algorithm
----------
Q: How will I iterate through the words array?
A: filter, for loop, forEach (manually build array)

Q: How we might examine each character in each word?
A: for/of or for/in, make an word an array iterate, for loop with index

Q: How to store the given vowels 'aeiou'?
A: Array, or string

Q: How to track which vowels are present in the first word, and which are not present in the first word?
A: Given a list of vowels, iterate through the word and filter any characters that aren't vowels, so then I'm left the included vowels.
   Take the vowels list and iterate through that, filter the ones that are included in the included vowels list. These will be the excluded vowels.
   I'll have two arrays that include included and excluded vowels
   Use them in a conditional to check that the word meets the requirements

Q: How to build the resulting array?
A: By filter or manually

Main Steps:
1. Get the vowels list of included and excluded vowels.
- included: see which are present in the word
- excluded: see which are present in the included ones

2. Iterate through the words array and check that both included and excluded conditions are met.

3. return the resulting array of strings
*/

// function sameVowelGroup(words) {
//   if (words.length === 0) return [];

//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];

//   let includedVowels = VOWELS.filter((vowel) => words[0].includes(vowel));
//   let excludedVowels = VOWELS.filter((vowel) => !includedVowels.includes(vowel));

//   return words.filter((word) => {
//     return includedVowels.every((vowel) => word.includes(vowel)) &&
//     excludedVowels.every((vowel) => !word.includes(vowel));
//   });
// }

// console.log(sameVowelGroup(['wey', 'wook', 'its', 'widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// // ['wey', 'where', 'he', 'the']

// console.log(sameVowelGroup(['wook', 'its', 'widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// // ['wook', 'to', 'work', 'work']

// console.log(sameVowelGroup(['widward', 'widwards', 'woing', 'to', 'work', 'where', 'does', 'he', 'work', 'at', 'the', 'wusty', 'wab']));
// // ['widward', 'widwards']

// console.log(sameVowelGroup([]));
// // []

/*

Given two strings, that may or may not be of the same length, determine the minimum number of character deletions required to make an anagram. Any characters can be deleted from either of the strings.

Problem
-------
modifying strings by removing the least amount of characters possible, then returning the number of characters removed

INPUT:
two strings

OUTPUT:
number (represents deleted characters)
or null

RULES:
- Argument will always be provided
- There will always be two arguments
- Arguments will always be strings
- "A" is different "a" case sensitive
- The strings will never be empty
- Strings can contain any character
- If no common letters return null
- strings can contain whitespaces but they can be ignored

Examples
--------
console.log(makeAnagram("abc", "def"))   // null
console.log(makeAnagram("abc", "abcd"))  // 1
console.log(makeAnagram("cba", "abcd"))  // 1
console.log(makeAnagram("Abc", "abcd"))  // 3
console.log(makeAnagram("123", "1234"))  // 1
console.log(makeAnagram("?#$", "?#$@&")) // 2
console.log(makeAnagram("a b c", "abcd")) // 1

console.log(makeAnagram("cba", "abcd"))  // 1
str1 "c" is included in "abcd" => yes
str2 "a" is included in "cba"  => yes
str1 "b" is included in "abcd" => yes
str2 "c" is included in "cba"   => yes
str2 "d" is included in "cba"  => no (remove char)

"cba" === "abc"
"abc" === "abc"


Data Structures
----------------
Possibly an array
Or leave as string

Abstractions
-------------
for loop

Algorithm
----------
Questions:
How to find which characters are similar and which are not?
- Sort the string first
- Make the strings in to an array
- use the includes function to check each character in the other string
- if not included then delete the character
- switch to the other string

How to delete characters from the string?
- slice from an array?

How to make sure case isn't an issue?
- comparing the string characters

How to deal with whitespace in the strings?
- split to remove whitespace
- regex to remove white space

How will I track the number of deleted characters? From both strings? Get the minimum number of characters?
- Variable 

Main Steps:
1. Find the longer of the two substrings to iterate over

2. sort the strings next

3. Start a for loop and itearte through str1 first then str2 checking to see if each char is included

4. If the character isn't includede increment tracker for deleted characters

5. Return the number of deleted characters

*/
// function makeAnagram(str1, str2) {
//   str1 = sortString(str1);
//   str2 = sortString(str2);
//   let length1 = str1.length;
//   let length2 = str2.length;

//   let maxLength = length1 < length2 ? length2 : length1;
//   let minLength = maxLength === length2 ? length1 : length2;
//   let commonChars = [];

//   for (let ind = 0; ind < minLength; ind += 1) {
//     let str1Char = str1[ind];
//     let str2Char = str2[ind];

//     if (str2.includes(str1Char) && !commonChars.includes(str1Char)) {
//       commonChars.push(str1Char);
//     }

//     if (str1.includes(str2Char) && !commonChars.includes(str2Char)) {
//       commonChars.push(str2Char);
//     }
//   }

//   if (commonChars.length === 0) return null;

//   return (maxLength - commonChars.length) + (minLength - commonChars.length);
// }

// function sortString(string) {
//   return string.replace(/\s/g, '').split('').sort().join('')
// }

// console.log(makeAnagram("abc", "def") === null)
// console.log(makeAnagram("abc", "abcd") === 1)
// console.log(makeAnagram("cba", "abcd") === 1)
// console.log(makeAnagram("Abc", "abcd") === 3)
// console.log(makeAnagram("123", "1234") === 1)
// console.log(makeAnagram("?#$", "?#$@&") === 2)
// console.log(makeAnagram("a b c", "abcd") === 1)

///////////////////////////////////////////////////////////////////////////////

// A floor plan is arranged as follows:

//     You may freely move between rooms 1 and 2.
//     You may freely move between rooms 3 and 4.
//     However, you can enter the hallway to move between rooms 2 and 4.

// Floor Plan
// ___________________________
// |       |         |        |
// |   1   |    2    |        |
// |_______|_________|        |
//                   |        |
//                   |   H    |
// __________________|        |
// |       |         |        |
// |   3   |    4    |        |
// |_______|_________|________|

// Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

/*
Problem
--------
Given instructions on how to move through the given map validate a route given by an array.

INPUT:
array

OUTPUT:
true or false

RULES:
- You can move between 2 and H and 4, 4 and H and 2
- You can move between 1 and 2, 2 and 1
- You can move between 3 and 4, 4 and 3
- Will the array be the only argument given? Will it always be given?
- Will the array ever be empty?
- Will the array ever contain other elements besides number or 'H'
- Will the array contain string numbers or number numbers?
- What kind of numbers are allowed? NaN? Infinity?
- Float values?
- case "H" and "h" are the same?
- Do the number of elements matter in the array?
- Can the same rooms be used in a row? Is that considered valid? NOT VALID
- single element is not considered valid

Examples
---------
console.log(possiblePath([1, 2, 'H', 4, 3])); // true
console.log(possiblePath([2, 'H', 4]));       // true
console.log(possiblePath([4, 'H', 4]));       // true
console.log(possiblePath([1, 'H', 4]));       // false
console.log(possiblePath([1, 2, 3, 4]));      // false

Data Structure
---------------
Arrays
Iterating through arrays
possible object to store valid values

Abstractions
-------------
Some or every to break out early of loop
Filter to filter results?
for loop instead?

Algorithm
----------
Q: How to iterate over the colleciton?
A: Use something that will break early if something returns false

Q: How will I compare each element? Or determine if the path is valid?
A:Use the index + 1 to cmopare the elements, however for the last element other measures should be taken to avoid comparisons with undefined.
A: could also use a for loop that doesn't iterate all the way to the end then you don't have to worry about that

Q: How will I store the valid paths in the object? Or will I make a large conditional expression?
A: I could use an object and store each thing as a string EXCEPT number keys as strings might not be in the same order when inserted.
A: Use single valid value

Main Steps:
1. Create an object with the proper values stored
- Use numbers and H as keys and acceptable value

2. Iterate through the path that is given as an arguemnt
- use a for loop to end early before the last element, or slice?

3. Check that each next element is valid
- use index + 1

4. Return true if the entire path is valid
*/
// function possiblePath(path) {
//   const validMoves = {
//     1: [2],
//     2: [1, 'H'],
//     H: [2, 4],
//     4: [3, 'H'],
//     3: [4],
//   }

//   for (let ind = 0; ind < path.length - 1; ind += 1) {
//     let room = path[ind];
//     let nextRoom = path[ind + 1];
//     if (!validMoves[room].includes(nextRoom)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(possiblePath([1, 2, 'H', 4, 3])); // true
// console.log(possiblePath([2, 'H', 4]));       // true
// console.log(possiblePath([4, 'H', 4]));       // true
// console.log(possiblePath([1, 'H', 4]));       // false
// console.log(possiblePath([1, 2, 3, 4]));      // false

///////////////////////////////////////////////////////////////////////////////

// Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit through a hole with the width(w) and height(h).

/*
Problem
-------
Given measurements of a brick determine if the brick given will fit through a hole with given dimensions.

INPUT:
multiple number inputs (incl. floats)

OUTPUT:
boolean (true if it fits & false if it doesn't)

RULES:
- There will be 5 arguments given in the same order (a, b, c, w, h)
- Can the numbers be float values? Yes.
- Arguments will never be zero but will always be greater than zero (positive values)
- NaN or Infinity? No.
- return true or false
- depth of the hole is irrelevant
- calculate the area of a surface width * height
- calculate the area of the brick widrh * hiehgt * depth?
- no units given

Examples
--------
console.log(doesBrickFit(5, 9, 4, 6, 10));              // true
console.log(doesBrickFit(9, 5, 4, 6, 10));              // true
console.log(doesBrickFit(4, 5, 9, 6, 10));              // true
console.log(doesBrickFit(5.0, 9.5, 4.25, 6.25, 10.75)); // false
console.log(doesBrickFit(5, 9, 4, 6, 10));              // true
console.log(doesBrickFit(5.0, 9.5, 4.25, 3.5, 7.5));    // false

Data Structure
---------------
Use an object to store the argument values?
Use an array to reduce and get product

Abstractions
-------------
reduce to get product
or nothing

Algorithm
----------
Q: Why do I need the depth?
A: Because you can rotate the brick in order to see if it fit through the hole

Q: How to get the area for the brick? For the hole?
A: length x width

Q: How to deal with float values?
A: Do not round the values, ever

Main Steps:
1. Get the area of the hole

2. make the a, b, c elements into an array

3. Transform the array and save the three possible areas

4. Check that all areas can fit thorugh the hole

5. REturn true or false
*/

// function doesBrickFit(a, b, c, w, h) {
//   let holeArea = w * h;
//   let brickDimensions = [(a * b), (b * c), (c * a)];

//   return brickDimensions.some((area) => area <= holeArea);
// }

// console.log(doesBrickFit(5, 9, 4, 6, 10));              // true
// console.log(doesBrickFit(9, 5, 4, 6, 10));              // true
// console.log(doesBrickFit(4, 5, 9, 6, 10));              // true
// console.log(doesBrickFit(5.0, 9.5, 4.25, 6.25, 10.75)); // true
// console.log(doesBrickFit(5, 9, 4, 6, 10));              // true
// console.log(doesBrickFit(5.0, 9.5, 4.25, 3.5, 7.5));    // false

///////////////////////////////////////////////////////////////////////////////

// Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.
/*
Problem
--------
Given a object of entries, return all the unique objects. Unique objects should all have differeing marks or if they have the same mark return whichever entry is older.

INPUT:
Object

OUTPUT:
Object (unique entries)

RULES:
- Always given an argument
- Always given at least one argument
- The argument will always be an object
- The argument object is never empty
- The keys fir each object value are number strings
- The properties for each entry are marks and age (at minimum)\
- Order of insertion will apply because number keys exist
- Two entries are the same if they share they same marks value
- Marks value is a number string
- If they are the same, use age to determine which entry is kept
- Age value will a number
- Entries will never be empty
- If both are the same exactly then return whichever occurs first

Examples
---------

console.log(getObject({
  '1': { marks: '1', age: 1},
  '2': { marks: '2', age: 2},
  '3': { marks: '3', age: 3},
});

// {
//   '1': { marks: '1', age: 1},
//   '2': { marks: '2', age: 2},
//   '3': { marks: '3', age: 3},
// }

console.log(getObject({ 
  '1': { marks: '1', age: 1},
  '2': { marks: '1', age: 2},
  '3': { marks: '3', age: 3},
});

// {
//   '2': { marks: '1', age: 2},
//   '3': { marks: '3', age: 3},
// }

console.log(getObject({
  '1': { marks: '1', age: 1},
  '2': { marks: '1', age: 2},
  '3': { marks: '1', age: 3},
});

// {
//   '3': { marks: '1', age: 3},
// }

console.log(getObject({
  '1': { marks: '1', age: 2},
  '2': { marks: '1', age: 2},
  '3': { marks: '1', age: 2},
});

// {
//   '1': { marks: '1', age: 2},
// }

console.log(getObject({
  '1': { marks: '1', age: 1},
  '2': { marks: '3', age: 2},
  '3': { marks: '1', age: 3},
});

// {
//   '2': { marks: '3', age: 2},
//   '3': { marks: '1', age: 3},
// }

Data Structure
---------------
Objects to parse
Object keys working with Arrays
Create an object manually
Do nesting iterating over an object

Abstractions
-------------
Object keys to iterate through the object
Iterate through the array of keys
=> iterate through them all
=> for Each or for loop

Algorithm
---------
Q: How should I iterate over the given object of entries?
A: reduce

Q: How to compare the marks between the objects?
A: Access the properties directly

Q: HOw to compare the ages between objects that have the same marks?
A: Will compare at the same time since specific condition

Q: How to build an object filled with unique object to return?
A: Reduce

Main Steps:
1. Iterate through the object of entries
- Use the keys of the object to access each property (each entry)
- Add keys that are unique to an array

2. Then for each entry check to see if it is unique, and if it is add to the accumulator of the reduce function
- How to check if unique?
  => look at the values that we already have as unique, and look at each marks
  => Compare to the current object marks value


3. If the entry is not unqiue, in other words, if the marks are the same, compare the ages
=> if the age is less than the already existing object do nothing
=> else the age is greater the already existing object, remove the exisitng object and replace with the object

4. Return object with unique objects

*/

// function getObject(entries) {
//   let allKeys = Object.keys(entries);
  
//   let unique= allKeys.reduce((uniqueKeys, key) => {
//     let entry = entries[key];

//     if (uniqueKeys.length === 0) {
//       uniqueKeys.push(key);
//       return uniqueKeys;
//     } 
      
  
//     for (let index = 0; index < uniqueKeys.length; index += 1) {
//       let otherKey = uniqueKeys[index];
//       let otherEntry = entries[otherKey];

//       if (otherEntry.marks === entry.marks) {
//         if (otherEntry.age < entry.age) {
//           uniqueKeys[index] = key;
//           return uniqueKeys;
//         }

//         return uniqueKeys;
//       }
//     }

//     uniqueKeys.push(key);
//     return uniqueKeys;
//   }, []);

//   return unique.reduce((obj, key) => {
//     obj[key] = entries[key];
//     return obj;
//   }, {});
// }

// console.log(getObject({
//   '1': { marks: '1', age: 1},
//   '2': { marks: '2', age: 2},
//   '3': { marks: '3', age: 3},
// }));

// // {
// //   '1': { marks: '1', age: 1},
// //   '2': { marks: '2', age: 2},
// //   '3': { marks: '3', age: 3},
// // }

// console.log(getObject({ 
//   '1': { marks: '1', age: 1},
//   '2': { marks: '1', age: 2},
//   '3': { marks: '3', age: 3},
// }));

// // {
// //   '2': { marks: '1', age: 2},
// //   '3': { marks: '3', age: 3},
// // }

// console.log(getObject({
//   '1': { marks: '1', age: 1},
//   '2': { marks: '1', age: 2},
//   '3': { marks: '1', age: 3},
// }));

// // {
// //   '3': { marks: '1', age: 3},
// // }

// console.log(getObject({
//   '1': { marks: '1', age: 2},
//   '2': { marks: '1', age: 2},
//   '3': { marks: '1', age: 2},
// }));

// // failing
// // {
// //   '1': { marks: '1', age: 2},
// // }

// console.log(getObject({
//   '1': { marks: '1', age: 1},
//   '2': { marks: '3', age: 2},
//   '3': { marks: '1', age: 3},
// }));

// // {
// //   '2': { marks: '3', age: 2},
// //   '3': { marks: '1', age: 3},
// // }


///////////////////////////////////////////////////////////////////////////////

/*

Write a function that connects each previous word to the next word by the
shared letters. Return the resulting string (removing duplicate characters
in the overlap) and the minimum number of shared letters across all pairs of
strings.

More specifically, look at the overlap between the previous words ending letters
and the next word's beginning letters.

*/

/*
Problem
-------
Given an array of strings, with the elements sharing characters at the beginning/end, delete the duplicate characters that occur and then join the strings together.

INPUT:
Array (strings)

OUTPUT:
Array (string, number)
string => joined elements (after chars removed)
number => represents the deletions

Rules:
- INput will be an array
- Arugment will always be given and 1 argument only
- Empty array? 1 element.
- Number of elements? any number
- elements will always be strings
- letters only in string? Yes.
- Case sensitive? No because only lowercase.
- What is the return value? Array
- Returned array will be the string elements joined with chars removed and a number.
- Number should be the minimum num of deleted charactres between the pairs
- If 1 element return string as is
- 

Examples
---------
console.log(joinWords(["abc"]));        // ["abc", 0]
console.log(joinWords(["abc", "cat"])); // ["abcat", 1]
console.log(joinWords(["abc", "cat", "turtle"]));
// ["abcaturtle", 1]
console.log(joinWords(["abcc", "ccat", "ttturtle"]));
// ["abccattturtle", 1]

Data Structure
---------------
Array
maybe leave the strings as strings

Abstractions
-------------
transformation
reduce (building a string from the elements)

Algorithm
----------
Q: How I want to iterate through the elements in the array
A: Maybe I'll reduce

Q: How to compare the current string to the next string looking at the overlapping characters?
A: Start iterating at the end of the curren string
Start at the beginning of the second string
Compare until they don't match

Q: Figure out how to remove the characters that are removed and track the minimum value?
A: slice the string, replace the characters,
If i slice compare the original to the new length 
Or just increment a counter every time I delete a character, maybe store in an array and get minimum value

Q: Join the string, place in array with the counter?
A: Join function 

Main Steps:
1. Start a tracker for the deletions that occur (array)

2. Iterate through the array
- provide starting arugment to reduce ''

3. Add the first element to the acc

4. Start comparing the element to the end of the acc
- start at the end of the acc, compare to the first char of element
  => use negative index to slice acc
  => use positive index to slice the element
- compare second to last + last (substring) to the first two characters of the element
- When they don't equal eachother add the current string that matches


console.log(joinWords(["abc", "cat", "turtle"]));
"abc" vs "cat"
"c" vs "c" => delete the character "c" in "cat"
"bc" vs" "ca" => break out of loop

'abc' vs. 'bcba'
'abcba'

"abcat"

5. Increment any deletions that occur

6. Initialize a return array, add the string, and get the minimum value from the tracker array

*/

// function joinWords(array) {
//   if (array.length === 1) return [array[0], 0];

//   let allDeletions = [];
//   let combinedString = array.reduce((resultStr, currentStr) => {
//     let matchingIndex = currentStr.indexOf(resultStr.slice(-1));

//       let startingChars = currentStr.slice(0, matchingIndex + 1)
//       let endingChars = resultStr.slice(-startingChars.length);

//       if (endingChars === startingChars) {
//         let numberRemoved = startingChars.length;
//         resultStr = resultStr.concat(currentStr.slice(numberRemoved));
//         allDeletions.push(numberRemoved);
//       }

//     return resultStr;
//   });

//   return [combinedString, Math.min(...allDeletions)];
// }

// console.log(joinWords(["abc"]));        // ["abc", 0]
// console.log(joinWords(["abc", "cat"])); // ["abcat", 1]
// console.log(joinWords(["abc", "cat", "turtle"]));
// // ["abcaturtle", 1]
// console.log(joinWords(["abcc", "cat", "ttturtle"]));
// // ["abccattturtle", 1]
// console.log(joinWords(["abc", "bcat"]));
// // ["abcat, 2]


///////////////////////////////////////////////////////////////////////////////

// Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

//     product: the product name that the user selected.
//     change: an array of coins (can be empty, must be sorted in descending order).

/*
Problem
--------
Make a vending machine. Given money and a product number return the corresponding product name and give any needed change in cents.

INPUT:
3 arguments:
product constant
number (product name)
number (cents)

OUTPUT:
1 argument
object with change in an array
with product name

RULES:
- Products are given
- Cents can be 500, 200, 100, 50, 20, 10
- Change should be in an ordered array (desc)
- The return value should be an object with the key product and change
- Product should be a string
- The amount of change can be 0 so an empty array for change key
- Only input one product number at a time
- If not enough money is given return a string "Not enough money for this product"

Examples
--------
console.log(vendingMachine(products, 1, 500));
// { product: 'Orange juice', change: [200, 100] }

console.log(vendingMachine(products, 9, 500)); // 420
// { product: 'Small snack', change: [200, 200, 20] }

console.log(vendingMachine(products, 2, 10));
// "Not enough money for this product"

Data Structure
--------------
Object
Array for the change
Array for the products constant
Return value is an object

Three arguments => object with a nested array
array of the types of coins

Abstractions
------------
Don't want to use forEach since I'll need to break out early when there is a match

How to iterate through the change array to get the coins
Maybe reduce to calculate the change

Algorithm
----------
Main Steps:

1. Given products, the product number, and amount of money
  a. products is a predefined constant that references an array
      => array contains objects for each element
      => each object has a number, price, and name property
  b. ...

2. Now locate the product by number in the products constant
  a. Iterate through the products array until I find a matching product number
  b. Then for that product object:
    - figure out if enough money given...

3. Once I locate the product determine if I have enough money for the product
  Q: How to know if enough money was given?
    - money given is equal to or greater than price
  Q: What to do if not enough money is given?
    - if not return string "sorry..."

4. Calculate the change if necessary
  Q: How to calcualte the amount of change, then get coins?
    - get difference between money given and price
  
  a. With change calcuated get coins that add up to the total change
    => following are valid coins [500, 200, 100, 50, 20, 10]
  b. Iterate through the coins array and construct a new array that will represents my coins to return to person
    => For each coin in the array:
      - see if coins are divisble into total amount
      - If they are, save the result and add that many of the coin to the change array
      - Then subtract the same number of those coins from the result before moving on to the next coin
      - repeat as needed
      - I need to be able to breakout if total change becomes zero since I will have enough coins at that point
      - (for loop?)

5. Get the product name, get the change array, and put it inside a new object, then return that object

// */
// const products = [
//   { number: 1, price: 100, name: 'Orange juice' },
//   { number: 2, price: 200, name: 'Soda' },
//   { number: 3, price: 150, name: 'Chocolate snack' },
//   { number: 4, price: 250, name: 'Cookies' },
//   { number: 5, price: 180, name: 'Gummy bears' },
//   { number: 6, price: 500, name: 'Condoms' },
//   { number: 7, price: 120, name: 'Crackers' },
//   { number: 8, price: 220, name: 'Potato chips' },
//   { number: 9, price: 80,  name: 'Small snack' },
// ];

// function vendingMachine(products, money, productNumber) {
//   let selectedProduct = selectProduct(products, productNumber);

//   if (selectedProduct === undefined) return "Enter a valid product number"

//   if (selectedProduct.price <= money) {
//     let coins = calculateChange(selectedProduct.price, money);
//     let name = selectedProduct.name;

//     return {
//       product: name,
//       change: coins,
//     }
//   } else {
//     return "Not enough money for this product";
//   }
// }

// function selectProduct(list, productNumber) {
//   for (let index = 0; index < list.length; index += 1) {
//     if (list[index].number === productNumber) return list[index];
//   }

//   return undefined;
// }

// function calculateChange(amount, given) {
//   const coins = [500, 200, 100, 50, 20, 10];
//   let change = given - amount;
//   let changeArray = [];

//   if (change > 0) {
//     for (let index = 0; index < coins.length; index += 1) {
//       let coin = coins[index];
//       let numOfCoins = Math.floor(change / coin);
//       if (numOfCoins > 0) {
//         for (let count = numOfCoins; count > 0; count -= 1) {
//           change -= coin;
//           changeArray.push(coin);
//         }
//       }
//       if (change < 0) return changeArray;
//     }
//   }

//   return changeArray;
// }

// console.log(vendingMachine(products, 500, 1));
// // { product: 'Orange juice', change: [200, 200] }

// console.log(vendingMachine(products, 500, 9)); // 420
// // { product: 'Small snack', change: [200, 200, 20] }

// console.log(vendingMachine(products, 10, 2));
// // "Not enough money for this product"

// console.log(vendingMachine(products, 250, 4));
// console.log(vendingMachine(products, 250, 40));
// console.log(vendingMachine(products, 0, 0));

///////////////////////////////////////////////////////////////////////////////

// You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?

// cropHydrated([
//   [ "c", "c", "c", "c" ],
//   [ "w", "c", "c", "c" ],
//   [ "c", "c", "c", "c" ],
//   [ "c", "w", "c", "c" ]
// ]) // false

/*
Problem
--------
Give a matrix (nested array) determine whether the entire array of "crops" is watered. The nested arrays may contain "w" which is a water source, and the crops directly surrounding the "w" will be considered watered (above, below, diagonal) for a total of 8 crops.

INPUT:
Array of arrays
(the nested arrays contain strings)

OUTPUT:
boolean (true if every crop is watered and false otherwise)

RULES:
- For each "w" 8 crops will be watered
- The number of element will represent the number of rows of crops
- The length of the array elements will represent the number of columns of crops
- The matrix can be of any length (rows and columns)
- The field can have more than one water source "w"
- If a "w" is on the edge of the field then not all 8 crops will be watered.
- As soon as I come across a crop that isn't close to a "w" i can return false
- Don't have to iterate through the entire crop field

Examples
---------

[
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]

4 x 4 matrix => 16 elements total
14 crops + 2 water sources
total watered = 8 / 16

Position of water sources:
"w" @ [1][0]
"w" @ [3][1]

[
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "c", "w", "c" ],
  [ "c", "c", "c", "c" ]
]

[
  [ "c", "c", "c"],
  [ "c", "w", "c"],
  [ "c", "c", "c"],
  [ "c", "c", "c"],
  [ "c", "w", "c"],
  [ "c", "c", "c"]
] // true

Data Structure
--------------
Array

Abstraction
------------
every so it will return false immediately
or a for loop to break out of the iterating

Algorithm
----------
[
  [ "c", "c", "c", "c" ],  
  [ "w", "c", "c", "c" ],  
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]

[
  [ "w", "c", "c", "w" ],  
  [ "c", "c", "c", "c" ],  
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "w" ]
]

- start at "c"
=> check previous index unless column index is 0
=> check next index unless column index is length of arr
=> check row above unless row index is 0
=> check row below unless row index is length of the arr
=> if a "w" is found return true immedately and move on to next "c"

Q: How to iterate through each element?

Q: How to track rows and columns? How to check previous and next rows/columns?

Q: How to make sure I don't go out of bounds and return undefined?

Q: 

Main Steps:
1. Locate all the "w"s
  => Iterate through each row use row index and get the column index of the "w"
  => save coordinates possibly as an object but in an array
  => repeat for all rows until all "w" are found

2. Make the coordinates for surroudning c's
  => for each "w" coordinat:
     ccc
     cwc
     ccc
    - given x and y
    - (x - 1) and (y + 1) // top left
    - (x + 0)     (y + 1) // top
    - (x + 1) and (y + 1) // top right
    - (x - 1)     (y + 0) // middle left
    - (x + 0)     (y + 0) // center
    - (x + 1)     (y + 0) // middle right
    - (x + 1) and (y - 1) // bottom right
    - (x + 0)     (y - 1) // bottom
    - (x - 1) and (y - 1) // bottom right

  HELPER FUNCTION
  [-1, 0, 1] iterate through values for y
    => [-1, 0, 1] iterate thorugh values for x
    watered crop would be "w" x value + x => crop x
    watered crop would be "w" y value + y => crop y
    coodrinate x, y
  create an object { x: value, y: value } in an array so I can iterate

3. Remove any that are invalid
   => if any value is negative
   => if any value is outside the number of rows
   => if any value is outside the number of columns

   Maybe have a conditional to avoid adding those in the first palce

4. Change each coordinate to "x"
- use reassignment to reassing the index at each coordinate

5. Then iterate back through and check if there are any "c"s remaining
- iterate using some to check for "c"s
*/

// console.log(cropHydrated([
//   [ "c", "c", "c", "c" ],
//   [ "w", "c", "c", "c" ],
//   [ "c", "c", "c", "c" ],
//   [ "c", "w", "c", "c" ]
// ])) // false

// console.log(cropHydrated([
//   [ "w", "c", "c", "w" ],  
//   [ "c", "c", "c", "c" ],  
//   [ "c", "c", "c", "c" ],
//   [ "w", "c", "c", "w" ]
// ])) // true
// console.log(cropHydrated([
//   [ "w", "c", "c",],  
//   [ "c", "c", "c",],  
//   [ "c", "c", "c",],
//   [ "w", "c", "c" ]
// ])) // false
// console.log(cropHydrated([
//   [ "c", "c", "c",],  
//   [ "c", "w", "c",],
//   [ "c", "c", "c",],
// ])) // true
// console.log(cropHydrated([
//   [ "w", "w", "w",],  
// ])) // true
// console.log(cropHydrated([
//   [ "c", "c", "c",],  
// ])) // false

// // [
// //   { col: 0, row: 0 },
// //   { col: 1, row: 0 },
// //   { col: 0, row: 1 },
// //   { col: 1, row: 1 },
// //   { col: 0, row: 2 },
// //   { col: 1, row: 2 }
// // ]
// function cropHydrated(field) {
//   let totalRows = field.length;
//   let totalCols = field[0].length;
//   let waterSources = findWaterSources(field);

//   waterSources.forEach((source) => {
//     let cropsNearby = cropsAroundWaterSource(source, totalCols, totalRows);

//     cropsNearby.forEach((crop) => {
//       field[crop.row][crop.col] = "x";
//     })
//   });

//   let allCropsWatered = field.flat().every((plot) => plot === "x");

//   return allCropsWatered;
// }

// function findWaterSources(field) {
//   return field.reduce((allCoordinates, row, rowIndex) => {
//     row.forEach((plot, colIndex) => {
//       if (plot === 'w') {
//         allCoordinates.push({
//           col: colIndex,
//           row: rowIndex,
//         })
//       }
//     })

//     return allCoordinates;
//   }, [])
// }

// function cropsAroundWaterSource(coordinate, maxCol, maxRow) {
//   const range = [-1, 0, 1];

//   return range.reduce((allCoordinates, rowOffset)=> {
//     range.forEach((colOffset) => {
//       let newCol = coordinate.col + colOffset;
//       let newRow = coordinate.row + rowOffset;

//       if ((newCol >= 0 && newRow >= 0) &&
//         (newCol < maxCol && newRow < maxRow)) {
//           allCoordinates.push({
//             col: newCol,
//             row: newRow,
//           })
//       }
//     })

//     return allCoordinates
//   }, []);
// }

///////////////////////////////////////////////////////////////////////////////

// Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

/*
Problem
-------
Grouping numbers in an array into n sized groups. Then after grouped get the sum of each column. If any are equal then return the lowest index column.


INPUT:
array

OUTPUT:
number

RULES:
- Array always given, aat least one argument, no other input
- Array always divided into equal lengths
- Array can never be empty
- Always number elements, varying numbers
- NaN Infinity input no
- Zero as an element just treat as zero
- n is a number that divides evenly into the array length
- col numbering start at 1
- sparse arrays no
- greater than one element 
- can n be any value? n must be less than array length
- n can be equal to the array length

EXAMPLES
--------
console.log(colWithMaxSum([1, 1, 2, 3, 4, 5, 6, 6, 4], 3);  // 2
console.log(colWithMaxSum([9, 1, 2, 3, 4, 5, 6, 6, 2], 3);  // 1
console.log(colWithMaxSum([1, 1, 2, 3, 4, 5, 6, 6, 4], 9);  // 7


// [1, 1, 2]
// [3, 4, 5]
// [6, 6, 4] 

// col 1 = 10
// col 2 = 11
// col 3 = 11

// => col 2

Data Structures
---------------
Arrays
nested array for columns
matrix
No using array fill since it will dup across arrays

ABSTRACTIONS
-------------
No transformation bc diff number of elemnts
No filtering
Possibly reduce (set with a loop and empty once nested arry is full)
reduce again for summing the columns

ALGORITHM
---------
Q: How to create my groups of n length?
A: Use reduce with a for loop

Q: How to iterate through the columns?
A: Use a for loop (helper method) => return an array of column sums???

Q: How to sum the column values?
A: Iterate through each column index
   Iterate through each nested array index

Q: How to determine the greatest?
Use the max fucntion of Math object

Main Steps:
1. Create my grouped nested array
  => Initialized an empty array
  => Iterate through the given array
  => Witin iteration have another array created
  => keep adding elements until a certain length is reached
  => once the length is hit, add to outer empty array, reset inner arry to empty
  => return nested array object

2. Get the column sums of the matrix
  => HELPER METHOD
  INPUT: grouped array
  => get the length of the array
  => get the length of the nested arrays
  => iterate through the length of the nested arrays
  => iterate through the legnth of the array
  => so each nested array element, grab the current index of the length of the nested array and add to sum
  => once iterated through the length of the array add sum to sotrage array
  => Should return an array of sum values
  OUTPUT: an array of sums of each column

3. Determine the max sum of the columns return the column number
  => pass Math max function
  => Index of to get the column + 1

*/

// function colWithMaxSum(array, n) {
//   let groups = [];
//   let subArray = [];

//   array.forEach((num) => {
//     subArray.push(num);

//     if (subArray.length === n) {
//       groups.push(subArray);
//       subArray = [];
//     }
//   })

//   let sums = sumColumns(groups);
//   let maxIndex = Math.max(...sums);
  
//   return sums.indexOf(maxIndex) + 1;
// }

// function sumColumns(groups) {
//   let rows = groups.length;
//   let cols = groups[0].length;
//   let sums = []

//   for (let colIndex = 0; colIndex < cols; colIndex += 1) {
//     let colTotal = 0;

//     for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
//       colTotal += groups[rowIndex][colIndex];
//     }

//     sums.push(colTotal);
//   }

//   return sums;
// }

// console.log(colWithMaxSum([1, 1, 2, 3, 4, 5, 6, 6, 4], 3));  // 2
// console.log(colWithMaxSum([9, 1, 2, 3, 4, 5, 6, 6, 2], 3));  // 1
// console.log(colWithMaxSum([1, 1, 2, 3, 4, 5, 6, 6, 4], 9));  // 7

///////////////////////////////////////////////////////////////////////////////

// Create a function that determines how many number pairs are embedded in a space-separated string. The first numeric value in the space-separated string represents the count of the numbers, thus, excluded in the pairings.

/*
Keyterms:
Space separated string  "abc abc..."
numeric value           "1  abc abc..."
count                   one represents the pair of numbers
excluded in pairings    the first number is excluded in the pairings

PROBLEM
--------
Given a string, determine how many pairs of numbers are included in the string, exluding the first numeric value.

INPUT:
String (numbers and whitespace)

OUTPUT:
Number

RULES:
- The string can consist of numbers and whitespace
- So a pair means duplicate
- Exclude the first number when totalling pairs
- What is count? Count is total number of numbers in the string where a number is distinguished by whitespace
- NaN, Infinity, or -Infinity inputs? No.
- Handle zero as usual.
- Input will always be a string
- Input will only be one argument
- Argument will always be provided
- Empty string input? No.
- pair is defined by same number occurring twice, if occurs more than twice but not enough to form another pair, it wouldn't count
- numbers are within any range except infinity
- Can there be negative numbers? No.

EXAMPLES
---------
console.log(numberPairs("0"));                                // 0
console.log(numberPairs("2 0 0"));                            // 1
console.log(numberPairs("5 4 6 4 4 6"));                      // 2
console.log(numberPairs("5 4 5 4 4 5 5"));                    // 2
console.log(numberPairs("8 0 0 1 1 2 3 2 5"));                // 3
console.log(numberPairs("     5 4     6 4      4  6"));       // 2
console.log(numberPairs("10 40 60 40 40 60 20 20 40 45 45")); // 5

DATA STRUCTURE
--------------
Array (split to transform string into an array)
Easier to work with finding pairs, separated into separate elements

Object? To count each element how many times it appears?
Total those values

ABSTRACTION
-----------
String => Array
forEach (no need to break early)
Reduce to construct an object of counts

ALGORITHM
---------
Q: How to convert the stirng into an array?
A: slice

Q: How do I want to iterate over the array
A: reduce build obj

Q: How to keep track of the pairs?
A: obj of reduce

Q: How to avoid to counting the first number in the process?
A: slice array before hand

Q: How should I total the number of pairs per string argument?
A: Iterate throught he object values, divide each count by 2 to get the possible number of pairs, and then add that to total pairs (reduce again?)

Main Steps:
1. Convert the string into an array and iterate over it
  => Use split with whitespace
  => remove the first element from the array
  => I would pass to helepr function

2. Build the count of numbers object (HELPER FUNCTION)
  => Iterate through the array, with an acc obj
  => for each number, increment the count or create a new property
  => Return an object
  => Take object in main function and pass to next helper function

3. Total the number of pairs (HELPER FUNCTION)
  => Getting Obejct keys and iterating using acc
  => only add to the acc after dividng the count of each number by 2, and if it's greater than one add
  => Left with numeric value to return  

4. Return the total number of pairs from the main function
*/

// function numberPairs(str) {
//   let numArray = str.match(/\b\d+\b/g).slice(1);
//   let countOfNumbers = numberCounts(numArray);

//   return numberOfPairsTotal(countOfNumbers);
// }

// function numberCounts(array) {
//   return array.reduce((obj, strNum) => {
//     if (obj[strNum] === undefined) {
//       obj[strNum] = 1;
//     } else {
//       obj[strNum] += 1;
//     }

//     return obj;
//   }, {});
// }

// function numberOfPairsTotal(counts) {
//   let keys = Object.keys(counts);

//   return keys.reduce((total, key) => {
//      return total + Math.floor(counts[key] / 2);
//   }, 0);
// }

// console.log(numberPairs("0"));                                // 0
// console.log(numberPairs("2 0 0"));                            // 1
// console.log(numberPairs("5 4 6 4 4 6"));                      // 2
// console.log(numberPairs("5 4 5 4 4 5 5"));                    // 2
// console.log(numberPairs("8 0 0 1 1 2 3 2 5"));                // 3
// console.log(numberPairs("     5 4     6 4      4  6"));       // 2
// console.log(numberPairs("10 40 60 40 40 60 20 20 40 45 45")); // 5

///////////////////////////////////////////////////////////////////////////////

// Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.

/*
Key Terms:
2D array => nested array (probably a matrix)
suspended blocks => # (somewhere but the last nested array element)
gravity shift => mean the blocks drop into different "rows" or elements

PROBLEM
--------
Given a matrix with hashtag characters in various rows/columns, return the result of the hashtags falling to the bottom of the matrix

INPUT:
Matrix (2D array ((nested array)))

OUTPUT:
Matrix with altered appearance

RULES:
- Matrix will always be provided as an argument? Yes.
- One 2D array argument provided at a time
- Argument will always be a matrix
- Empty array argument? No.
- No nested elements empty.
- whitespace or "string" + only hashtags
- Possible there are no hashtags? Return the matrix as is
- Possible it's all hashtags
- No sparse arrays
- n x n grid? Not square shaped
- n x m grid grid grid...
- 

EXAMPLES
--------
noBlocks = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
]

allBlocks = [
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"],
  ["#", "#", "#"],
]

fallingBlocks = [
  [" ", "#", "#"],
  [" ", " ", " "],
  ["#", "#", " "],
  ["#", " ", " "],
]

// [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   ["#", "#", " "],
//   ["#", "#", "#"],
// ]

DATA STRUCTURE
--------------
2D array (matrix)
Iterating through rows and columns

Object could be useful to get count of hashtags

ABSTRACTIONS
------------
for loop


ALGORITHM
----------
Main Steps:
1. Iteate through the matrix using a for loop
  => outer iteration on the number of columns (stay on same column each row)
  => inner iteration on the numebr of rows

2. Get the count of blocks from each column, and add the number to a separate array
  => initialize a counter variable and add after breaking out of column iteration (reset on each iteration)

3. Reverse the input array, iterate through again, replace each element with a hashtag as long as the count is greater than zero
 => using each element as a counter iterate through the array, and replace each column
 => substract evertime I replace a hashtag (even if already hashtag?)
=> after the count is zero, then replace with whitespace

4. Reverse the array again, return it
*/

// function switchGravityOn(blocks) {
//   let blockCountPerCol = blockCount(blocks);

//   let rows = blocks.length;
//   let cols = blocks[0].length;
//   blocks.reverse();

//   for (let colIndex = 0; colIndex < cols; colIndex += 1) {
//     let counter = blockCountPerCol[colIndex];

//     for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
//       let block;

//       if (counter > 0) {
//         block = "#"
//         counter -= 1
//       } else {
//         block = " ";
//       }

//       blocks[rowIndex][colIndex] = block;
//     }
//   }

//   return blocks.reverse();

// }

// function blockCount(matrix) {
//   let rows = matrix.length;
//   let cols = matrix[0].length;
//   let counts = [];

//   for (let colIndex = 0; colIndex < cols; colIndex += 1) {
//     let counter = 0;
    
//     for (let rowIndex = 0; rowIndex < rows; rowIndex += 1) {
//       if (matrix[rowIndex][colIndex] === "#") {
//         counter += 1;
//       }
//     }

//     counts.push(counter);
//   }

//   return counts;
// }

// const noBlocks = [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", " ", " "],
//   [" ", " ", " "],
// ]

// const allBlocks = [
//   ["#", "#", "#"],
//   ["#", "#", "#"],
//   ["#", "#", "#"],
//   ["#", "#", "#"],
// ]

// const fallingBlocks = [
//   [" ", "#", "#"],
//   [" ", " ", " "],
//   ["#", "#", " "],
//   ["#", " ", " "],
// ]

// console.log(switchGravityOn(noBlocks));
// console.log(switchGravityOn(allBlocks));
// console.log(switchGravityOn(fallingBlocks));


// [
//   [" ", " ", " "],
//   [" ", " ", " "],
//   ["#", "#", " "],
//   ["#", "#", "#"],
// ]

///////////////////////////////////////////////////////////////////////////////

// Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

//  arr,  x,  y

//     arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
//     x will hold the row coordinate, while y will hold the column coordinate.

// You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

/*
Key terms:
lowest neighbor => lowest x y coordinate nearest the one given
2D array => grid or coordinate plane (each element represents various points)
array has integer valuaes
x row      * * *
y col      *x y*
           * * *

PROBLEM
--------
Find neighboring element in a 2d array that are lower on the y coordinate plane, otherwise return the original argument.

INPUT:
Three argument
(array, x coordinate, y coordinate)

OUTPUT:
x-y coordinate (array) [x, y]

RULES:
- the grid is nxn grid (each point doesn't necessary represent an accurate grid)
- the points will vary and are not seequential
- 2D array we are given has integers
- always the input, number of arguments, other types of arguments
- Is the point given, included in the array argument
- Empty arrays?
- Are there any sparse arrays?
- other types of elements?
- if there are the same lowest points?
- If there are no lowest then return original
- Grid of values, get the coordinate, then return the lowest number surroudning it
- where do the coordinates start at?

EXAMPLES
---------
arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

arr2 = [
  [7, 8, 7],
  [6, 5, 6],
  [9, 8, 9],
]

arr3 = [
  [7, 8, 7],
  [1, 5, 6],
  [1, 9, 6],
]

console.log(lowestElement(arr1, 0, 1)); // [0, 0]
console.log(lowestElement(arr2, 1, 1)); // [1, 1]
console.log(lowestElement(arr3, 1, 1)); // [1, 0]

DATA STRUCTURES
---------------
Array (2D array)
could be useful to use anobject? No.

ALGORITHM
---------
Q: How am I going to iterate through the nested array
A: I need to use for loop with rows and colums could potentiallty use each with index 

Q: How to locate the coordinates and compares values
A: get the value first using the coordinates

Q: How to get the coordinates of the values to return
A: track the indexes being used to iterate through the nested array

Main Steps:
1. Grab the value I'll be comparing
- use the x and y coordinates
- get the value from the object

2. Iterate surrounding the coordinate. Incrementing/decrementing each row and col value by 1.
- iterate using a range of -1, 0, and 1 to get surrouding values.
- For eaech coordinate compare the value, if less than, store the coordinate, otherwuise do nothing.

3. only reassign the lowest value if a value was lower, track the coordinate too, maybe store in an object, or just track the coordinate.
// */

// function lowestElement(array, x, y) {
//   let lowestCoordinate = array[x][y];
//   let tempX;
//   let tempY;

//   [-1, 0, 1].forEach((rowOffset) => {
//     tempX = x + rowOffset;

//     [-1, 0, 1].forEach((colOffset) => {
//       tempY = y + colOffset;

//       if (tempX >= 0 && tempX < array.length &&
//           tempY >= 0 && tempY < array[0].length) {
//         if (array[tempX][tempY] < lowestCoordinate) {
//           lowestCoordinate = array[tempX][tempY];
//         }
//       }
//     });
//   });

//   return lowestCoordinate;
// }

// let arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// let arr2 = [
//   [7, 8, 7],
//   [6, 5, 6],
//   [9, 8, 9],
// ]

// let arr3 = [
//   [7, 8, 7],
//   [1, 5, 6],
//   [1, 9, 6],
// ]

// console.log(lowestElement(arr1, 0, 1)); // [0, 0]
// console.log(lowestElement(arr2, 1, 1)); // [1, 1]
// console.log(lowestElement(arr3, 1, 1)); // [1, 0]

///////////////////////////////////////////////////////////////////////////////

// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

/*
EXAMPLES
--------

console.log(vaildBattleshipField([
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]));

// true

console.log(vaildBattleshipField([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]));
// false; destoryer + battleship overlap

console.log(vaildBattleshipField([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]));

// false; submarine + battleship next to eachother

console.log(vaildBattleshipField([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]));

// false; missing battleship

console.log(vaildBattleshipField([
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]));

// false; additional battleship


[
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
]
battleship row 0     col 0 - 3 (length 4)
cruisers   row 1 - 3 col 5     (length 3)
cruisers   row 1 - 3 col 7
destroyers row 4     col 2 - 3 (length 2)
destroyers row 7 - 8 col 1
destroyers row 7     col 6 - 7
submarines row 5     col 8     (length 1)
submarines row 6     col 3
submarines row 8     col 4
submarines row 9     col 7

*/

// function vaildBattleshipField(grid) {

// }

//   console.log(vaildBattleshipField([
//     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   ]));
  
//   // true
  
//   console.log(vaildBattleshipField([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   ]));
//   // false; destoryer + battleship overlap
  
//   console.log(vaildBattleshipField([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
//     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   ]));
  
//   // false; submarine + battleship next to eachother
  
//   console.log(vaildBattleshipField([
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   ]));
  
//   // false; missing battleship
  
//   console.log(vaildBattleshipField([
//     [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [1, 1, 1, 1, 0, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   ]));
  
  // false; additional battleship
  
  /////////////////////////////////////////////////////////////////////////////

  
// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

/*
Key terms:
buckets => part of a string
n => second argument
full words => the words shouldn't be chopped

PROBLEM
-------
Given a string argument and n divide the **words** of the string into lenghts of n or fewer characters

INPUT:
string
(lowercase)
number

OUTPUT:
Array of strings

RULES:
- lowercase alphabetic characters only as string input
- Argument will always be provided
- ARgument will always be a string and a number
- Never an empty string
- preserve word order for returned Array
- word is any character separated by whitespace
- n will be greater than 0
- No NaN or Infinity for number input
- whitespace cannot prefix or suffix the buckets
- if n is smaller than any word in the string then return an empty array.

EXAMPLES
--------
console.log(bucketize("she sells sea shells by the sea", 10));
// ➞ ["she sells", "sea shells", "by the sea"]
console.log(bucketize("she sells sea shells by the sea", 2));
// ➞ []
console.log(bucketize("the mouse jumped over the cheese", 7));
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
console.log(bucketize("fairy dust coated the air", 20));
// ➞ ["fairy dust coated", "the air"]
console.log(bucketize("a b c d e", 2));
// ➞ ["a", "b", "c", "d", "e"]

DATA STRUCTURES
---------------
Array for return value

ABSTRACTIONS
------------
forEach maybe?
for loop
reduce 

ALGORITHM
---------
Q: How to determine a way to split the string, to either iterate or begin putting words into buckets?

Q: How to determine the bucket is full?

Q: How to account for whitespace between the words and not include it on the beginning or end of the bucket (string)?

Q: How I would make sure the entire string is being bucketized?

Main Steps:
-----------
1. Initialize an empty array to store buckets in
  => 

2. Turn the string into an array and iterate through the array
  => for loop

3. Using another temp array add elements until the joined (with whitespace) character count is greater than n
 => subarray []
 => ["she"] << "sells" 
 => ["she", "sells"].join(' ') then look at the length

4. Add the joined temp array to the result

5. Repeat

6. return the result array or an empty array

// */

// function bucketize(phrase, n) {
//   let buckets = [];
//   let words = phrase.split(' ');
//   let subarray = [];

//   for (let ind = 0; ind < words.length; ind += 1) {
//     let word = words[ind];
//     subarray.push(word);

//     if (subarray.join(' ').length > n) {
//       subarray.pop()
//       buckets.push(subarray.join(' '));
//       subarray = [];
//       subarray.push(word);
//     }

//     // console.log(subarray);
//   }
//   buckets.push(subarray.join(' '));
//   return buckets;
// }


// console.log(bucketize("she sells sea shells by the sea", 10));
// // ➞ ["she sells", "sea shells", "by the sea"]
// console.log(bucketize("she sells sea shells by the sea", 2));
// // // ➞ []
// console.log(bucketize("the mouse jumped over the cheese", 7));
// // // ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]
// console.log(bucketize("fairy dust coated the air", 20));
// // // ➞ ["fairy dust coated", "the air"]
// console.log(bucketize("a b c d e", 2));
// // ➞ ["a", "b", "c", "d", "e"]

///////////////////////////////////////////////////////////////////////////////

// Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).

/*

PROBLEM
-------
Given a starting corner, fill in values starting at zero, from a specified corner.

INPUT:
n for the nxn grid
corner => ul, ll, ur, lr

OUTPUT:
matrix

RULES:
- Valid arguments provided
- n is greater than zero at all times
- no case
- 

EXAMPLES
--------
console.log(diagnonalize(5, ul));
console.log(diagnonalize(3, lr));
console.log(diagnonalize(3, ur));
console.log(diagnonalize(3, ll));
console.log(diagnonalize(1, ur);

// [
//   [0, 1, 2, 3, 4],
//   [1, 2, 3, 4, 5],
//   [2, 3, 4, 5, 6],
//   [3, 4, 5, 6, 7],
//   [4, 5, 6, 7, 8],
// ]

// [
//   [4, 3, 2],
//   [3, 2, 1],
//   [2, 1, 0],
// ]

// [
//   [2, 1, 0],
//   [3, 2, 1],
//   [4, 3, 2],
// ]

// [
//   [2, 3, 4],
//   [1, 2, 3],
//   [0, 1, 2],
// ]

// [[0]]

DATA STRUCTURES
---------------
Array to store arrays in
NEsted array elements to fill them with values

Be aware of the order of the entire array
BE aware of the order of the subarrays

ALGORITHM
----------
Q: How to get n number of elements in my array?

Q: Within those elements how to get n number of values?

Q: How to alter the values so each subarray starts from a different numeric values?

Q: How to determine what corner to start from?

Main Steps:
1. Start a for loop, and keep adding elements to the array until the count of the array is equal to n

2. Start anothre loop with counter keep adding numeric elements until the length is reached

3. Reset the strarting value, and keep adding elements until reached

4. Return the resulting array
*/

// function diagnonalize(n, corner) {
//   let matrix = [];
//   let subarray = [];
//   let count = 0;
//   let start = 0;

//   for (let index = 0; index < n; index += 1) {
//     while (subarray.length < n) {
//       subarray.push(count);
//       count += 1;
//     }

//     matrix.push(subarray);
//     subarray = [];
//     start += 1;
//     count = start;
//   }

//   return rotateMatrix(matrix, corner);
// }

// function rotateMatrix(matrix, corner) {
//   switch (corner) {
//     case 'ul':
//       return matrix;
//     case 'ur':
//       return matrix.map(sub => sub.reverse());
//     case 'll':
//       return matrix.reverse();
//     case 'lr': 
//       return matrix.map(sub => sub.reverse()).reverse();
//   }
// }

// console.log(diagnonalize(5, 'ul'));
// console.log(diagnonalize(3, 'lr'));
// console.log(diagnonalize(3, 'ur'));
// console.log(diagnonalize(3, 'll'));
// console.log(diagnonalize(1, 'ur'));

// [
//   [0, 1, 2, 3, 4],
//   [1, 2, 3, 4, 5],
//   [2, 3, 4, 5, 6],
//   [3, 4, 5, 6, 7],
//   [4, 5, 6, 7, 8],
// ]

// [
//   [4, 3, 2],
//   [3, 2, 1],
//   [2, 1, 0],
// ]

// [
//   [2, 1, 0],
//   [3, 2, 1],
//   [4, 3, 2],
// ]

// [
//   [2, 3, 4],
//   [1, 2, 3],
//   [0, 1, 2],
// ]

// [[0]]

///////////////////////////////////////////////////////////////////////////////

// Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined as the total of all numbers immediately surrounding the number on the grid, including the number in the total.

/*
Key Term:
Spotlight sum => all number around the number + the number
numbers surrounding => above, below, right, left, and diagonals
grid => ? x ?

PROBLEM
-------
Given a matrix, obtain all the spotlight sums and return those in a grid.

INPUT:
grid (matrix) 
n x m

OUTPUT:
grid (should be the same size as the input)

RULES:
- Spotlight sum includes the middle number or the number being checked
- The input is going to be a 2D array
- Valid, present, only one argument, valid numbers in the array, no NaN, no Infinity
- 

EXAMPLES
---------
grid1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(spotlightSum(grid1));

// grid1 => [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28],
// ]

DATA STRUCTURE
--------------
2d array input
could be useful to use another array to store the surroudning values, then sum that array?
2d array output

ALGORITHM
----------
Q: How can I build my nested array to return? At the beginning with prefilled empty arrays? Or as I go?
A: Reduce or manually building, but not prefilling empty arrays

Q: How to obtain the spotlight sum of a number?
A: -1, 0, 1 array to iterate through the rows and columns surroudning while also getting the sum
A: Use reduce for that or just for Each
A: Make sure to not go out of bounds as I'm totaling values

Q: How to store the value in the return array?
A: Push until the row is full, then add the row to the result array

Main Steps:
1. Initialize an empty array to be the result array

2. Iterate through the array using a for loop to get the rows and cols

3. HELPER FUNCTION - INPUT: coordinate
For each value the array I want to reduce the surrounding values into a sum
  OUTPUT: spotlight sum

4. Add the sum to the nested array

5. ADd nested array to result array
*/

// function spotlightMap(grid) {
//   if (grid.length === 1 && grid[0].length === 0) return [[]];
//   let spolightSumGrid = [];
//   let spolightSumRow = [];

//   for (let rowInd = 0; rowInd < grid.length; rowInd++) {
//     for (let colInd = 0; colInd < grid[0].length; colInd++) {
//       let sum = calculateSpotlightSum(grid, rowInd, colInd);
//       spolightSumRow.push(sum);

//       if (spolightSumRow.length === grid[0].length) {
//         spolightSumGrid.push(spolightSumRow);
//         spolightSumRow = [];
//       }
//     }
//   }

//   return spolightSumGrid;
// }

// function calculateSpotlightSum(grid, row, col) {
//   const OFFSET_VALUES = [-1, 0, 1];
//   let sum = 0;

//   OFFSET_VALUES.forEach((rowOffset) => {
//     OFFSET_VALUES.forEach((colOffset) => {
//       let rowCoordinate = row + rowOffset;
//       let colCoordinate = col + colOffset;

//       if (grid[rowCoordinate] && grid[rowCoordinate][colCoordinate]) {
//         sum += grid[rowCoordinate][colCoordinate];
//       }
//     })
//   })

//   return sum;
// }

// let grid1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// console.log(spotlightMap(grid1));

// grid1 => [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28],
// ]

///////////////////////////////////////////////////////////////////////////////
// The function is given an array of particles. The absolute value represents the particle mass. The sign of value represents the direction of movement:

// Positive values move to the right.
// Negative values move to the left.
// A positive value located on the left will collide with a negative value immediately located on the right.

//  +    -
//  =>  <=
// The particle with the greater mass will absorb the mass of another particle and continue to travel in its direction.


//  +5  -10    --->   -15
//  =>  <=             <=


// If the negative is greater, the combined particle will continue to move to the left, if the positive mass is greater or equal, the combined particle will continue to move to the right. The mass of the combined particle is the sum of absolute values. Two particles moving in the same direction cannot collide because it is assumed that the speed is the same before and after collisions.

//  -5  -10    --->   -5  -10
//  <=  <=            <=  <=

// The new combined particles can collide again.

// +30 +5  -10    --->   +30 -15     ----->  +45
//  => =>   <=           =>   <=              =>

// The total picture of remaining particles can evolve and evolve.

// Eventually, the equilibrium is reached when all negative values are on the left and all positive values are on the right. The left group is moving away from the right group. Determine the equilibrium state of the transformed particles and return it as an array.

// -10  -5  -1  +2  +2  +20 <---- EQUILIBRIUM

// -10  +5  -1  -2  +2  -20 -----> -10 -30
//  -5 +1 -2 +1 -3 +1       -----> -5 -3 -4 +1

// +2 -2  ---> +4


/*
Key Terms:
array of particles (input)
particle mass => abs value
sign => direction (- move to left & + move to right)

PROBLEM
-------
Given an array of integers (postivie and negative) that represent particles, with negative moving left and positive moving right, combine the integers until all negatives are on the left and positives are on the right

INPUT:
array
mixed positive and negative numbers

OUTPUT:
array of numbers
negative on left
positive on right

RULES:
- positivemove right
- negative move left
- when particles collide they combine values with absolute values
- the greater particle will continue moving in the direction it was going
- particles can collide multiple times
- No float values
- When the particle masses are equal in value they will maintain a postivie direction and continue moving right
- If the array is already "equilibrium" return as is
- empty array can be given and will return empty array
- no sparse arrays

EXAMPLES
--------
console.log(movingParticles([-10, -5, -1, 2, 2, 20]));  // [-10, -5, -1, 2, 2, 20]
console.log(movingParticles([-10, 5, -1, -2, 2, -20])); // [-10, -30]
console.log(movingParticles([-5, 1, -2, 1, -3, 1]));    // [-5, -3, -4, 1]
console.log(movingParticles([-5, -1, -2, -1, -3, -1])); // [-5, -1, -2, -1, -3, -1]
console.log(movingParticles([5, 1, 2, 1, 3, 1]));       // [5, 1, 2, 1, 3, 1]
console.log(movingParticles([2, -2]));                  // [+4]
console.log(movingParticles([]));                       // []

DATA STRUCTURE
--------------
Array given input
Mutate the array or create a new array to work with
No need for an object

ALGORITHM
----------
Q: How best to iterate through the given array?
- at minimum returning the same array, but also returning a shorter array
- adding and subtracting elements, potentially mutating while iterating? Not good.
- Reduce (manually build a new array to return)
- iterating over a copy of the array 
- forEach

Q: How to compare particles?
- compare signs either +/-
- greater than 0
- determine the direction of the particle (what sign is kept)

Q: How get the sum of the particle masses?
- Math.abs() to get absolute value
- Regex to get ride of the dash (number to string to number)
- multiply by negative 1 to get positive equivalent
- 

Main Steps:
1. Iterate over the given array of particle masses using acc (to access the next element)

2. For each particle...
  => for index at 0 add an element to the acc
  => if the last value in the acc is positive ...
    => Check the sign of the current element
    if positive, add to the acc, then return acc
    if negative...
      => check last element and current negative element (abs)
      => if negative is greater, then keep the negative sign
      => get the particles masses by summing the abs values
      => replace the old value in the acc with the new one, return acc

3. Return the acc as the resulting array
*/

function movingParticles(particles) {
  return particles.reduce((equilibrium, particle) => {
    let lastParticle = equilibrium[equilibrium.length - 1];
    let absParticle = Math.abs(particle);

    if (equilibrium.length === 0) {
      equilibrium.push(particle);
    } else if (lastParticle > 0) {
      if (particle < 0) {
        let sign = absParticle > lastParticle ? -1 : 1;
        let newParticle = absParticle + lastParticle * sign;
        equilibrium.pop();
        equilibrium.push(newParticle);
      } else {
        equilibrium.push(particle);
      }
    } else {
      equilibrium.push(particle);
    }

    return equilibrium;
  }, [])
}


// console.log(movingParticles([-10, -5, -1, 2, 2, 20]));  // [-10, -5, -1, 2, 2, 20]
// console.log(movingParticles([-10, 5, -1, -2, 2, -20])); // [-10, -30]
// console.log(movingParticles([-5, 1, -2, 1, -3, 1]));    // [-5, -3, -4, 1]
// console.log(movingParticles([-5, -1, -2, -1, -3, -1])); // [-5, -1, -2, -1, -3, -1]
// console.log(movingParticles([5, 1, 2, 1, 3, 1]));       // [5, 1, 2, 1, 3, 1]
// console.log(movingParticles([2, -2]));                  // [+4]
// console.log(movingParticles([]));                       // []

// https://edabit.com/challenge/MXbibjS95Y8X4wDZx

// Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.

/*
Key Terms:
true/false
row identical == col
column 
2-D matrix


PROBLEM
--------
Given a 2D matrix determine if the elements in a row are the same as the elements in a column

INPUT:
2-D matrix

OUTPUT:
true if there is a row === col
false otherwise

RULES:
- An argument will always be provided
- Only one argument provided
- Argument will always be an array
- The array will not be empty
- n x m or nxn
- Elements of the subarray will be numbers
- Assume valid integers No NaN or infinity
- no sparse arrays
- 

EXAMPLES
---------
console.log(hasIdentical([
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
])); // true

console.log(hasIdentical([
  [1, 2, 3],
  [6, 3, 4],
  [3, 9, 5],
])); // false

console.log(hasIdentical([
  [1, 2, 3],
  [6, 3, 4],
])); // false

[
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
]

DATA STRUCTURE
--------------
ARray input
Make the columns into their own matrix

ABSTRACTIONS
------------
for loop row/col index
for loop break out if there is a match

ALGORITHM
----------
Main Steps:
1. Iterate through the matrix to obtain the columns in a separate 2d matrix

2. Compare the joined row and joined col as "strings" to assess if they are equal
  => use the same index for each 2d array
3. return true if at any point they are equal

4. Return false otherwise

*/

// function hasIdentical(matrix) {
//   let columns = colMatrix(matrix);
//   if (matrix.length !== columns.length) return false;

//   for (let rowInd = 0; rowInd < matrix.length; rowInd++) {
//     for (let colInd = 0; colInd < matrix[0].length; colInd++) {
//       let rowStr = matrix[rowInd].join('');
//       let colStr = columns[colInd].join('');
//       console.log(rowStr, colStr);

//       if (rowStr === colStr) return true;
//     }
//   }

//   return false;
// }

// function colMatrix(matrix) {
//   let colMatrix = [];
//   let tempArr = [];

//   for (let colInd = 0; colInd < matrix[0].length; colInd++){
//     for (let rowInd = 0; rowInd < matrix.length; rowInd++) {
//       tempArr.push(matrix[rowInd][colInd]);
//     }
//     colMatrix.push(tempArr);
//     tempArr = [];
//   }

//   return colMatrix;
// }


// console.log(hasIdentical([
//   [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
// ])); // true

// console.log(hasIdentical([
//   [1, 2, 3],
//   [6, 3, 4],
//   [3, 9, 5],
// ])); // false

// console.log(hasIdentical([
//   [1, 2, 3],
//   [6, 3, 4],
// ])); // false


// console.log(hasIdentical([
//   [4, 4, 4, 44], 
//   [2, 44, 9, 8], 
//   [5, 4, 7, 7], 
//   [6, 4, 1, 0]
// ]));

///////////////////////////////////////////////////////////////////////////////

const p = console.log;

function mergeWords(words) {
  if (words.length === 1) return [words[0], 0];
  let mergedString = words[0];
  let minSharedLetters = Infinity;
  for (let idx = 1; idx < words.length; idx += 1) {
    let lastWord = words[idx - 1];
    let currentWord = words[idx];
    let overlapIdx = findOverlap(lastWord, currentWord);
    mergedString += currentWord.slice(overlapIdx);
    minSharedLetters = overlapIdx < minSharedLetters ? overlapIdx : minSharedLetters;
  }
  return [mergedString, minSharedLetters];
}

function findOverlap(word1, word2) {
  let length = word1.length;
  while (length >= 1) {
    if (word1.slice(-length) === word2.slice(0, length)) {
      return length;
    }
    length -= 1;
  }
}

p(mergeWords(['cat', 'talk', 'kevin', 'vineyard'])); // ['catalkevineyard',  1]
p(mergeWords(['a', 'ab', 'bc'])); // ['abc',  1]
p(mergeWords(['abba', 'baab', 'abba'])); // ['abbaabba', 2]
p(mergeWords(['bad', 'bad'])); // ['bad', 3]
p(mergeWords(['abba'])); // ['abba', 0]
p(mergeWords(['a', 'a', 'a'])); // ['a', 1]

console.log(mergeWords(["abc"]));        // ["abc", 0]
console.log(mergeWords(["abc", "cat"])); // ["abcat", 1]
console.log(mergeWords(["abc", "cat", "turtle"]));
// ["abcaturtle", 1]
console.log(mergeWords(["abcc", "cat", "ttturtle"]));
// ["abccattturtle", 1]
console.log(mergeWords(["abc", "bcat"]));
// ["abcat, 2]

openAll([[1], [0]]) // true
// Cell_0 has a key to cell_1. It is possible to open all two cells.

openAll([[1], [2], [3], []]) // true
// The placement allows to open all cells in a row.

openAll([[1, 3], [3, 0, 1], [2], [0]]) // false
// It is not possible to open cell_2.

openAll([[2, 1], [1], [2], [4], [0, 1]]) // false, "open only 0, 1, 2"
// It is possible to open only cells 0, 1, 2. Cells 3, 4 stay closed.