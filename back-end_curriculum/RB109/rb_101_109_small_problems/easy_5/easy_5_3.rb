#As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

# Write two methods that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both methods should return a value in the range 0..1439.

# You may not use ruby's Date and Time methods.

# my_answer =>

# PEDAC

# Problem ---
# input is a string in 24 hour format
# output is an integer representing minutes
# problem domain = two methods, convery the string into integers, convert the hour integers into minutes, add the minutes together, subtract or add the values to the total number of minutes in a day, return results
# explicit reqs = cannot use Date or Time method, argument is in 24 hour format, return value should be in the range of 1439 (1440 - 1)
# implicit reqs = no data validation, if the value is 24:00 must return zero integer

# mental model = split the string into an array and convert to integers. Multiply the hour value by minutes in an hour to get the number of minutes. Add the two minute values together to get the total number of minutes. This will be the return for values after midnight. The values before midnight will be subtracted from 1440 to get the result

# Examples/ Test Cases ---
# after_midnight('00:00') == 0
# before_midnight('00:00') == 0
# after_midnight('12:34') == 754
# before_midnight('12:34') == 686
# after_midnight('24:00') == 0
# before_midnight('24:00') == 0

# Data Structures ---
# array and Sring#to_i method

# Algorithm ---
# Given string split using : into an array
# using map over the array, convert the string numerics into integers
# using the index[0] multiply the number of hours by 60 minutes.
# sum the array to get the values for after midnight
# to get the hours before midnight call the after mightnight method and then subtract from 1440
# return results

# Code with Intent ---
HOURS_PER_MINUTE = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = 60 * 24

def after_midnight(string)
  time = string.split(':').map! { |num| num.to_i }
  minutes = (time[0] * HOURS_PER_MINUTE) + time[1]
  if minutes == 1440
    minutes = 0
  end
  minutes
end

def before_midnight(string)
  minutes = MINUTES_PER_DAY - (after_midnight(string))
  if after_midnight(string) == 0
    minutes = 0
  end
  minutes
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0


# correct_answer =>
HOURS_PER_DAY = 24
MINUTES_PER_HOUR = 60
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def after_midnight(time_str)
  hours, minutes = time_str.split(':').map(&:to_i)
  (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY
end

def before_midnight(time_str)
  delta_minutes = MINUTES_PER_DAY - after_midnight(time_str)
  delta_minutes = 0 if delta_minutes == MINUTES_PER_DAY
  delta_minutes
end

# further_exploration =>
# How would these methods change if you were allowed to use the Date and Time classes?