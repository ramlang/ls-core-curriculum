/*
The Luhn formula is a simple checksum formula used to validate a variety
of identification numbers, such as credit card numbers and Canadian Social
Insurance Numbers.

The formula verifies a number against its included check digit, which is
usually appended to a partial number to generate the full number. This
number must pass the following test:

    Counting from the rightmost digit and moving left, double the value of
    every second digit

    For any digit that thus become 10 or more, subtract 9 from the result
    1111 becomes 2121
    8763 becomes 7733
    (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
    8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo
  10 is congruent to 0), then the number is valid according to the Luhn Formula;
  else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to
  6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid
per the Luhn formula. This should treat, for example, "2323 2005 7766 3554"
as valid.

You can ignore all non-numeric characters in the input string.
*/

/*
Notes:
Check digit = Not needed
partial number = Not needed
full number = Will be validating this given number
valid number = Test whether doubling every second digit and then obtaining
    the check sum % 10 === 0 to determine whether the number is valid

Example:
"2323 2005 7766 3554"
"4343 4005 5736 6514"
14  + 9  + 21 + 16 = 60 => 60 % 10 === 0 => VALID


Problem
-------
Given a string of digits determines whether it passes the Luhn formula test:
- From R -> L double each digit
- obtain the checksum
- take modulo of checkum
- if 0 return true
- else return false

INPUT
(string)

OUTPUT
(boolean)

RULES
1. All non-numeric characters should be ignored
2. Double every other number from Right to Left
3. The checksum is every digit of the resulting number added together
4. If the checksum ends in 0 it is valid
    => in other words checksum % 10 ===0
5. The example provided uses spaces
6. The input will be a string
7. Determine if the number is valid by returning a boolean

Example 1
----------
=> given string:
"2323 2005 7766 3554"

=> every other digit doubled:
"4343 4005 5736 6514"

=> obtaining checksum:
14  + 9  + 21 + 16 = 60

=> validating with moduluo:
60 % 10 === 0
=> TRUE => VALID

Example 2
----------
"2323 2005 7766 3555"
"4343 4005 5736 6515"
14  + 9  + 21 + 17 = 61
61 % 10 === 0
=> FALSE  => INVALID

Data Structures & Abstractions
------------------------------
1. String => remove non-numeric characters
2. Array => perform math operations on digits (map to double)
3. Array => obtain checksum (reduce)
4. Number => validate using modulus

Test Cases
----------
console.log(validWithLuhnFormula(123));                     // false
console.log(validWithLuhnFormula([]));                      // false
console.log(validWithLuhnFormula(""));                      // false
console.log(validWithLuhnFormula("0"));                     // false
console.log(validWithLuhnFormula("-0"));                    // false
console.log(validWithLuhnFormula("!@#$%"));                 // false
console.log(validWithLuhnFormula("1111"));                  // false
console.log(validWithLuhnFormula("2323 2005 7766 3555"));   // false
console.log(validWithLuhnFormula("2323 2005 7766 3554"));   // true
console.log(validWithLuhnFormula("8763"));                  // true
console.log(validWithLuhnFormula("8!7@6#3%!"));             // true

Algorithm
---------
Given a string input
- It may not be a string (check for data type 'string') X
- It may be an empty string (return false) X
- It may be 0 or -0 (return false, but 0 % 10 === 0 so maybe true?)

Remove non-numeric characters from the string (ignore them)
- use regex + the replace() method with the g flag to clean up
- It may be special characters only (might need additional check after cleanup)

Transform clean string into an array
- using split()

Iterate through string array while changing the data type
- reverse the array before starting iteration
- use map to transform characters into integers using `parseInt()`
- potentially duplicate every other value at the same time?
- When duplicating if the value if great than 9 substract 9

Sum the array numbers
- using reduce

Check the modulus % 10 === 0

Return comparison boolean result (log)

Write a function that can add a check digit to make the number valid per the
Luhn Formula and return the original number plus that digit. This should give
"2323 2005 7766 3554" in response to the argument "2323 2005 7766 355"

Use a for loop as a counter and append the current digit to the given number
If the number with the appeneded digit is valid then return
otherwise continue looping


*/

