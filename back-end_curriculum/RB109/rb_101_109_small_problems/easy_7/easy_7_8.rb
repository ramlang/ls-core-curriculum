# Write a method that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
# multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# my_answer =>

# PEDAC

# Problem ---
# input is two arrays
# output is an array
# problem domain = multiplying the elements of the same index and storing it in a new array
# explicit reqs = assume the two arrays are of the same length
# implicit reqs = array of integers only, no floats, no empty arrays

# mental model = take the first element of the first array and multiply by the first element of the second array, store the value in a new array, repeat until all elements of the array have been multiplied by their corresponding value

# Examples/ Test Cases ---
# multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

# Data Structures ---
# input = array (2)
# inbetween = iterator, new array
# output = new array
# methods = each_with_index

# Algorithm ---
# iterate over first array
# multiply first element by index 0 of second array
# push value to new array
# repeat for every value in array
# return new array

# Code with Intent ---
def multiply_list( array_1, array_2)
  result = []
  array_1.each_with_index do |num, ind|
    result << num * array_2[ind]
  end
  result
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]


# further_exploration =>
# The Array#zip method can be used to produce an extremely compact solution to this method. Read the documentation for zip, and see if you can come up with a one line solution (not counting the def and end lines).

# my_answer =>
