# Write a method that takes an Array of numbers, and returns an Array with the same number of elements, and each element has the running total from the original Array.

# my_answer =>

# PEDAC

# Problem ---
# input is an array
# output is an array
# problem domain = the element at index 0 is the same in the new array. The element at index 1 in the new array is the element at index 0 from the original array plus the element at index 1 from the old array. The element at index 2 in the new array is the value at index 1 of the new array plus the element of index 2 of the old array, etc. Need to keep the original array and create a new array at the same time.
# explicit reqs = array of numbers is given, new array has same number of elements as original array, elements in new array are the running total from original array
# implicit reqs = no validation of array

# mental model = given an array of numbers, for the given number of elements slice the array to contain increasing number of indecies, sum the slices of the array and add the total to the new array.

# Examples/ Test Cases ---
# running_total([2, 5, 13]) == [2, 7, 20]
# running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
# running_total([3]) == [3]
# running_total([]) == []

# Data Structure ---
# array, slice method, loop with count

# Algorithm ---
def running_total(array)
  count = 1
  sum = 0
  new_array = []
  while count <= array.length
    sum = array[0, count].sum
    new_array << sum
    count += 1
  end
  new_array
end

p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []


# correct_answer =>
def running_total(array)
  sum = 0
  array.map { |value| sum += value }
end

# further_exploration =>
# Try solving this problem using Enumerable#each_with_object or Enumerable#inject (note that Enumerable methods can be applied to Arrays).