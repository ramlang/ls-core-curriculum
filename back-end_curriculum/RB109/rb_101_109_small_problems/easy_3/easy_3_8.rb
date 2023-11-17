# Write a method that returns true if the string passed as an argument is a palindrome, false otherwise. A palindrome reads the same forward and backward. For this exercise, case matters as does punctuation and spaces.

# my_answer =>

# PEDAC

# Problem ---
# input  is a string
# output is a boolean (true or false)
# problem domain = determining if string is a palindrome, making it case sensitive, and having all characters matter including puncuation and spaces
# explicit reqs = palindrome reads the same forward and backwards, case sensitive, consider puncuation and spaces, return a boolean
# implicit reqs = no validation of string needed, words include puncation and spaces, returns a boolean does not puts within method

# mental model = given string, create variable of string reversed, compare string using equality operator, if string matches return true, if not return false

# Examples/ Test Cases ---
# palindrome?('madam') == true
# palindrome?('Madam') == false          # (case matters)
# palindrome?("madam i'm adam") == false # (all characters matter)
# palindrome?('356653') == true

# Data Structure ---
# reverse method, operator, !! to change to boolean value

# Algorithm ---
# SET reverse string
# compare string to reversed string

# Code with Intent ---
def palindrome?(string)
  string == string.reverse ? true : false
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true


# example_of_answer =>
def palindrome?(string)
  string == string.reverse
end

# further_exploration =>
# Write a method that determines whether an array is palindromic; that is, the element values appear in the same sequence both forwards and backwards in the array. Now write a method that determines whether an array or a string is palindromic; that is, write a method that can take either an array or a string argument, and determines whether that argument is a palindrome. You may not use an if, unless, or case statement or modifier.

# my_answer =>
def palindrome_array?(array)
  array == array.reverse
end

p palindrome_array?([1, 2, 3, 2, 1]) == true
p palindrome_array?(['m', 'a', 'd', 'a', 'm']) == true
p palindrome_array?(['M', 'a', 'd', 'a', 'm']) == false
p palindrome_array?(["m", "a", "d", "a", "m", " ", "'", "m", "a", "d", "a", "m"]) == false
p palindrome_array?(['3', '5', '6', '6', '5', '3']) == true

# my_answer =>
def palindrome_string_array?(object)
  object == object.reverse
end
p palindrome_string_array?([1, 2, 3, 2, 1]) == true
p palindrome_string_array?(['m', 'a', 'd', 'a', 'm']) == true
p palindrome_string_array?('Madam') == false
p palindrome_string_array?("madam i'm adam") == false
p palindrome_string_array?('356653') == true