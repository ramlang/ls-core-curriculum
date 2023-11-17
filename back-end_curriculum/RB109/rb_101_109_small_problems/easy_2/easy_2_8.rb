# Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or product of all numbers between 1 and the entered integer.

# my_answer =>

# PEDAC

# Problem ---
# input is an integer
# output is an integer that is either a sum or a product
# problem domain = validating the integer, taking user inpt to determine operation to perform. Calculate either the sum, or the product of all the numbers between 1 and the given number
# explicit reqs = integer must be greater than zero, numbers range between 1 and the number including both, use s to calc sum and p to calc product
# implicit reqs = no floats will be given, the characters entered will be lowercase and validated

# mental model = gets intger, integer must be greater than zero. If it is not ask again. Gets character, validate the character is correct. If it is not ask again. Iterate over the number range. Use cumulative sum to get calculations. Produce the sum or product. Print results.

# Examples/ Test Cases ---
# >> Please enter an integer greater than 0:
# 5
# >> Enter 's' to compute the sum, 'p' to compute the product.
# s
# The sum of the integers between 1 and 5 is 15.


# >> Please enter an integer greater than 0:
# 6
# >> Enter 's' to compute the sum, 'p' to compute the product.
# p
# The product of the integers between 1 and 6 is 720.

# Data Structures ---
# sum, product, loop

# Algorithm ---
# LOOP
# GETS integer from user
# break loop if integer is less than or equal to zero
# SET range of nummbers
# GETS character from user
# IF character is equal to p
# then iterate over the range and multiply the integer by itself as it is incrementing. 
# ELSE character is equal to s
# then iterate over the range and sum the integer by itself as it is incrementing.
# PRINT result

# Code with Intent ---
num = ''
loop do
  puts "Please enter a number greater than zero >> "
  num = gets.chomp.to_i
  break if num > 0
end
num_sum = 0
num_product = 1
loop do
  puts "Please enter 's' for sum or 'p' for product >> "
  operation = gets.chomp.downcase
  if operation == 's'
    num_sum = (1..num).to_a.sum
    puts num_sum
    break
  elsif operation == 'p'
    (1..num).each { |n| num_product *= n }
    puts num_product
    break 
  else
    puts "Enter 's' or 'p' >> "
  end
end


# correct_answer =>
def compute_sum(number)
  total = 0
  1.upto(number) { |value| total += value }
  total
end

def compute_product(number)
  total = 1
  1.upto(number) { |value| total *= value }
  total
end

puts ">> Please enter an integer greater than 0"
number = gets.chomp.to_i

puts ">> Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp

if operation == 's'
  sum = compute_sum(number)
  puts "The sum of the integers between 1 and #{number} is #{sum}."
elsif operation == 'p'
  product = compute_product(number)
  puts "The product of the integers between 1 and #{number} is #{product}."
else
  puts "Oops. Unknown operation."
end

# further_exploration =>
# The compute_sum and compute_product methods are simple and should be familiar. A more rubyish way of computing sums and products is with the Enumerable#inject method. #inject is a very useful method, but if you've never used it before, it can be difficult to understand.

# Take some time to read the documentation for #inject. (Note that all Enumerable methods can be used on Array.) Try to explain how it works to yourself.

# Try to use #inject in your solution to this problem.
def compute_sum(number)
  (1..number).inject { |total, n| total + n }
end

def compute_product(number)
  (1..number).inject { |total, n| total * n }
end

puts ">> Please enter an integer greater than 0"
number = gets.chomp.to_i

puts ">> Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp

if operation == 's'
  sum = compute_sum(number)
  puts "The sum of the integers between 1 and #{number} is #{sum}."
elsif operation == 'p'
  product = compute_product(number)
  puts "The product of the integers between 1 and #{number} is #{product}."
else
  puts "Oops. Unknown operation."
end

