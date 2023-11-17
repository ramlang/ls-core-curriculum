# Write a method that takes a floating point number that represents an angle between 0 and 360 degrees and returns a String that represents that angle in degrees, minutes and seconds. You should use a degree symbol (°) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. A degree has 60 minutes, while a minute has 60 seconds.
# dms(30) == %(30°00'00")
# dms(76.73) == %(76°43'48")
# dms(254.6) == %(254°36'00")
# dms(93.034773) == %(93°02'05")
# dms(0) == %(0°00'00")
# dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# Note: your results may differ slightly depending on how you round values, but should be within a second or two of the results shown.

# You should use two digit numbers with leading zeros when formatting the minutes and seconds, e.g., 321°03'07".

# You may use this constant to represent the degree symbol:
# DEGREE = "\xC2\xB0"

# my_answer =>

# PEDAC

# Problem ---
# input is an flaot representing an angle
# output is a string in degrees minutes and seconds
# problem domain = converting angles to degrees, minutes, seconds, storing number for each value, changing the intgers into strings, concatenating strings and adding additional zeros when necessary
# explicit reqs = input is a float, and output must be a string using correct puncuation and 0's infront of numerical characters, rounding may be off slightly
# implicit reqs = no data validation needed, are the % and parenthesis required in the string as well, if zero degrees is entered the method should also return zero, if the degrees is 360 the return should either be 360 or 0

# mental_model = obtain the degrees by converting the float into an integer, then convert the remining decimal into minutes by multipying by 60, convert the float into an integer, then convert the remaing decimal into seconds by multipling by 60, use regex or format to add a zero if the value is less than 10, return the string

# Examples/ Test Cases ---
# dms(30) == %(30°00'00")
# dms(76.73) == %(76°43'48")
# dms(254.6) == %(254°36'00")
# dms(93.034773) == %(93°02'05")
# dms(0) == %(0°00'00")
# dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# Data Structures ---
# input = float
# inbetween = array or individual variables
# output = string
# methods = #to_i, Array#join, format, regex

# Algortihms ---
# mental_model = obtain the degrees by converting the float into an integer, then convert the remining decimal into minutes by multipying by 60, convert the float into an integer, then convert the remaing decimal into seconds by multipling by 60, use regex or format to add a zero if the value is less than 10, return the string

# given float
# set degrees vairable to float converted into integer
# set minutes to float modulus one multiplied by 60
# set seconds to minutes modulus one multplied by 60
# convert both to integers
# use the format method to correctly format the variables among the correct puncuation
# return result

# Code with Intent ---
DEGREE = "\xC2\xB0"

def dms(float)
  minutes = (float % 1) * 60
  seconds = (minutes % 1) * 60
  format("%01d%s%02d'%02d\"", float, DEGREE, minutes, seconds)
end

puts dms(30) == %(30°00'00")
puts dms(76.73) == %(76°43'48")
puts dms(254.6) == %(254°36'00")
puts dms(93.034773) == %(93°02'05")
puts dms(0) == %(0°00'00")
puts dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# Too much hack n slash with #format method!!!

# correct_answer =>
DEGREE = "\xC2\xB0"
MINUTES_PER_DEGREE = 60
SECONDS_PER_MINUTE = 60
SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE

def dms(degrees_float)
  total_seconds = (degrees_float * SECONDS_PER_DEGREE).round
  degrees, remaining_seconds = total_seconds.divmod(SECONDS_PER_DEGREE)
  minutes, seconds = remaining_seconds.divmod(SECONDS_PER_MINUTE)
  format(%(#{degrees}#{DEGREE}%02d'%02d"), minutes, seconds)
end

# further_exploration =>
# Our solution returns the following results for inputs outside the range 0-360:
dms(400) == %(400°00'00")
dms(-40) == %(-40°00'00")
dms(-420) == %(-420°00'00")

# Since degrees are normally restricted to the range 0-360, can you modify the code so it returns a value in the appropriate range when the input is less than 0 or greater than 360?
dms(400) == %(40°00'00")
dms(-40) == %(320°00'00")
dms(-420) == %(300°00'00")