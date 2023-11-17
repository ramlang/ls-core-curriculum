# A Rational Number is any number that can be represented as the result of the division between two integers, e.g., 1/3, 3/2, 22/7, etc. The number to the left is called the numerator, and the number to the right is called the denominator.

# A Unit Fraction is a rational number where the numerator is 1.

# An Egyptian Fraction is the sum of a series of distinct unit fractions (no two are the same), such as:

# 1   1    1    1
# - + - + -- + --
# 2   3   13   15
# Every positive rational number can be written as an Egyptian fraction. For example:

#     1   1   1   1
# 2 = - + - + - + -
#     1   2   3   6
# Write two methods: one that takes a Rational number as an argument, and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number, and another that takes an Array of numbers in the same format, and calculates the resulting Rational number. You will need to use the Rational class provided by Ruby.

# Every rational number can be expressed as an Egyptian Fraction. In fact, every rational number can be expressed as an Egyptian Fraction in an infinite number of different ways. Thus, the first group of examples may not show the same values as your solution. They do, however, show the expected form of the solution. The remaining examples merely demonstrate that the output of egyptian can be reversed by unegyptian.

# Hint
# You will need to read about the Rational class. This is part of ruby's core library.

# Note that the techniques for calculating Egyptian Fractions shown on the Wikipedia page may not be the easiest to understand or implement -- the methods described there are generally meant to arrive at a solution as quickly as possible or to arrive at a specific solution (such as the shortest solution). Feel free to use a simpler method: check whether 1 / 1 can be part of the solution, then 1 / 2, then 1 / 3, then 1 / 4, and so on. This is relatively easy to implement compared to some other techniques.

# my_answer =>

# PROBLEM:

# Write two methods: one that takes a Rational number as an argument, and returns an Array of the denominators that are part of an Egyptian Fraction representation of the number

# and another that takes an Array of numbers in the same format, and calculates the resulting Rational number. You will need to use the Rational class provided by Ruby.

# Egyptian Fraction Definition: An Egyptian Fraction is the sum of a series of distinct unit fractions (no two are the same) (unit fraction is 1 / a number)

# Method 1
# input = Rational number
# output = array of denominators for the egyptian fraction of the input

# >> rules:
# - the return array must consist of all uniq values
# - values should represent denominator of fractions

# >> task:
# - get the numeric value for the Rational number
# - determine which fractions can go into the number starting with 1/1, 1/2..
# - use modulus to determine if there is any remainder
# - if there is no remainder add number toa array and return the array
# - otherwise add the number to the array
# - this means that no other values can go into the number because no remainder is present
# - sort of similar to a recursive method to keep getting remainder value and dividing into it repeatedly


# Method 2
# input = array
# outupt = rational number

# >> tasks:
# - iterate over the array to access the denominators (elements)
# - get the fraction values by dividing them all into 1
# - sum those values
# - plug into the Rational method and it should return a fraction 

# EXAMPLES:
# Method 1
# egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
# egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
# egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

# # Method 2
# unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
# unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
# unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
# unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
# unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
# unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
# unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
# unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)

# DATA STRUCTURE:
# - Array, iterator, loop, counter, Rational Class

# ALGORITHM:
# Method 1:
# evaluate the rational number to get a float or integer
# create a denominator value
# create a result array
# create a loop to break loop when float_num is zero
# create unit fraction
# if unit_fraction is greater than float_num then next
# else take float_num reassign to float_num - unit_fraction and add denominator to result array
# return arary 

# Method 2:
# iterate over the array using map(try inject?) and return the array of float values
# sum the array of float values (or will already be summed from inject)
# pass value into rational method and return

# CODE:
def egyptian(rational_num)
  denominator = 1
  result = []

  while rational_num > 0
    unit_fraction = Rational(1, denominator)
    
    if unit_fraction <= rational_num
      rational_num -= unit_fraction
      result.push(denominator)
    end
    denominator += 1
  end
  result
end

p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

def unegyptian(array)
  array.map do |denominator|
    Rational(1, denominator)
  end.sum
end

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
p unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
p unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
p unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
p unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
p unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
p unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
p unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)

# *** time = ~2 - 3 hrs ***


# example_of_answer =>
def egyptian(target_value)
  denominators = []
  unit_denominator = 1
  until target_value == 0
    unit_fraction = Rational(1, unit_denominator)
    if unit_fraction <= target_value
      target_value -= unit_fraction
      denominators << unit_denominator
    end

    unit_denominator += 1
  end

  denominators
end

def unegyptian(denominators)
  denominators.inject(Rational(0)) do |accum, denominator|
    accum + Rational(1, denominator)
  end
end