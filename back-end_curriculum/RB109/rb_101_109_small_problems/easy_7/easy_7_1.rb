# Write a method that combines two Arrays passed in as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation.

# You may assume that both input Arrays are non-empty, and that they have the same number of elements.
# interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# my_answer =>

# PEDAC

# Problem ---
# input is two arrays
# output is one array
# problem domain = taking an element from one array and then taking an element from the other in a repeated manner until the new array is filled with all elements from both arrays
# explicit reqs = assume arrays are non empty and they have the same number of elements
# implicit reqs = arrays can contain any object

# Examples/ Test Cases ---
# interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# Data Structures ---
# input = array (2)
# inbetween = iterator, storage array
# output = array
# methods = Array#push, Array#unshift, Array#pop

# Algortihms ---
# create a new array
# create a counter
# create a loop
# take each element from index counter form each array
# push to new array
# increment counter
# repeat until all element have been added to new array

# Code with Intent ---
def interleave(array_1, array_2)
  combined_array = []
  index = 0
  loop do
    break if index == array_1.size
    combined_array << array_1[index]
    combined_array << array_2[index]
    index += 1
  end
  combined_array
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']


# example_of_answer =>
def interleave(array1, array2)
  result = []
  array1.each_with_index do |element, index|
    result << element << array2[index]
  end
  result
end

# further_exploration =>
# Take a few minutes to read about Array#zip. #zip doesn't do the same thing as interleave, but it is very close, and more flexible. In fact, interleave can be implemented in terms of zip and one other method from the Array class. See if you can rewrite interleave to use zip.
