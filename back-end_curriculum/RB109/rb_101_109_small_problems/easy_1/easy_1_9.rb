# Write a method that takes one argument, a positive integer, and returns the
# sum of its digits. For a challenge, try writing this without any basic looping
# constructs (while, until, loop, and each).

# my_answer =>

# PEDAC

# Problem ---
# input is an integer
# output is an integer
# problem domain = separating the digits, summing digits
# implicit requirements = 
# explicit requirements = postivie integer, returnds integer, no loops or each

# mental model = Given an integer separate the integer into digits. Store in an
# array. Add the digits together. Return total.

# Example/Test Case ---
=begin
puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45
=end

# Data Structure ---
# use digits method, reduce method

# Algorithm ---
# START
# initialize sum variable
# use digits method on integer
# use reduce method on new array
# sum the digits together
# return sum
# END

# Code with intent ---
def sum(num)
  sum = num.digits.reduce { |sum, number| sum + number }
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45


# example_of_answer =>
def sum(number)
  sum = 0
  str_digits = number.to_s.chars

  str_digits.each do |str_digit|
    sum += str_digit.to_i
  end

  sum
end

# example_of_answer =>
def sum(number)
  number.to_s.chars.map(&:to_i).reduce(:+)
end