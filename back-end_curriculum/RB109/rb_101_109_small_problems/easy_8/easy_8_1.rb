# Write a method that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. You may assume that the Array always contains at least one number.
# sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
# sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# sum_of_sums([4]) == 4
# sum_of_sums([1, 2, 3, 4, 5]) == 35

# my_answer =>

# PEDAC

# Problem ---
# input is an array of integers
# output is an integer
# problem domain = consecutively adding the elements of an array together, first number plus first number and second number plus first second and third number plus etc... returning the total result
# explicit reqs = assume the array contains at least one number, returns sum of sums
# implicit reqs = integers only no floats, one element array returns that element

# mental model = continuously take the sum of elements, increasing the range of elements included in each iteration, sum the elements together

# Examples/ Test Cases ---
# sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
# sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
# sum_of_sums([4]) == 4
# sum_of_sums([1, 2, 3, 4, 5]) == 35

# Data Structures ---
# input = array
# inbetween = nested array, array
# output = integer
# methods = iterator, Array#sum

# Algorithm ---
# create sum variable
# create sum_array variable
# iterate over the array
# store each cumulative sum result in the array
# once all values have been iterated over sum the sum_array
# return the result

# Code with Intent ---
def sum_of_sums(array)
  cumulative_sum = 0
  array_to_be_summed = []
  array.each { |num| array_to_be_summed << cumulative_sum += num }
  array_to_be_summed.sum
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35


# example_of_answer =>
def sum_of_sums(numbers)
  sum_total = 0
  accumulator = 0

  numbers.each do |num|
    accumulator += num
    sum_total += accumulator
  end

  sum_total
end

# example_of_answer =>
def sum_of_sums(numbers)
  sum_total = 0
  1.upto(numbers.size) do |count|
    sum_total += numbers.slice(0, count).reduce(:+)
  end
  sum_total
end