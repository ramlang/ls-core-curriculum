# The String#to_i method converts a string of numeric characters (including an optional plus or minus sign) to an Integer. String#to_i and the Integer constructor (Integer()) behave similarly. In this exercise, you will create a method that does the same thing.

# Write a method that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

# For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

# You may not use any of the standard conversion methods available in Ruby to convert a string to a number, such as String#to_i, Integer(), etc. Your method should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

# my_answer =>

# PEDAC

# Problem ---
# input is a string of numbers
# output is the equivalent integer
# problem domain = analyze each character within the string, return the equivalent integer
# explicit reqs = cannot use #to_i method or #to_s method or Integer(). Do not worry about plus or minus signs. Assume all characters will be numeric and valid
# implicit reqs = 

# mental model = determine the length of the string, determine the values in the thousands, tenths, hundreds, etc. Add the required number of zeros to each value, and return. Add the numbers together to get total number. 
# Check length
# remove first character and identify number in hash
# multiply number by appropriate value based on current length
# delete first value
# repeat assessing the length each time
# sum the numbers to get the total

# Examples/ Test Cases ---
# string_to_integer('4321') == 4321
# string_to_integer('570') == 570

# Data Structure ---
# hash

# Algorithm ---
# check String#length
# SET number of zeros variable
# GET first character in string
# GET hash[character] value
# IF value is equal to zero; next
# multiply number of zeros and value
# store in new variable for integer (cumulative sum)
# remove first value of string
# repeat process until string is empty
# return the total

# Code with Intent ---
 NUMERIC_TO_INTEGER = {
   '0' => 0,
   '1' => 1,
   '2' => 2,
   '3' => 3,
   '4' => 4,
   '5' => 5,
   '6' => 6,
   '7' => 7,
   '8' => 8,
   '9' => 9
 }
 
def zero_places(number)
  10 ** number
end

def string_to_integer(string)
  integer = 0
  total = 0
  while string.length != 0
    string_length = string.length - 1
    zeros = zero_places(string_length)
    first_number = string.chr
    integer = NUMERIC_TO_INTEGER[first_number]
    integer *= zeros
    total += integer
    string.slice!(0)
  end
  total
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570


# correct_answer =>
DIGITS = {
  '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4,
  '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9
}

def string_to_integer(string)
  digits = string.chars.map { |char| DIGITS[char] }

  value = 0
  digits.each { |digit| value = 10 * value + digit }
  value
end

# further_exploration =>
# Write a hexadecimal_to_integer method that converts a string representing a hexadecimal number to its integer value.
hexadecimal_to_integer('4D9f') == 19871