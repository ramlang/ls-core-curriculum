# A double number is a number with an even number of digits whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, 7676 are all double numbers. 444, 334433, and 107 are not.

# Write a method that returns 2 times the number provided as an argument, unless the argument is a double number; double numbers should be returned as-is.
# twice(37) == 74
# twice(44) == 44
# twice(334433) == 668866
# twice(444) == 888
# twice(107) == 214
# twice(103103) == 103103
# twice(3333) == 3333
# twice(7676) == 7676
# twice(123_456_789_123_456_789) == 123_456_789_123_456_789
# twice(5) == 10

# my_answer =>

# PEDAC

# Problem ---
# input is an integer
# output is an integer
# problem domain = identifying a double number by dividing number size in half and comparing the two halves together is the size is even, doubling non double numbers, returning the value
# explicit reqs = a double number is a number whose left digits are exactly the same as the right digits and has an even number of digits, values that are not double numbers should be doubled dand values that are double numbers should be returned as is
# implicit reqs = single digit numbers will always not be double numbers, ruby will treat numbers with underscores the same as it would any number

# mental model = determine how many digits are in the integer, if the number is odd double the number, if the number is even divide the size in half and compare the two halves to eachother, if they are the same return the double number as is, if they are not the same then doulbe the number and return

# Examples/ Test Cases ---
# twice(37) == 74
# twice(44) == 44
# twice(334433) == 668866
# twice(444) == 888
# twice(107) == 214
# twice(103103) == 103103
# twice(3333) == 3333
# twice(7676) == 7676
# twice(123_456_789_123_456_789) == 123_456_789_123_456_789
# twice(5) == 10

# Data Structures ---
# input = integer
# inbetween = string, integer
# output = integer
# methods = Integer#to_s, String#to_i, equality operator

# Algorithm ---
# determine integer size by converting it to a string and examining the length
# determine if it is odd or even
# if odd multiply number by 2 and return
# if even then divide number size by 2
# convert to string
# compare index 0..half - 1 and half..size
# if they are the same then return
# if they are not the same then multiply the number by 2 and return

# Code with Intent ---
def twice(integer)
  number_of_digits = integer.to_s.size
  return integer * 2 if number_of_digits.odd?
  middle = number_of_digits / 2
  first_half = integer.to_s[0, middle]
  second_half = integer.to_s[middle, middle]
  first_half == second_half ? integer : integer * 2
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10


# example_of_answer =>
def twice(number)
  string_number = number.to_s
  center = string_number.size / 2
  left_side = center.zero? ? '' : string_number[0..center - 1]
  right_side = string_number[center..-1]

  return number if left_side == right_side
  return number * 2
end
