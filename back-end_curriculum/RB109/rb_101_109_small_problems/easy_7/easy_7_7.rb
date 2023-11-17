# Write a method that takes an Array of integers as input, multiplies all the numbers together, divides the result by the number of entries in the Array, and then prints the result rounded to 3 decimal places. Assume the array is non-empty.
# show_multiplicative_average([3, 5])                # => The result is 7.500
# show_multiplicative_average([6])                   # => The result is 6.000
# show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

# my_answer =>

# PEDAC 

# Problem =>
# input  is an array of integers
# output is a float
# problem domain = multiplying the values together, dividing the numbers by the size of the array, round to three decimal places
# explicit reqs = array of integers input, assume array is nonempty, returns a float
# implicit reqs = returns same number if array only includes one integer

# mental model = use cumulative multiplication by iterating over the array, return the product and then divide by the number of elements in the arrayfloat equivlanet, round to three decimal places and returnt that value

# Examples/ Test Cases ---
# show_multiplicative_average([3, 5])                # => The result is 7.500
# show_multiplicative_average([6])                   # => The result is 6.000
# show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

# Data Structures ---
# input = array
# inbetween = iterator, product, quotient
# output = float
# methods = iterator, multiplication, division, Integer#round

# Algorithm ---
# iterate over array using map to take the cumulative product of the array
# look at the array and determine how many elements are within the array
# convert array length to a float value
# take the product and divide by the float
# return the rounded value

# Code with Intent ---
def show_multiplicative_average(array)
  total = 1
  array.map { |num| total *= num }
  format("%.3f", (total / array.size.to_f))
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667


# example_of_answer =>
def show_multiplicative_average(numbers)
  product = 1.to_f
  numbers.each { |number| product *= number }
  average = product / numbers.size
  puts "The result is #{format('%.3f', average)}"
end

# further_exploration =>
# What happens if you omit the call to #to_f on the first line of our method?

# my_answer =>
# if you omit the #to_f method then the result will not be accurate because it remain as an integer and will not be a float; the result will still appear as a float but the numbers after the decimal will be gone