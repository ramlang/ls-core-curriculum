# Question 4
# The maximum subarray problem consists in finding the maximum sum of a contagious subsequence in an array of integers:

# maxSequence [-2, 1, -3, 4, -1, 2, 1, -5, 4] should be [4, -1, 2, 1]

# Easy case is when the array is made up of only positive numbers and the maximum sum is the sum of the whole array. If the array is made up of only negative numbers, return 0 instead.

# Empty array is considered to have zero greatest sum. Note that the empty array is also a valid subarray.

# p max_sequence([]) == 0
# p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
# p max_sequence([11]) == 11
# p max_sequence([-32]) == 0
# p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12

# PROBLEM
# input = array
# output = integer

# >> rules:
# - if made up of only negative numbers return 0
# - empty array returns 0
# - empty array is a valid subarray

# >> tasks:
# - find the subarrays
# - keep track of highest sum value
# - sum each sub array
# - reassign the sum if greater than current sum
# - return zero is all negative numbers or empty array

# EXAMPLES
# - see above

# DATA STRUCTURE
# - Array, Subarray

# ALGORITHM
# HIGH LEVEL
# Check if the array is empty or check if the array includes all negative numbers and return 0. Iterate over the given array, and obtain all subarrays within the array. Iterate over all the sub arrays and sum. Keep a greatest sum variable and reassign if the current sum is greater than the previous sum. Return the value

# PSUEDOCODE
# Define method and parameter
# Check if array is empty or all negative
# if empty or negative return 0
# initialize a substring variable and set to an array
# iterate over the array and obtain all substrings
# >> iterate over array
# >> set variable substrings to array from 0 to current index
# >> iterate over the substrings variable
# >> add the substring range from current index to -1 to the substrings array
# iterate over the substrings array
# set greatest_substring variable
# sum each array and detmerine if reassingment of greatest sum is needed
# return the sum at the end


def max_sequence(array)
  if array.empty? || array.all? { |n| n < 0 }
    return 0
  end
  
  sequences = []
  
  array.each_with_index do |num1, ind1|
    sub_array = array[0..ind1]
    sub_array.each_with_index do |num2, ind2|
      sequences.push(sub_array[ind2..-1])
    end
  end
  greatest_sum = 0
  sequences.each do |array|
    greatest_sum = array.sum if greatest_sum <= array.sum
  end
  greatest_sum
end

p max_sequence([]) == 0
p max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
p max_sequence([11]) == 11
p max_sequence([-32]) == 0
p max_sequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) == 12

# TIME 17 min