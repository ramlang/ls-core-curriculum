# Write a method that takes two strings as arguments, determines the longest of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

# my_answer =>

# PEDAC

# Problem ---
# input = two strings
# output = one string
# problem domain = determining which string is longer, concatenating the short string to the beginning and end of the longer string, returning result
# explicit reqs =  one string returned, strings given are different legnths
# implicit reqs = no spaces, no special characters, if empty string returns the longer string only

# mental model = get two strings, create longest string variable, determine which string is longer, whichever string is longer, add the shorter string to both sides, return value

# Examples/ Test Cases ---
# short_long_short('abc', 'defgh') == "abcdefghabc"
# short_long_short('abcde', 'fgh') == "fghabcdefgh"
# short_long_short('', 'xyz') == "xyz"

# Data Structures ---
# conditional statement, reassignment, length method

# Algorithm ---
# if string_1 is longer than string_2
# then string_2 + string_1 + string_2
# if string_2 is longer than string_1
# then string_1 + string_2 + string_1

# Code with Intent ---
def short_long_short(string_1, string_2)
  return string_2 + string_1 + string_2 if (string_1.size > string_2.size)
  return string_1 + string_2 + string_1 if (string_1.size < string_2.size)
end
p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"


# example_of_answer =>
def short_long_short(string1, string2)
  if string1.length > string2.length
    string2 + string1 + string2
  else
    string1 + string2 + string1
  end
end

# example_of_answer =>
def short_long_short(string1, string2)
  arr = [string1, string2].sort_by { |el| el.length }
  arr.first + arr.last + arr.first
end

# this answer is not as clear; if/else is easier to read/understand
