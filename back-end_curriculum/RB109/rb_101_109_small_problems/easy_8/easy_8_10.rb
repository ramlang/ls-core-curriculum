# Write a method that takes a non-empty string argument, and returns the middle character or characters of the argument. If the argument has an odd length, you should return exactly one character. If the argument has an even length, you should return exactly two characters.
# center_of('I love ruby') == 'e'
# center_of('Launch School') == ' '
# center_of('Launch') == 'un'
# center_of('Launchschool') == 'hs'
# center_of('x') == 'x'

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string of one or two characters
# problem domain = identifying the length of the string as odd or even, dividing that number in half to find the middle of the array, returning one or two characters based on whether the number is odd or even
# explicit reqs = non-empty string as arugments, returns middle character (one or two)
# implicit reqs =  if one character string is given return that character

# mental model = find the length of the string, determine if length is odd or even, if it is odd then take the length / 2 and add 1. Return the character at the index, if it is even then take length / 2 and return the characters at that index and index + 1.

# Examples/ Test Cases ---
# center_of('I love ruby') == 'e'
# center_of('Launch School') == ' '
# center_of('Launch') == 'un'
# center_of('Launchschool') == 'hs'
# center_of('x') == 'x'

# Data Structures ---
# input = string
# inbetween = division and index
# output = single or double character string
# methods = division, index of string, modulus

# Algorithm ---
# take string.length and modulus 2
# if value is not zero then return at index + 1
# if value is zero then return at index and index + 1

# Code with Intent ---

def center_of(string)
  length = string.length
  center = ''
  if length % 2 != 0
    center = string[(length / 2)]
  else
    center = string[(length / 2) - 1, 2]
  end
  center
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'


# example_of_answer =>
def center_of(string)
  center_index = string.size / 2
  if string.size.odd?
    string[center_index]
  else
    string[center_index - 1, 2]
  end
end