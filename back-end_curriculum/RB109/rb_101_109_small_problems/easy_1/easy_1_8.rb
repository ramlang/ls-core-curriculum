# Write a method that takes one argument, an array containing integers, and
# returns the average of all numbers in the array. The array will never be empty
# and the numbers will always be positive integers. Your result should also be
# an integer.

# my_answer =>

# PEDAC

# Problem ---
# input is an array of positive integers
# output is an integer
# domain problem = calculating the average of the numbers in the array
# implicit requirments = 
# explicit requirments = must return integer, never have empty array, positive

# mental model = Given an array count the number of elements within the array.
# Iterate over the array and total the numbers of the array. Return the total

# Example/Test Case ---
=begin
puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40
=end

# Data Structure ---
# count, each

# Algorithm ---
# START
# initialize total number by coutning elements within array
# initialize sum to 0
# iterate over the array using each
# set sum to equal sum += element of the array
# divide sum by count
# return result
# END

# Code with Intent ---
def average(array)
  count = array.count
  sum = 0
  array.each do |num|
    sum += num
  end
  result = sum / count
end

puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40


# example_of_answer =>
def average(numbers)
  sum = numbers.reduce { |sum, number| sum + number }
  sum / numbers.count
end

# further_exploration =>

# Currently, the return value of average is an Integer. When dividing numbers,
# sometimes the quotient isn't a whole number, therefore, it might make more
# sense to return a Float. Can you change the return value of average from an
# Integer to a Float?

def average_float(numbers)
  sum = numbers.reduce { |sum, number| sum + number.to_f }
  sum / numbers.count
end
puts average([1.0, 6.5])
puts average([1.0, 5, 87.3, 45, 8.9, 8])
puts average([9, 47.5, 23, 95, 16, 52])