// function createValidLuhnNumber(string) {
//   if (!validWithLuhnFormula(string)) {
//     for (let num  = 1; num < 10; num += 1) {
//       let tempNumber = string + String(num);
//       if (validWithLuhnFormula(tempNumber)) return tempNumber;
//     }
//   } else {
//     return "Number is already valid";
//   }
//   return "Input is invalid"
// }

// function validWithLuhnFormula(string) {
//   if (typeof string !== 'string' || string === '') {
//     return false;
//   }

//   let cleanString = removeNonNumericChars(string);

//   if (cleanString) {
//     let digitsArray = cleanString.split('').map(char => parseInt(char, 10));
//     digitsArray = doubleEveryOtherNumberRightToLeft(digitsArray);
//     return checkSum(digitsArray) % 10 === 0;
//   }
//   return false;
// }

// function removeNonNumericChars(string) {
//   return string.replace(/\D/g, '');
// }

// function doubleEveryOtherNumberRightToLeft(array) {
//   return array.reverse().map((digit, index) => {
//     if (index % 2 !== 0) {
//       let num = digit * 2;
//       return num > 9 ? num - 9 : num;
//     } else {
//       return digit;
//     }
//   });
// }

// function checkSum(array) {
//   return array.reduce((acc, num) => acc + num);
// }


// console.log(validWithLuhnFormula(123));                     // false
// console.log(validWithLuhnFormula([]));                      // false
// console.log(validWithLuhnFormula(""));                      // false
// console.log(validWithLuhnFormula("0"));                     // true
// console.log(validWithLuhnFormula("-0"));                    // true
// console.log(validWithLuhnFormula("!@#$%"));                 // false
// console.log(validWithLuhnFormula("1111"));                  // false
// console.log(validWithLuhnFormula("2323 2005 7766 3555"));   // false
// console.log(validWithLuhnFormula("2323 2005 7766 3554"));   // true
// console.log(validWithLuhnFormula("8763"));                  // true
// console.log(validWithLuhnFormula("8!7@6#3%!"));             // true

// console.log(createValidLuhnNumber("1111"));                 // 111?
// console.log(createValidLuhnNumber("2323 2005 7766 355"));  // ...3554
// console.log(createValidLuhnNumber("2323 2005 7766 3554"));  // already valid
// console.log(createValidLuhnNumber("876"));                  // 8763
// console.log(createValidLuhnNumber("8!7@6#%!"));             // true

// ============================================================================
/*
/*
PROBLEM 4
----------
You are given a list of numbers in a "short-hand" range where only the
significant part of the next number is written because we know the numbers
are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14,
21]). Some people use different separators for their ranges (ex. "1-3, 1-2",
"1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range
limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

Notes:
Given a list of numbers
When there is a comma the number is separated from the rest
=> not included within the range (ex. "545, 64:11" --> 545, 564, 565, .. 611)
Ranges will be denoted with different symbols (["-", ":", ".."])
Returning the numbers in completeled form

Problem
--------
Given a list of numbers and ranges (sometimes only some significant digits given), determine the rest of the number for those that are incomplete (first half) based on the numbers in the list always increasing in value. Some values may contain ranges of numbers. Return a lists of completed values

INPUT
(string)

OUTPUT
(string)

RULES
- The input will always be a string value
- If empty string is given, return an empty string
- If separators aren't valid, return empty string (we'll assume valid input)
- returned value will also be a string
- number in returned list will be separated by commas
- In the given list/range the first number when completed must always be less than the second, and this patterns continues throughout the list.
  => The last incomplete number should be the greatest and all others would b e less than that.
- Input can include single numbers and/or ranges
- the first number in the list stays the same (start of the range)
- Range limits are always inclusive.

Examples
--------
console.log(expandRange("1, 3, 7, 2, 4, 1")) // 1, 3, 7, 12, 14, 21
console.log(expandRange("1-3, 1-2"))         // 1, 2, 3, 11, 12
console.log(expandRange("1:5:2"))            // 1, 2, 3, 4, 5, 6, ... 12
console.log(expandRange("104-2"))            // 104, 105, ... 112
console.log(expandRange("104-02"))           // 104, 105, ... 202
console.log(expandRange("545, 64:11"))       // 545, 564, 565, .. 611
console.log(expandRange(""))                 // ''

"545, 64:11"       // 545, 564, 565, .. 611

545

64:11  => 64, 11

545 < ?64 => 500 + 64 => 564

564 < ?11 => 600 + 11 => 611

"545, [?]64, ..., [?]11"

Data Structures
---------------
Strings will be the input and output
Arrays => I'll need to break the string up and iterate and work with
the values individually

Algorithm
----------
For ranges the next number in the created array must be greater than the previous and end
with the same number that is given
"1:5:2"    => ["1:5:2"]      => [[1, 5, 12]]       => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
"1-3, 1-2" => ["1-3", "1-2"] => [[1, 3], [1, 2]] => [[1, 3], [11, 12]] => [1, 2, 3, 11, 12]

Step 1
-------
Split string by commas to get an array of ranges or single digits called rangeList
["1:5:2"]
["1-3", "1-2"]

Step 2
-------
Iterate over the rangeList create a nested array while splitAtRangeSymbol
[[1, 5, 2]]
[[1, 3], [1, 2]]

Step 3
-------
While in step 2 adjust for values that are not in increasing order
Uses nextNumberThatMatches function using previous and current string
[[1, 5, 12]]
[[1, 3], [11, 12]]

Step 4
-------
Convert string numbers to numbers

Step 5
-------
Create ranges using rangeFromArray
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
[[1, 2, 3], [11, 12]]

Step 6
-------
Flatten the array
Join the array
Return the array
*/

