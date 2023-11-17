# Write a method that takes an Array, and returns a new Array with the elements of the original list in reverse order. Do not modify the original list.

# You may not use Array#reverse or Array#reverse!, nor may you use the method you wrote in the previous exercise.
# reverse([1,2,3,4]) == [4,3,2,1]          # => true
# reverse(%w(a b e d c)) == %w(c d e b a)  # => true
# reverse(['abc']) == ['abc']              # => true
# reverse([]) == []                        # => true

# list = [1, 3, 2]                      # => [1, 3, 2]
# new_list = reverse(list)              # => [2, 3, 1]
# list.object_id != new_list.object_id  # => true
# list == [1, 3, 2]                     # => true
# new_list == [2, 3, 1]                 # => true

# my_answer =>

# PEDAC

# Problem ---
# input is an array
# output is a new array
# problem domain = reverse the elements of the array while creating a new array, return the new array
# explicit reqs = must return a new array, cannot use reverse or reverse! methods
# implicit reqs = no data validation, return single element array and empty arrays, arrays can include any object

# mental model = create an empty array, create a loop, put values from old array into new array in reverse order withoutaffecting original array, return new array


# Examples/ Test Cases ---
# reverse([1,2,3,4]) == [4,3,2,1]          # => true
# reverse(%w(a b e d c)) == %w(c d e b a)  # => true
# reverse(['abc']) == ['abc']              # => true
# reverse([]) == []                        # => true

# list = [1, 3, 2]                      # => [1, 3, 2]
# new_list = reverse(list)              # => [2, 3, 1]
# list.object_id != new_list.object_id  # => true
# list == [1, 3, 2]                     # => true
# new_list == [2, 3, 1]                 # => true

# Data Structures ---
# input = array
# inbetween = array/ new array
# output = new array
# methods = Array#pop, Array#shift, Array#push

# Algortihms ---
# set new list variable
# set counter
# begin loop
# break the loop if th counter is the same size as the list
# assign value at index[0] of original array to new array
# increment counter
# return new list

# Code with Intent ---
def reverse(list)
  new_list = []
  counter = list.size - 1
  loop do
    break if counter < 0
    new_list << list[counter]
    counter -= 1
  end
  new_list
end
  
p reverse([1,2,3,4]) == [4,3,2,1]          # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true
 
p list = [1, 3, 2]                      # => [1, 3, 2]
p new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true


# example_of_answer =>
def reverse(array)
  result_array = []
  array.reverse_each { |element| result_array << element }
  result_array
end

# further_exploration
# An even shorter solution is possible by using either inject or each_with_object. Just for fun, read about these methods in the Enumerable module documentation, and try using one in your reverse method.