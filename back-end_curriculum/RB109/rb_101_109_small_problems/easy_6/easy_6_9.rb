# Write a method named include? that takes an Array and a search value as arguments. This method should return true if the search value is in the array, false if it is not. You may not use the Array#include? method in your solution.
# include?([1,2,3,4,5], 3) == true
# include?([1,2,3,4,5], 6) == false
# include?([], 3) == false
# include?([nil], nil) == true
# include?([], nil) == false

# my_answer =>

# PEDAC

# Problem ---
# input is an array and value
# output is a boolean
# problem domain = look at each element in the array, compare each element to the given value, return true if the value exists in the array and false if the value does not exist in the array
# explicit reqs = cannot use the #include? method, input is array with any object and any value, returns boolean
# implicit reqs = if empty array is provided result will be false, returns boolean not truthy or falsey object

# mental model = loop or iterate through the array, compare each element to the given arugment, if the argument matches an element within the array return true, otherwise return false

# Examples/ Test Cases ---
# include?([1,2,3,4,5], 3) == true
# include?([1,2,3,4,5], 6) == false
# include?([], 3) == false
# include?([nil], nil) == true
# include?([], nil) == false

# Data Structures ---
# input = array, value
# inbetween = iterate
# output = boolean
# methods = equality operator, conditional statement

# Algorithms ---
# iterate over the array
# if the value is equal to an element in the array return true
# else return false

# Code with Intent ---
def include?(array, value)
  array.each do |element|
    return true if element == value
  end
  return false
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false


# example_of_answer =>
def include?(array, value)
  !!array.find_index(value)
end

# further_exploration =>
# Can you think of other solutions to this problem? There are lots of different ways to get the same result.
