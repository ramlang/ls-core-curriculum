# Build a program that displays when the user will retire and how many years she has to work till retirement.

# my_answer =>

# PEDAC

# Problem ---
# input is two integers age and age of retire
# output it two integers year of retire and years until retirement
# problem domain = calculate the number of years to go and the year of retirement
# explicit reqs = integers
# implicit reqs = assume valid input

# mental model = obtain age, obtain age to retire at. Take age and subtract from age to retire. Add differece to current year. Print the results of the year to retire and number of years remaining.

# Examples/ Test Cases ---
# Example:
# What is your age? 30
# At what age would you like to retire? 70

# It's 2016. You will retire in 2056.
# You have only 40 years of work to go!

# Data Structure ---
# addition and substraction

# Algorithm --- 
# GET age
# GET age to retire
# subtract age from age to retire
# SET difference
# add difference to current year
# GET year to retire
# PRINT the year to retire and the difference

# Code with Intent ---

print "What is your age? "
age = gets.to_i
print "At what age would you like to retire? "
retire_age = gets.to_i

difference = retire_age - age
time = Time.new
current_year = time.year
retire_year = current_year + difference

puts "It's #{current_year}. You will retire in #{retire_year}."
puts "You have only #{difference} years of work to go!"

# example_of_answer =>
current_year = Time.now.year