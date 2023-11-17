# Write a method that takes two arguments, a positive integer and a boolean,
# and calculates the bonus for a given salary. If the boolean is true, the bonus
#should be half of the salary. If the boolean is false, the bonus should be 0.

# my_answer =>

# PEDAC

# Problem ---
# input is an integer and a boolean
# output is an integer
# problem domain = evaluating boolean, halving the integer
# implicit requirements = 
# explicit requirements = positive integer, if false equals 0

# mental model = Given an integer and boolean, evaluate boolean. If true take
# integer and divide by 2. Return value. Else if false return 0

# Example/Test Case ---
=begin
puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000
=end

# Data Structure ---
# if/else, division

# Algorithm ---
# START 
# IF false
# return 0
# ELSE 
# num / 2
# END

# Code with intent ---
def calculate_bonus(salary, approved)
  if approved != true
    return 0
  else
    salary / 2
  end
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000


# example_of_answer =>
def calculate_bonus(salary, bonus)
  bonus ? (salary / 2) : 0
end