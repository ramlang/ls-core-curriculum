# Write a method that returns a list of all substrings of a string that start at the beginning of the original string. The return value should be arranged in order from shortest to longest substring.
# leading_substrings('abc') == ['a', 'ab', 'abc']
# leading_substrings('a') == ['a']
# leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is an array
# problem domain = spliting the string into substrings or incrementing combinations, one character, two characters, three characters, etc.
# explicit reqs = returns an array, substrings start at the beginning of the string, return array is ordered shortest to longest substring
# implicit reqs = if string has one character return that character

# mental model = continuously concatenate the index of a string and store results in a separate array, return the array

# Examples/ Test Cases ---
# leading_substrings('abc') == ['a', 'ab', 'abc']
# leading_substrings('a') == ['a']
# leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

# Data Structures ---
# input = string
# inbetween = array
# output = array
# methods = iterator, Array#push

# Algorithm ---
# create empty array
# separate the string into characters
# iterate over each character and cumulatively concatenate each character until the entire string is remade
# store each concatenation iteration in the empty array
# return result

# Code with Intent ---
def leading_substrings(string)
  result = []
  substring = ''
  string.chars.each_with_index do |char, ind|
    result << substring += char
  end
  result
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']


# example_of_answer =>
def leading_substrings(string)
  result = []
  0.upto(string.size - 1) do |index|
    result << string[0..index]
  end
  result
end
