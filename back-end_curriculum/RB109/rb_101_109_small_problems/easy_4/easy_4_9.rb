# In the previous two exercises, you developed methods that convert simple numeric strings to signed Integers. In this exercise and the next, you're going to reverse those methods.

# Write a method that takes a positive integer or zero, and converts it to a string representation.

# You may not use any of the standard conversion methods available in Ruby, such as Integer#to_s, String(), Kernel#format, etc. Your method should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

# my_answer =>

# PEDAC

# Problem ---
# input is a number
# output is a string representing that number
# problem domain = convert a number to a string
# explicit reqs = cannot use #to_s method or String() method
# implicit reqs = 

# mental model = convert integer to an array, iterate over the array using map to select values from the hash. Once all the values are chosen, join the array back together to form the numeric string

# Examples/ Test Cases ---
# integer_to_string(4321) == '4321'
# integer_to_string(0) == '0'
# integer_to_string(5000) == '5000'

# Data Structure ---
# hash, map iterator, array, array#join

# Algorithm ---
# GET integer
# change integer into an array
# iterate over the array selecting values from CONSTANT hash
# once values have been replaced #join the array together

# Code with Intent ---
DIGITS = {
  0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4',
  5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9',
}

def integer_to_string(integer)
  integer_array = integer.digits.reverse!.map! do |number|
                    DIGITS[number]
                  end
  integer_array.join
end

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'


# example_of_answer =>
DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string_a(number)
  result = ''
  loop do
    number, remainder = number.divmod(10)
    result.prepend(DIGITS[remainder])
    break if number == 0
  end
  result
end
p integer_to_string_a(4321) == '4321'
p integer_to_string_a(0) == '0'
p integer_to_string_a(5000) == '5000'

# further_exploration =>
# One thing to note here is the String#prepend method; unlike most string mutating methods, the name of this method does not end with a !. However, it is still a mutating method - it changes the string in place.

# This is actually pretty common with mutating methods that do not have a corresponding non-mutating form. chomp! ends with a ! because the non-mutating chomp is also defined. prepend does not end with a ! because there is no non-mutating form of prepend.

# How many mutating String methods can you find that do not end with a !. Can you find any that end with a !, but don't have a non-mutating form? Does the Array class have any methods that fit this pattern? How about the Hash class?