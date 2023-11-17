
# Write a method that can rotate the last n digits of a number. For example:
# rotate_rightmost_digits(735291, 1) == 735291
# rotate_rightmost_digits(735291, 2) == 735219
# rotate_rightmost_digits(735291, 3) == 735912
# rotate_rightmost_digits(735291, 4) == 732915
# rotate_rightmost_digits(735291, 5) == 752913
# rotate_rightmost_digits(735291, 6) == 352917

# Note that rotating just 1 digit results in the original number being returned.

# You may use the rotate_array method from the previous exercise if you want. (Recommended!)
def rotate_array(array)
  array[1..-1] + [array[0]]
end

# You may assume that n is always a positive integer.

# my_answer =>

# PEDAC

# Problem ---
# input is two integers
# output is an integer
# problem domain = rotating the last digits of a number, keeping the unselected part of the array the same, adding the rotated part to the end of the unchanged array, the second number given is how many digits to select starting from the end of the number.
# explicit reqs = rotating one digit results in original number returned, use the rotate_array method from other exercise, assume n is always positive
# implicit reqs = no data validation, 

# mental model = convert the integer into an array, split the array into two, separate the to-be-rotated part of the array, from the unchanged array, call the rotate_array method on the to-be-rotated array, prepend the unchanged array to the front. Return result.

# Examples / Test Cases ---
# rotate_rightmost_digits(735291, 1) == 735291 *original number is returned
# rotate_rightmost_digits(735291, 2) == 735219
# rotate_rightmost_digits(735291, 3) == 735912
# rotate_rightmost_digits(735291, 4) == 732915
# rotate_rightmost_digits(735291, 5) == 752913
# rotate_rightmost_digits(735291, 6) == 352917

# Data Structures ---
# input = integer (2)
# inbetween = array
# output = integer (1)
# methods = rotate_array, #to_s, #chars, #join

# Algorithm ---
# method definition
# turn number into an array
# use the digit to select the range of numbers starting from the last
# use the digit to select the range of number starting from the beginning exlcuding the digit
# pass the first range into the rotate_array method
# combine the two arrays
# join the arrays and turn the string back into an integer

# Code with Intent ---
def rotate_rightmost_digits(number, digit)
  number_array = number.to_s.chars
  digit = -digit
  
  array_to_rotate = number_array[digit..-1]
  rotated_array = rotate_array(array_to_rotate)
  
  unchanged_porition = number_array[0...digit]
  
  result = unchanged_porition + rotated_array
  result.join.to_i
end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917


# correct_answer =>
def rotate_rightmost_digits(number, n)
  all_digits = number.to_s.chars
  all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
  all_digits.join.to_i
end
