# Odd Numbers
# Print all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

# my_answer =>

# PEDAC

# Problem ---
# input none
# output odd numbers 1 to 99 inclusive on separate lines
# problem domain = determining if a number is odd and printing it out on separate lines
# explicit reqs = integers, inclusive, separate lines, odd numbers only
# implicit reqs = ?

# mental model = loop over numbers 1 through 99 and detmerine which values are odd. Select those values and print those to the console, skip over even values. Loop until completed.

# Examples/ Test Cases ---
# 1
# 3
# 5
# 7
# ...
# 99

# Data Structure ---
# range and an array and iterator

# Algorithm ---
# SET range to an array
# LOOP over the array
# select the odd numbers and print
# END

# Code with Intent ---
(1..99).to_a.each { |num| puts num if num.odd? } # do not need to convert range to array to use #each method

# example_of_answer =>
value = 1
while value <= 99
  puts value
  value += 2
end

# further_exploration =>
# Repeat this exercise with a technique different from the one you just used, and different from the solution shown above. You may want to explore the use Integer#upto or Array#select methods, or maybe use Integer#odd?
1.upto(99) { |num| puts num if num.odd? }

