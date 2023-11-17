# Write a program that solicits 6 numbers from the user, then prints a message that describes whether or not the 6th number appears amongst the first 5 numbers.

# my_answer =>

# PEDAC

# Problem ---
# input is 6 integers
# output is a string and an array
# problem domain = storing six numbers from user, scanning numbers to see if the last number is included in the first five numbers, printing the results
# explicit reqs = obtain six numbers, output is an array
# implicit reqs = integers only

# mental model = create empty array and get the values from the user. Iterate over a range or existing array. For each element in the array prompt, and then add the user input into the empty array. Take the last value and detmerine if it is present among the first five values. If not display the results. If it is display the results.

# Examples/ Test Cases ---
# ==> Enter the 1st number:
# 25
# ==> Enter the 2nd number:
# 15
# ==> Enter the 3rd number:
# 20
# ==> Enter the 4th number:
# 17
# ==> Enter the 5th number:
# 23
# ==> Enter the last number:
# 17
# The number 17 appears in [25, 15, 20, 17, 23].


# ==> Enter the 1st number:
# 25
# ==> Enter the 2nd number:
# 15
# ==> Enter the 3rd number:
# 20
# ==> Enter the 4th number:
# 17
# ==> Enter the 5th number:
# 23
# ==> Enter the last number:
# 18
# The number 18 does not appear in [25, 15, 20, 17, 23].

# Data Structures ---
# Use an array, and use an array method (#include?) to determine if the value is present

# Algorithm ---
# SET empty array
# SET array with 1st, 2nd, 3rd...
# GET user input 6 integers
#   iterate over array
#   prompt user for input
#   enter number into empty array
#   repeat for each value
# remove last integer and check to see if present in array
# IF present display message it is present
# ELSE display message it is not present

# Code with Intent ---
number_of_numbers = ['1st', '2nd', '3rd', '4th', '5th', 'last']
user_numbers = []
number_of_numbers.each do |num|
  print "Enter the #{num} number >> "
  user_input = gets.chomp.to_i
  user_numbers << user_input
end
last_number = user_numbers.pop
if user_numbers.include?(last_number)
  puts "The number #{last_number} appears in #{user_numbers}"
else
  puts "The number #{last_number} does not appear in #{user_numbers}"
end


# example_of_answer =>
numbers = []

puts "Enter the 1st number:"
numbers << gets.chomp.to_i
puts "Enter the 2nd number:"
numbers << gets.chomp.to_i
puts "Enter the 3rd number:"
numbers << gets.chomp.to_i
puts "Enter the 4th number:"
numbers << gets.chomp.to_i
puts "Enter the 5th number:"
numbers << gets.chomp.to_i
puts "Enter the last number:"
last_number = gets.chomp.to_i

if numbers.include? last_number
  puts "The number #{last_number} appears in #{numbers}."
else
  puts "The number #{last_number} does not appear in #{numbers}."
end
