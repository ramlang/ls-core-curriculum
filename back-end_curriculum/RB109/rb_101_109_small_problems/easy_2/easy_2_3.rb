require "pry"
# Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip and then display both the tip and the total amount of the bill.

# my_answer =>

# PEDAC

# Problem ---
# input two integers the bill and percent tip
# output is two flotas the tip and the bill total
# problem domain = calculating the percent tip and calculating the total
# explicit reqs = output is a float, display both total and tip amount
# implicit reqs = accept integers and floats? Validate the values? Currencey is american dollars? 

# mental model = accept two values, convert to floats, calcuate the percent tip, add the tip to the bill total, display results

# Examples/ Test Cases ---
# Example:
# What is the bill? 200
# What is the tip percentage? 15

# The tip is $30.0
# The total is $230.0

# Data Structure ---
# multiplication, round method, string interpolation

# Algorithm ---
# GET bill
# GET percent for tip
# convert tip to percentage
# calculate the percent * bill total
# SET tip
# add the tip to bill total
# SET bill total
# PRINT tip and bill total

# Code with Intent ---
print "What is the bill? "
bill_amount = gets.to_f

print "What is the tip percentage? "
tip_percent = gets.to_f

tip_amount = (bill_amount * (tip_percent / 100))
bill_total = (tip_amount + bill_amount)

# puts "The tip is $#{tip_amount}\nThe total is $#{bill_total}"

# further_exploration =>
# Our solution prints the results as $30.0 and $230.0 instead of the more usual $30.00 and $230.00. Modify your solution so it always prints the results with 2 decimal places.

# Hint: You will likely need Kernel#format for this.

puts format("%s %#.2f\n%s %#.2f","The tip is $", tip_amount, "The total is $", bill_total)