/*
reduce function initialized to an array
Then I iterate through number range to check value of previous element
If less than adjust with nextNumberThatMatches
add to array
return a

*/

// You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
//     "104-2" --> 104, 105, ... 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611


// Write a function to split at range symbols
// check all numbers are in order least to greatest
// adjusts numbers if not meaning
// as strings prefix the value 1...infinity until greater than
// fill in gaps using nested loop
// 

// ["1-3"]
// ["1-2"]
// function expandRange(string) {
//   let returnArray = [];
//   let prev;
//   let valuesInRange = string.split(', ').forEach((string) => {
//     if (returnArray.length > 0) {
//       prev = returnArray.flat()[returnArray.flat().length - 1];
//       returnArray.push(makeMiniRange(string, prev));
//     } else {
//       returnArray.push(makeMiniRange(string));
//     }
//   });
//   return returnArray;
// }

// function fillRange(array) {
//   let range = [];
//   let max = parseInt(array[array.length - 1], 10);
//   let start = parseInt(array[0], 10);

//   for (let count = start; count <= max; count += 1) {
//     range.push(String(count));
//   }

//   return range;
// }

// function makeMiniRange(string, prev) { // => "1-3" or "1-2"
//   const RANGE_SYMBOL_REGEX = /\b[-:..]\b/;
//   let miniRangeValues = string.split(RANGE_SYMBOL_REGEX); //["1","5","2"]
//   return expandShortHandValues(miniRangeValues, prev);
// }

// function expandShortHandValues(array, prev) { // array of strings
//   prev = prev || array[0];
//   let result = [prev];

//   for (let ind = 1; ind < array.length; ind += 1) {
//     let lastResult = result[result.length - 1];
//     let currentValue = array[ind];

//     if (parseInt(lastResult, 10) > parseInt(currentValue, 10)) {
//       result.push(nextGreatestMatchingNumber(lastResult, currentValue));
//     } else {
//       result.push(currentValue);
//     }
//   }

//   return result;
// }

// function nextGreatestMatchingNumber(stringMinimum, stringNumber) {
//   let prefix = 1;
//   let nextGreatestMatch = stringNumber;

//   while (parseInt(stringMinimum, 10) > parseInt(nextGreatestMatch, 10)) {
//     nextGreatestMatch = String(prefix) + stringNumber
//     prefix += 1;
//   }

//   return nextGreatestMatch;
// }

// console.log(makeMiniRange("1-3"));
// console.log(makeMiniRange("545:64:11"));

