# Write a method that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed into this method. The return value should be the same Array object.

# You may not use Array#reverse or Array#reverse!.
# list = [1,2,3,4]
# result = reverse!(list)
# result == [4, 3, 2, 1] # true
# list == [4, 3, 2, 1] # true
# list.object_id == result.object_id # true

# list = %w(a b e d c)
# reverse!(list) == ["c", "d", "e", "b", "a"] # true
# list == ["c", "d", "e", "b", "a"] # true

# list = ['abc']
# reverse!(list) == ["abc"] # true
# list == ["abc"] # true

# list = []
# reverse!(list) == [] # true
# list == [] # true

# my_answer =>

# PEDAC

# Problem ---
# input is an array
# output is the same array but reversed
# problem domain = mutate the array, reverse the order of all the elements in the array, return the same array, the object_id should be the same
# explicit reqs = cannot use the reverse or reverse! methods, the original array must be mutated
# implicit reqs = no data validation, if empty array is returned then retuen an empty array

# mental model = get the second element of the array and prepend to the array, delete the second element, then get the third element of the array and prepend, then delete, repeat process until entire array is compelted return the array

# Examples/ Test Cases ---
# list = [1,2,3,4]
# result = reverse!(list)
# result == [4, 3, 2, 1] # true
# list == [4, 3, 2, 1] # true
# list.object_id == result.object_id # true

# list = %w(a b e d c)
# reverse!(list) == ["c", "d", "e", "b", "a"] # true
# list == ["c", "d", "e", "b", "a"] # true

# list = ['abc']
# reverse!(list) == ["abc"] # true
# list == ["abc"] # true

# list = []
# reverse!(list) == [] # true
# list == [] # true

# Data Structures ---
# input = array
# inbetween = iterator, array
# output = array reversed
# methods = Array#prepend, Array#delte

# Algortihms ---
# get array
# if array only has one element, return the array
# else loop over the array
# get the element at index 1 and prepend that value to the array, delete that value at index 2, look at value at index 2 and prepend to array, delete value at index 3, look at index 3, etc.
# stop iterating if all elements have been looped over by comparing number of loops to original array size
# return the array

# Code with Intent ---
def reverse!(list)
  length = list.size
  return list if length <= 1
  current_index = 1
  loop do
    break if current_index == length
    new_index = current_index + 1
    list.prepend(list[current_index])
    list.delete_at(new_index)
    current_index += 1
  end
  list
end

p list = [1,2,3,4]
p result = reverse!(list)
p result # == [4, 3, 2, 1] # true
p list # == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

p list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

p list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

p list = []
p reverse!(list) == [] # true
p list == [] # true


# example_of_answer =>
def reverse!(array)
  left_index = 0
  right_index = -1

  while left_index < array.size / 2
    array[left_index], array[right_index] = array[right_index], array[left_index]
    left_index += 1
    right_index -= 1
  end

  array
end

