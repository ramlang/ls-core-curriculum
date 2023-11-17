# Write a method that takes one argument, a positive integer, and returns a
# string of alternating 1s and 0s, always starting with 1. The length of the
# string should match the given integer.

# my_answer =>

#PEDAC

# Problem ---
# input is a positive integer
# output is a string
# domain problem = creating alternating 1's and 0's, making the length of the 
# string match the integer
# implicit requirements = no zero
# explicit requiremnts = postivie integer

# mental_model = Given an integer enter a loop. until the value of the integer
# is equal to the length of the string print a 1, loop, if 1 was printed last,
# print zero, if zero was printed last print 1. Print string of integers.
# OR 
# use number times method. Print 1, if 1 print zero, if zero print 1.

# Example/Test Case ---
=begin
puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
=end

# Data Structure ---
# Use a loop or times method

# Algorithm ---
# START
# initialize string
# IF number is > 0
#   string += '1'
#   use the times method
#     IF string ends with 1
#       string += '0'
#     ELSE
#       string += '1'
# return string
# END


# Code with intent ---
def stringy(num)
  string = ''
  if num > 0
    num.times do |x|
      if string.end_with?('1')
        string += '0'
      else
        string += '1'
      end
    end
  end
  string
end

puts stringy(6) == '101010'
puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'

# example_of_answer =>

def stringy(size)
  numbers = []

  size.times do |index|
    number = index.even? ? 1 : 0
    numbers << number
  end

  numbers.join
end

# further_exploration =>

# Modify stringy so it takes an additional optional argument that defaults to 1.
# If the method is called with this argument set to 0, the method should return
# a String of alternating 0s and 1s, but starting with 0 instead of 1.

def stringy_with_default(size, start = 1)
  numbers = []
  if start == 1
    size.times do |index|
      number = index.even? ? 1 : 0
      numbers << number
    end
  else
    size.times do |index|
      number = index.even? ? 0 : 1
      numbers << number
    end
  end
  numbers.join
end

puts stringy_with_default(16)
puts stringy_with_default(16, 0)