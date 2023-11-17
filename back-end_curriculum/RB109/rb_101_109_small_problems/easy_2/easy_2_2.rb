# Build a program that asks a user for the length and width of a room in meters and then displays the area of the room in both square meters and square feet.

# Note: 1 square meter == 10.7639 square feet

# Do not worry about validating the input at this time.

# my_answer =>

# PEDAC

# Problem ---
# input is two integers
# output is two floats in different measurements
# problem domain = obtaining the area of the room, converting from meters to feet, printing the results
# explicit requirements = Do not validate input, provide both sq ft and sq meters, return area in float
# implicit reqirements = Do we need to round up? Assuming the area if of a reactangle or sqaure room since only allowing the two measurements.

# mental_model = set two variables for length and width. Get the area of the room in meters. Then take area in meters and convert it into feet. Print results.

# Examples/ Test Cases ---
# Example Run: 
# Enter the length of the room in meters:
# 10
# Enter the width of the room in meters:
# 7
# The area of the room is 70.0 square meters (753.47 square feet).

# Data Structure ---
# multiplication and division

# Algorithm ---
# GET length
# SET length as float
# GET width
# SET width as float
# multiply length and width
# SET meters result
# multiply meters times 10.7639 feet
# SET feet result
# PRINT both results

# Code with Intent ---

puts "Enter the length of the room in meters:"
length_meters = gets.chomp.to_f
puts "Enter the width of the room in meters:"
width_meters = gets.chomp.to_f

area_meters = length_meters * width_meters
area_feet = area_meters * 10.7639

puts "The area of the room is #{area_meters} square meters (#{area_feet.round(3)} square feet)."


# example_of_answer =>
SQMETERS_TO_SQFEET = 10.7639

puts '==> Enter the length of the room in meters: '
length = gets.to_f

puts '==> Enter the width of the room in meters: '
width = gets.to_f

square_meters = (length * width).round(2)
square_feet = (square_meters * SQMETERS_TO_SQFEET).round(2)

puts "The area of the room is #{square_meters} " + \
     "square meters (#{square_feet} square feet)."


# further_exploration =>
# Modify this program to ask for the input measurements in feet, and display the results in square feet, square inches, and square centimeters.

SQFEET_TO_SQINCH = 144.0
SQINCH_TO_SQCENT = 6.4516

puts '==> Enter the length of the room in feet: '
length = gets.to_f

puts '==> Enter the width of the room in feet: '
width = gets.to_f

square_feet = (length * width).round(2)
square_inch = (square_feet * SQFEET_TO_SQINCH).round(2)
square_centimeters = (square_inch * SQINCH_TO_SQCENT).round(2)

puts "The area of the room is #{square_feet} " + \
     "square feet (#{square_inch} square inches or " + \
     "#{square_centimeters} square centimeters)."