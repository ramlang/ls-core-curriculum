# Write a method that takes one argument, a positive integer, and returns a list
# of the digits in the number.

# my_answer =>

# PEDAC

# Problem ---
# input is one positive integer
# output is a list of each digit in the number
# problem domain = separating the number into individual digits
# implicit requirments = 
# explicit requirements = positive integer, return do not print

# mental_model = Given a positive integer take the modulus to get digit
# and divide by 10 to truncate the number until all numbers have been separated.
# Add the digits to a list after each modulus operation until number is equal to
# zero.

# Example/Test Case ---
# puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
# puts digit_list(7) == [7]                     # => true
# puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
# puts digit_list(444) == [4, 4, 4]             # => true

# Data Structure ---
# Use an array and use modulus to separate the digits

# Algorithm ---
# START
# list initialized
# digit initialized 
# UNTIL number is equal to zero
# take the modulus of number
# store modulus in list
# reassign number to number divided by 10
# return list
# END

# Code with Intent ---
def digit_list(number)
  list = []
  digit = 0
  until number == 0
    digit = number % 10
    list.unshift(digit)
    number /= 10
  end
  list
end

puts digit_list(12345) == [1, 2, 3, 4, 5]
puts digit_list(7) == [7]
puts digit_list(375290) == [3, 7, 5, 2, 9, 0]
puts digit_list(444) == [4, 4, 4]


# example_of_answer =>

def digit_list(number)
  digits = []
  loop do
    number, remainder = number.divmod(10)
    digits.unshift(remainder)
    break if number == 0
  end
  digits
end

# example_of_answer =>

def digit_list(number)
  number.to_s.chars.map(&:to_i) # &:to_i is equivalent to something.map { |char| char.to_i }
end