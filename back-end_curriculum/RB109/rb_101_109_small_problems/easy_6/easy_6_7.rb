# Write a method that takes an Array as an argument, and returns two Arrays (as a pair of nested Arrays) that contain the first half and second half of the original Array, respectively. If the original array contains an odd number of elements, the middle element should be placed in the first half Array
# halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# halvsies([5]) == [[5], []]
# halvsies([]) == [[], []]

# my_answer =>

# PEDAC

# Problem ---
# input is single array
# output is nested array
# problem domain = separate the array into two different arrays, split the arrays in half unless odd
# explicit reqs = array as argument, nested array with two arrays returned, elements divided evenly between two arrays unless odd, if odd the first array gets the extra value
# implicit reqs = data validation, if single element provided return nested array with one empty array, if empty array given return nested array with empty arrays, order does matter

# mental model = identify how many elements are in the array, if even split the array in half, if odd split the array unevenly, store the result in another array, return the result as a nested array

# Examples/ Test Cases ---
# halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# halvsies([5]) == [[5], []]
# halvsies([]) == [[], []]

# Data Structures ---
# input = a single array
# inbetween = array
# output = nested array
# methods = Array#select, Array#push, Array#slice

# Algorithms ---
# get array length
# if array length is even, divide value by two
# if array length is odd, divide value by two and add one
# slice the array at the given range
# push the arrays into one
# return the array

# Code with Intent ---
def halvsies(array)
  length = array.length
  nested = []
  if length % 2 == 0
    half = (length / 2) - 1
  else
    half = (length / 2)
  end
  first_half = array[0..half]
  second_half = array[(half + 1)...length]
  nested << first_half
  nested << second_half
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]


# example_of_answer =>
def halvsies(array)
  middle = (array.size / 2.0).ceil
  first_half = array.slice(0, middle)
  second_half = array.slice(middle, array.size - middle)
  [first_half, second_half]
end

# further_exploration =>
# Can you explain why our solution divides array.size by 2.0 instead of just 2?

# my_answer =>
# This will convert the number to a float which will allow Integer#ceil to determine whether to round up or down. If there are numbers after the decimal it will be rounded up to the nearest decimal

# This is but one way to solve this problem. What solution did you end up with? Was it similar or entirely different?