// console.log(expandRange("1, 3, 7, 2, 4, 1")) // 1, 3, 7, 12, 14, 21
// console.log(expandRange("1-3, 1-2"))         // 1, 2, 3, 11, 12
// console.log(expandRange("1:5:2"))            // 1, 2, 3, 4, 5, 6, ... 12
// console.log(expandRange("104-2"))            // 104, 105, ... 112
// console.log(expandRange("104-02"))           // 104, 105, ... 202
// console.log(expandRange("545, 64:11"))       // 545, 564, 565, .. 611
// console.log(expandRange(""))                 // ''
// console.log(expandRange("545, 64..11"))       // 545, 564, 565, .. 611
// console.log(expandRange("545, 64....11"))       // ''

// =================================================================

// Problen 5
// ----------

// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its
// name from the way in which it's encoded. It was already used by the ancient
// Greeks.

// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom
// (like a zig-zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT
// ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN

// To decrypt a message you take the zig-zag shape and fill the ciphertext along
// the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

// If you now read along the zig-zag shape you can read the original message.

/*
Problem
--------
Create function that can encode and create a function that can
decode a rail cipher with varying rails.
The arguments for the function are not given but we can assume
that a string of what to encode/decode will be one argument
The other argument will most likely be the number of rails
as it is not specified that the cipher only uses three rails

INPUT
Encode function input: (string_to_encode, number_of_rails)
Decode function input: (string_to_decode, number_of_rails)

OUTPUT
Encode function output: (encoded_string)
Decode function output: (decoded_string)

RULES
- The number of rails will determine the number letter skips
for the first row
ex. "W . . . E . . . C . . . R . . . L . . . T . . . E"
     => 3 rails so there are three '.' dots between letters

- The number of letter skips between letters decreased for each rail
- starts at widest then narrows then widens for last wor
- The starting point for each rail will be staggered
- select every character that is as wide as the rails are tall
- decrease the amount between the letter skips by 2
- increment the starting index
- last row will be the starting wide as rails value



Examples
--------
// W . . . E . . . C . . . R . . . L . . . T . . . E (4 skips) 7 letters
(index 0, 4, 8, 12, 16, 20, 24)
// . E . R . D . S . O . E . E . F . E . A . O . C . (2 skip) 12 letters
(index 0, 2, 4, 6, 8, 10, 12, 14, )
// . . A . . . I . . . V . . . D . . . E . . . N . . (4 skips) 6 letters
(index 0, 4, 8, 12, 16, 20)

WEAREDISCOVEREDFLEEATONCE


WECRLTEERDSOEEFEAOCAIVDEN

1st attempt: WECRLTEERDSOEEFEAOC
2nd attempt: WECRLTEERDSOEEFEAOCAIVDEN

H.L.O
(0, 2, 4) 1 skip
.E.L.
(0, 2) 1 skip
Data Structure
--------------
Array

Algorithm
----------
- Clean up string argument to remove spaces
- separate string into an array
- initialize a starting index
- initialize a skip index
- take a part of the array from that current starting point and iterate
- only use the index if it meets the current criteria (index + skip)
- select from the array
- add results joined to current string result
- increment starting index
- decrement skip index - 2
- repeat until end of string
- for last row then skip should be reset to the number of rails?
*/

function encodeRailCipher(string, rails) {
  if (rails === 1) return string;

  let charArray = string.replace(/ /g, '').split('');
  let skipValue = rails + 1;
  let result = '';

  for (let startIndex = 0; startIndex < rails; startIndex += 1) {
    let currentSlice = charArray.slice(startIndex);
    let rail = pickChars(currentSlice, skipValue);

    result = result.concat(rail.join(''));

    if (skipValue - 2 <= 0) {
      skipValue = rails + 1;
    } else {
      skipValue  -= 2;
    }
    // console.log(result, skipValue);
  }
  console.log(result);
}

function pickChars(array, skips) {
  console.log(array, skips)
  return array.filter((char, charIndex) => {
    if (charIndex  % skips === 0) {
      return true;
    }
    return false;
  });
}


// console.log(encodeRailCipher("WE ARE DISCOVERED FLEE AT ONCE", 3));
// console.log(encodeRailCipher('One rail, only one rail', 1));
console.log(encodeRailCipher('XOXOXOXOXOXOXOXOXO', 2));
