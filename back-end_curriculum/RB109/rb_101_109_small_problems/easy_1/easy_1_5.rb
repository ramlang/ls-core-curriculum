# Write a method that takes one argument, a string, and returns a new string
# with the words in reverse order.

# my_answer =>

#PEDAC

# Problem ---
# input is a string
# output is the string in reverse order
# problem domain = reverse word order of string
# implicit requirements = no punctuaation present
# explicit requirements = spaces generate '', words only reversed not characters

# mental model = Given a string, split into individual words in array. Take array
# and reverse. Join array with spaces. Print each element.

# Example/Test Case ---
=begin
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == ''
=end
# Data Structure ---
# array, loop counting down, array.length


# Algorithm ---
# START
# initialize array to split string
# reverse array
# PRINT each word at index using join
# return string
# END

# Code with Intent ---
def reverse_sentence(string)
  array = string.split
  array.reverse!
  array.join(" ")
end
 
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == ''

# example_of_answer =>
def reverse_sentence(string)
  string.split.reverse.join(' ')
end