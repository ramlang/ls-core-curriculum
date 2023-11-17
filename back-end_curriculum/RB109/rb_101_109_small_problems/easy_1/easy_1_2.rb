require 'pry'
# Write a method that takes one integer argument, which may be positive, negative,
# or zero. This method returns true if the number's absolute value is odd. You
# may assume that the argument is a valid integer value.

# Keep in mind that you're not allowed to use #odd? or #even? in your solution.

# my_answer =>

#PEDAC

# Problem ---
# input one integer (+, -, 0)
# output is boolean (true/false)
# problem domain = return true is absolute value odd
# implicit requirments = no float values, puts is not within the method
# explicit requirments = no #odd? or #even? in method

# mental model = accept one integer and evaluate the abolsute value. If the integer's
# absolute value is an odd number then return true or else return false

# Examples/Test Case ---
# is_odd?(-8)
#   => false

# is_odd?(0)
#   => false

# is_odd?(7)
#   => true

# Data Structure ---
# use an if/else statement to determine if value is odd or even
# use the Math class to take the absolute value

# Algorithm ---
# 1. START
# 2. evalute the absolute value of the number
# 3. IF the number modulus 2 is not equal to zero
#    then return true
# 4. ELSE
#    then return false
# 5. PRINT method
# 6. END

# Code with Intent ---
def is_odd?(num)
  num = num.abs
  if num % 2 != 0
    true
  else
    false
  end
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true

# correct_answer =>

def is_odd?(number)
  number % 2 == 1 # it actually doesn't matter if the number is positive or negative
end

# further_exploration =>

#If you weren't certain whether % were the modulo or remainder operator, how
# would you rewrite #is_odd? so it worked regardless?

# my_answer =>

# ???
def is_odd_num?(number)
  ((number.abs) / 2.0)
end

# The Integer#remainder method performs a remainder operation in Ruby. Rewrite
# is_odd? to use Integer#remainder instead of %. Note: before version 2.4, Ruby
# used the Numeric#remainder method instead.

def is_odd_r?(number)
  number.remainder(2) == 1 || number.remainder(2) == -1
end

puts "remainder"
puts is_odd_r?(2)
puts is_odd_r?(5)
puts is_odd_r?(-17)
puts is_odd_r?(-8)
puts is_odd_r?(0)
puts is_odd_r?(7)