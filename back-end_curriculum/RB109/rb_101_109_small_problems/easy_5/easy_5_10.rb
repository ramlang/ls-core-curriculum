# Write a method that will take a short line of text, and print it within a box.

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string inside a box made up of several strings
# problem domain = centering the text within the box, creating the box to match the length of the string, empty string creates an empty box
# explicit reqs = the text will fit terminal window, text surrounded by box
# implicit reqs = no string validation, includes puncuation, empty string produced empty box

# mental model = look at string length, add two to the length, produce the total number of dashes for the top and bottom part of the box, center the string inside the box

# Examples/ Test Cases ---
# print_in_box('To boldly go where no one has gone before.')
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

# print_in_box('')
# +--+
# |  |
# |  |
# |  |
# +--+

# Data Structures ---
# input = string
# inbetween = counting length, loop
# output = string and box of strings
# methods = loop, String#length

# Algorithms ---
# Given string
# get string length
# add 2 to string length 
# loop and print total number of dashes above and below text
# print the string in the middle of the box
# center the string so it has equal spacing on the right and left
# return box with string included

# Code with Intent ---
def top_and_bottom(length)
  print '+'
  length.times { print '-' }
  print '+'
  puts ''
end

def body(string, length)
  print "|"
  length.times { print ' ' }
  print "|\n"
  puts "| #{string} |"
  print "|"
  length.times { print ' ' }
  print "|"
  puts ''
end

def print_in_box(string)
  length = string.length + 2
  top_and_bottom(length)
  body(string, length)
  top_and_bottom(length)
end

print_in_box('To boldly go where no one has gone before.')
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

print_in_box('')
# +--+
# |  |
# |  |
# |  |
# +--+


# correct_answer =.
def print_in_box(message)
   horizontal_rule = "+#{'-' * (message.size + 2)}+"
   empty_line = "|#{' ' * (message.size + 2)}|"

   puts horizontal_rule
   puts empty_line
   puts "| #{message} |"
   puts empty_line
   puts horizontal_rule
end

# further_exploration =>
# Modify this method so it will truncate the message if it will be too wide to fit inside a standard terminal window (80 columns, including the sides of the box). For a real challenge, try word wrapping very long messages so they appear on multiple lines, but still within a box.