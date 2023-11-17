# Write a method that determines and returns the ASCII string value of a string that is passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String#ord to determine the ASCII value of a character.)

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is an integer that is the sum of the ASCII values in the string
# problem domain = separate the characters in the string, get the ASCII value of every character, add the values together, return the sum
# explicit reqs = string value is sum of ASCII values of every character in string, spaces are
# implicit reqs = validation not needed

# mental model = separate characters in string into an array, iterate over the array using a method that returns a new array, convert each character into the ASCII value equivalent using String#ord, use the Array#sum method to add the values of the array together.
# 1. separate string
# 2. convert to ASCII values
# 3. sum values

# Examples/ Test Cases ---
# ascii_value('Four score') == 984
# ascii_value('Launch School') == 1251
# ascii_value('a') == 97
# ascii_value('') == 0

# Data Structure ---
# array

# Algorithm ---
# GET string
# convert string to array using String#char
# SET new array
# use map over the array
# convert each element of array to ASCII using String#ord
# use Array#sum to add the values together
# return result

# Code with Intent ---
def ascii_value(string)
  ascii_array = string.chars.map! { |chr| chr.ord }
  ascii_array.sum
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0


# correct_answer =>
# def ascii_value(string)
#   sum = 0
#   string.each_char { |char| sum += char.ord }
#   sum
# end

# further_exploration =>
# There is an Integer method such that:
char.ord.chr == char
# where mystery is our mystery method. Can you determine what method name should be used in place of mystery? What happens if you try this with a longer string instead of a single character?

# my_answer =>
# mystery = chr; this method only returns the first character so it will not work for a longer string

