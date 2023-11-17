# Write a method that searches for all multiples of 3 or 5 that lie between 1 and some other number, and then computes the sum of those multiples. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

# You may assume that the number passed in is an integer greater than 1.

# my_answer =>

# PEDAC

# Problem ---
# input is an integer
# output is an integer which is the sum of multiples
# problem domain = determine range for multiples of 3 and 5, obtain multiples up to the specified range, take those values and add them together to get the sum. Return the value
# explicit reqs = number provided is greater than 1. Multiples of 3 and 5 only
# implicit reqs = no integer validation, postivie numbers

# mental model = using range obtian multiples of the numbers 3 and 5 up to given number

# Examples/ Test Cases ---
# multisum(3) == 3
# multisum(5) == 8
# multisum(10) == 33
# multisum(1000) == 234168

# Data Structure ---
# use arrays and loop or iterator over a range of numbers

# Algorithm ---
# SET range
# change range to array
# iterate over array and multiply values by 3 and 5
# select only values less than given number
# merge arrays
# sum arrays


# Code with Intent ---
def multisum(number)
 array = (1..number).to_a
 array_3 = array.map { |num| num * 3 }
 array_5 = array.map { |num| num * 5 }
 new_array = array_3.union(array_5)
 new_array.delete_if { |num| num > number }
 new_array.sum
end
 
p multisum(20)
p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168


# correct_answer =>
def multiple?(number, divisor)
  number % divisor == 0
end

def multisum(max_value)
  sum = 0
  1.upto(max_value) do |number|
    if multiple?(number, 3) || multiple?(number, 5)
      sum += number
    end
  end
  sum
end

# further_exploration =>
# Investigate Enumerable.inject (also known as Enumerable.reduce), How might this method be useful in solving this problem? (Note that Enumerable methods are available when working with Arrays.) Try writing such a solution. Which is clearer? Which is more succinct?