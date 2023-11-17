require 'pry'
# If you take a number like 735291, and rotate it to the left, you get 352917. If you now keep the first digit fixed in place, and rotate the remaining digits, you get 329175. Keep the first 2 digits fixed in place and rotate again to 321759. Keep the first 3 digits fixed in place and rotate again to get 321597. Finally, keep the first 4 digits fixed in place and rotate the final 2 digits to get 321579. The resulting number is called the maximum rotation of the original number.

# Write a method that takes an integer as argument, and returns the maximum rotation of that argument. You can (and probably should) use the rotate_rightmost_digits method from the previous exercise.

# Note that you do not have to handle multiple 0s.

def rotate_array(array)
  array[1..-1] + [array[0]]
end

def rotate_rightmost_digits(number, n)
  all_digits = number.to_s.chars
  all_digits[-n..-1] = rotate_array(all_digits[-n..-1])
  all_digits.join.to_i
end

# my_answer =>

# PEDAC

# Problem ---
# input is an integer
# output is an integer
# problem domain = rotate the first digit to the end. Keep first digit and rotate the rest, keep second digit, rotate the rest, keep third, rotate the rest, and lastly keep the four and rotate the remaining, increase the range of number that are unchanged, decrease the range of numbers that are being rotated, repeat in a loop or iteration
# explicit reqs = do not have to handle multiple zeros, integer as an argument, use rotate_rightmost_digits method and rotate_array method
# implicit reqs = n/a

# mental model = create a counter, loop over number, rotate number using rotate_rightmost digit method, return number, increment counter, skip the first number and rotate the rest, etc. etc.

# Examples/ Test Cases ---
# max_rotation(735291) == 321579
# max_rotation(3) == 3
# max_rotation(35) == 53
# max_rotation(105) == 15 # the leading zero gets dropped
# max_rotation(8_703_529_146) == 7_321_609_845

# Data Structure ---
# input = integer
# inbetween = array
# output = integer
# methods = #to_s, #chars, #join

# Algorithm ---
# define method
# create a counter
# create a loop
# set the range of the rotate_rightmost_digits
# decreasethe counter
# repeat until entire number is complete

# Code with Intent ---
def max_rotation(int)
  return int if int.to_s.size == 1
  counter = int.to_s.size
 loop do
    break if counter < 1
    int = rotate_rightmost_digits(int, counter)
    counter -= 1
  end
  int
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845


# example_of_answer =>
def max_rotation(number)
  number_digits = number.to_s.size
  number_digits.downto(2) do |n|
    number = rotate_rightmost_digits(number, n)
  end
  number
end


#further_exploration =>
# Assume you do not have the rotate_rightmost_digits or rotate_array methods. How would you approach this problem? Would your solution look different? Does this 3 part approach make the problem easier to understand or harder?

# There is an edge case in our problem when the number passed in as the argument has multiple consecutive zeros. Can you create a solution that preserves zeros?