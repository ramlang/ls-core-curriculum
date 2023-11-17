# Write a method that takes two arguments: the first is the starting number, and the second is the ending number. Print out all numbers between the two numbers, except if a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", and finally if a number is divisible by 3 and 5, print "FizzBuzz".
# fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

# my_answer =>

# PEDAC

# Problem ---
# input is two integers
# output is a printed list of numbers and words
# problem domain = create a range of numbers, iterating over the range of number and determining if a number is divisble by certain numbers, if the number meets the criteria then substitute it for a keyword, print the list
# explicit reqs = number divisible by 3 replace with Fizz, number divisible by 5 replace with Buzz, number that are both replaced with FizzBuzz
# implicit reqs = the range should include the argument values not just the inbetween values, the listed number should be separated by commas and all appear on the same line

# mental model = iterate over the range, test each number, replace necessary values, print list

# Examples/ Test Cases ---
# fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

# Data Structures ---
# input = integer (2)
# inbetween = range or array
# output = string
# methods = iterator, conditional if/else, #replace, modulus, division

# Algorithm ---
# create range
# iterate over range
# test divisibility by 3 & 5
# print word
# otherwise print number
# return printed values separated by commas
# iterate over array index, print with commas unless last value of the array

# Code with Intent ---
def fizzbuzz(num_1, num_2)
  array = (num_1..num_2).to_a
  replace_num(array)
  array.each do |value|
    value == array.last ? print("#{value}\n") : print("#{value}, ")
  end
end
    
def replace_num(array)
  array.map! do |num|
    if num % 3 == 0 && num % 5 == 0
      "FizzBuzz"
    elsif num % 3 == 0
      "Fizz"
    elsif num % 5 == 0
      "Buzz"
    else
      num
    end
  end
  array
end

# thought about using case statement, do not like how the replace_num method looks
# also forogt that the Array#join method existed
# see example answer for how to use case statement for this problem, each value is returned to main method and then added to a result array instead of passing the array as an argument 

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


# example_of_answer =>
def fizzbuzz(starting_number, ending_number)
  result = []
  starting_number.upto(ending_number) do |number|
    result << fizzbuzz_value(number)
  end
  puts result.join(', ')
end

def fizzbuzz_value(number)
  case
  when number % 3 == 0 && number % 5 == 0
    'FizzBuzz'
  when number % 5 == 0
    'Buzz'
  when number % 3 == 0
    'Fizz'
  else
    number
  end
end
