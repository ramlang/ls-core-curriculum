# Question 1
Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need yo include that character three times in the final answer.
`common_chars(['bella', 'label', 'roller']) == ['e', 'l'. 'l']`
`common_chars(['cool', 'lock', 'cook']) == ['c', 'o']`
`common_chars(['hello, 'goodbye', 'random']) == ['o']`
`common_chars(['aabbaaaa, 'ccddddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) == []`

# Question 2
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.
Example 1:
Input: 'abab'
Output: True
Explaination: It's the substring 'ab' twice

Example 2:
Input: 'aba'
Output: False

`p repeated_substring_pattern("abab") == true`
`p repeated_substring_pattern("aba") == false`
`p repeated_substring_pattern("aabaaba") ==false`
`p repeated_substring_pattern("abaababaab") == true`
`p repeated_substring_pattern("abcabcabcabc") == true`


# Question 3
You have to create a method that takes a positive integer number and returns the next bigger number formed by the same digits:
12 => 21
513 => 531
2017 => 2071

If no bigger number can be compused using those digits return -1
9 => -1
111 => -1
531 => -1

`p next_bigger_num(9) == -1`
`p next_bigger_num(12) == 21`
`p next_bigger_num(513) == 531`
`p next_bigger_num(2017) == 2071`
`p next_bigger_num(111) == -1`
`p next_bigger_num(531) == -1`
`p next_bigger_num(123456789) == 123456798`

# Question 4
The maximum subarray problem consists in finding the maximum sum of a contagious subsequence in an array of integers:

maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4] should be [4, -1, 2, 1]

Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.

`p max_sequence([]) == 0`
`p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6`
`p max_sequence([11]) == 11`
`p max_sequence([-32]) == 0`
`p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12`

# Question 5
Write a method to find the longest common prefix string amongst an array.
If there is no common prefix, return an empty string "".

Example 1:
Input: ['flower', 'flow', 'flight']
Output: "fl"

Example 2:
Input: ['dog', 'racecar', 'car']
Output: ""
Explaination: There is no common prefix among the input strings

Note: All given inputs are in lowercase letters a-z

`p common_prefix(['flower', 'flow', 'flight']) == "fl"`
`p common_prefix(['dog', 'racecar', 'car']) == ""`
`p common_prefix(['interspecies', 'interstellar', 'interstate']) == "inters"`
`p common_prefix(['throne', 'dungeon']) == ""`
`p common_prefix(['throne', 'throne']) == "throne"`

# Question 6
Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

`p substring_test('Something', 'Fun') == false`
`p substring_test('Something', 'Home') == true`
`p substring_test('Something', '') == false`
`p substring_test('', 'Something') == false`
`p substring_test('BANANA', 'banana') == false`
`p substring_test('test', 'lllt') == false`
`p substring_test('', '') == false`
`p substring_test('1234567', '541265') == true`
`p substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') == true`

# Question 7
Write function scramble(str1, str2) that returns true if a porition of str1 characters can be rearraned to match str2, otherwise return false.
For example:
str1 is 'rkqodlw' and str2 is 'world' the output should return true
str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true
str1 is 'katas; and str2 is 'steak' should return false

Only lowercase letters will be used (a-z). No punctuation or digits will be included.

`p scramble('javaass', 'jjss') == false`
`p scramble('rkqodlw', 'world') == true`
`p scramble('cedewaraaossoqqyt', 'codewars') == true`
`p scramble('katas', 'steak') == false`
`p scramble('scriptjava', 'javascript') == true`
`p scramble('scriptingjava', 'javascript) == true`

# Question 8
Find the length of the longest substring in the given string that is the same in reverse.
As an example, if the input was "I like racecars that go fast", the substring (racecar) length would be 7.

Example:
"a" => 1
"aab" => 2
"abcde" => 1
"zzbaabcd" => 4
"" => 0
`p longest_palindrome("a") == 1`
`p longest_palindrome("aa") == 2`
`p longest_palindrome("baa") == 2`
`p longest_palindrome("aab") == 2`
`p longest_palindrome("baabcd") == 4`
`p longest_palindrome("baablkj12345432133d") == 9`


# Question 9
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the su, of the integers to the right of N . If there is no index that would make thhis happen return -1.
For example:
Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
Your method will return the index 3, because at the 3rd position of the array, the sum of the left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

Another one:
You are given the array [20, 10, -80, 10, 10, 15, 35]
At index 0 the left side is [] and the right side is [10, -80, 10, 10, 15, 35]
They are both equal to 0 when added. Empty arrays are equal to 0 in this problem. Index 0 is the place where the e;ft sode and right side are equal.0

`p find_even_index([1, 2, 3, 4, 3, 2, 1]) == 3`
`p find_even_index([1, 100, 50, -51, 1, 1]) == 1`
`p find_even_index(20, 10, 30, 10, 10, 15, 35]) == 3`
`p find_even_index([20, 10, -80, 10, 10, 15, 35) == 0`
`p find_even_index([10, -80, 10, 10, 15, 35, 20]) == 6`
`p find_even_index([-1, -2, -3, -4, -3, -2, -1]) == 3`