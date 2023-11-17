require 'pry'
# Write a method that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

# my_answer =>

# PEDAC

# Problem ---
# input is an array
# output is a new array with elements from input array
# problem domain = selecting elements within the array, taking every other element from input array and moving to new array
# explicit reqs = returns array, every other index starting at 1, returns an array
# implicit reqs = no validation needed, if one element is entered return the element, if the array is empty return an empty array

# mental model = get input array, iterate over input array using map or collect, and choose odd index values, push those values to the new array

# Examples/ Test Cases ---
# oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
# oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
# oddities(['abc', 'def']) == ['abc']
# oddities([123]) == [123]
# oddities([]) == []

# Data Structure ---
# use an array, and use a iterator to select value from input array

# Algorithm ---
# GET input array
# iterate over array
# if the index if odd add array element to new array
# return array

# Code with Intent ---
def oddities(array)
  new_array = []
  array.each_index do |ind|
    if ind == 0
      new_array << array [0]
    elsif ind.even?
      new_array << array[ind]
    end
  end
  new_array
end

p oddities([2, 3, 4, 5, 6]) == [2, 4 ,6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []


# example_of_answer =>
def oddities(array)
  odd_elements = []
  index = 0
  while index < array.size
    odd_elements << array[index]
    index += 2
  end
  odd_elements
end

# further_exploration =>
# Write a companion method that returns the 2nd, 4th, 6th, and so on elements of an array.

# Try to solve this exercise in at least 2 additional ways.

# my_answer =>
def oddities(array)
  odd_elements = []
  index = 1
  while index < array.size
    odd_elements << array[index]
    index += 2
  end
  odd_elements
end
