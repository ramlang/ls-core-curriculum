# The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

# Computationally, the Fibonacci series is a very simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6 iterations before it generates the first 2 digit number.

# Write a method that calculates and returns the index of the first Fibonacci number that has the number of digits specified as an argument. (The first Fibonacci number has index 1.)

# Examples:
# find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
# find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
# find_fibonacci_index_by_length(10) == 45
# find_fibonacci_index_by_length(100) == 476
# find_fibonacci_index_by_length(1000) == 4782
# find_fibonacci_index_by_length(10000) == 47847

# my_answer =>

# PEDAC

# Problem ---
# input is a integer
# output is an integer
# problem domain = creating a formula to calculate the fibonacci number, recognizing how many digits per number for each iteratrion, getting the index of the number at that iteration, returning the index
# explicit reqs = must take the specified number of digits as an argument, integer, return the index, ***(The first Fibonacci number has index 1.)***
# implicit reqs = only integers will be passed, what happens at zero

# mental model = Note the number of digits needed for the fibonacci result, list the number of fibonacci numbers until the number of digits it equal to the size of the integer. Anaylze the array and return the index of the selected number. Return the value.

# Examples/ Test Cases ---
# find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
# find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
# find_fibonacci_index_by_length(10) == 45
# find_fibonacci_index_by_length(100) == 476
# find_fibonacci_index_by_length(1000) == 4782
# find_fibonacci_index_by_length(10000) == 47847


# Data Structures ---
# inputis an integer
# inbetween is an array
# output is an integer
# methods = #to_a, #index, #last

# Algortihm ---
# To get the fibonacci number:
# the number added to the array is the vale at -1 and value at -2 summed together
# break the loop if the size of the number is equal to the argument passed
# if broken have the method return the index of the last value in the array

# Code with Intent ---


def find_fibonacci_index_by_length(length)
  array = Array.new(2,1)
  loop do
    break if length == array[-1].to_s.size
    array << (array[-1] + array[-2])
  end
  array.size
end

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847


# example_of_answer =>
def find_fibonacci_index_by_length(number_digits)
  first = 1
  second = 1
  index = 2

  loop do
    index += 1
    fibonacci = first + second
    break if fibonacci.to_s.size >= number_digits

    first = second
    second = fibonacci
  end

  index
end
