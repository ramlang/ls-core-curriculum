# Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input

# my_answer =>

# PEDAC

# Problem ---
# input = 2 positive integers
# output = 6 integers 
# problem domain = conducting different operators on the two numbers and displaying the results of the operations
# explicit reqs = two positive integers, no validation needed, specific operators
# implicit reqs = always be integers, do not need to truncate values

# mental model = ask user for two integers. Use operators on the values and store into separate variables. Display messsage and use variables within answer.

# Examples/ Test Cases ---
# ==> Enter the first number:
# 23
# ==> Enter the second number:
# 17
# ==> 23 + 17 = 40
# ==> 23 - 17 = 6
# ==> 23 * 17 = 391
# ==> 23 / 17 = 1
# ==> 23 % 17 = 6
# ==> 23 ** 17 = 141050039560662968926103

# Data Structure ---
# use variables and specified operators

# Algotrithm
# GET 2 numbers from user
# SET as separate variables
# SET variables for each operator result
# PRINT results

# Code with Intent ---
puts "Enter the first number >> "
first_num = gets.chomp
puts "Enter the second number >> "
second_number = gets.chomp
add = first_num.to_i + second_number.to_i
puts first_num + ' + ' + second_number + ' = ' + add.to_s
subtract = first_num.to_i - second_number.to_i
puts first_num + ' - ' + second_number + ' = ' + subtract.to_s
multiply = first_num.to_i * second_number.to_i
puts first_num + ' * ' + second_number + ' = ' + multiply.to_s
divide = first_num.to_i / second_number.to_i
puts first_num + ' / ' + second_number + ' = ' + divide.to_s
modulo = first_num.to_i % second_number.to_i
puts first_num + ' % ' + second_number + ' = ' + modulo.to_s
power = first_num.to_i ** second_number.to_i
puts first_num + ' ** ' + second_number + ' = ' + power.to_s

# example_of_answer =>
def prompt(message)
  puts "==> #{message}"
end

prompt("Enter the first number:")
first_number = gets.chomp.to_i
prompt("Enter the second number:")
second_number = gets.chomp.to_i

prompt("#{first_number} + #{second_number} = #{first_number + second_number}")
prompt("#{first_number} - #{second_number} = #{first_number - second_number}")
prompt("#{first_number} * #{second_number} = #{first_number * second_number}")
prompt("#{first_number} / #{second_number} = #{first_number / second_number}")
prompt("#{first_number} % #{second_number} = #{first_number % second_number}")
prompt("#{first_number} ** #{second_number} = #{first_number**second_number}")