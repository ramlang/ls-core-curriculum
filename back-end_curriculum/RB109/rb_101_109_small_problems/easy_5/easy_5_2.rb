# The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

# Write a method that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

# You may not use ruby's Date and Time classes.

# my_answer =>

# PEDAC

# Problem ---
# input is an integer that represents the number of minutes before or after midnight
# output is a string with the equivalent 24 hour formatted time
# problem domain = determining if the value is positive or negative, converting to hours, subtracting from 24:00 or adding to 00:00, concatenating the semicolon and returning the result
# explicit reqs = do not use Date or Time class, return in 24 hours format as a string, should work with any integer input
# implicit reqs = no validation required

# mental model = find the number of hours by dividing the provided number by 60. If the number is positive add to zero, if the number is negative subtract from 24. Find the number of minute by taking modulus 60 and adding the number to zero. Concatentate these values after #to_s method between a semicolon to acheieve the string result.

# Examples/ Test Cases ---
# time_of_day(0) == "00:00"
# time_of_day(-3) == "23:57"
# time_of_day(35) == "00:35"
# time_of_day(-1437) == "00:03"
# time_of_day(3000) == "02:00"
# time_of_day(800) == "13:20"
# time_of_day(-4231) == "01:29"

# Data Structure ---
# None

# Algorithm ---
# GET integer
# SET hour variable by dividing integer by 60
# SET minute variable by taking modulus 60 of the absolute value of integer
# If the hours is negative subtract from 24, if the value is positive add to zero
# add the minutes to zero
# if hour is less than 10 prepend additional zero to hour
# concatentate hour variable + semicolon + minute variable

# Code with Intent ---
def concat(hh, mm)
  "#{hh.to_s.rjust(2, '0')}:#{mm.to_s.rjust(2, '0')}"
end

def time_of_day(integer)
  if integer.between?(0, 1440)
    hour = integer / 60
  elsif integer.between?(-1440, 0)
    hour = 24 + (integer / 60)
  elsif integer > 1440
    hour = integer / 1440
  else
    hour = (integer / 60) % 24
  end
  minute = integer % 60
  concat(hour, minute)
end

p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"


# correct_answer =>
MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def normalize_minutes_to_0_through_1439(minutes)
  while minutes < 0
    minutes += MINUTES_PER_DAY
  end

  minutes % MINUTES_PER_DAY
end

def time_of_day(delta_minutes)
  delta_minutes = normalize_minutes_to_0_through_1439(delta_minutes)
  hours, minutes = delta_minutes.divmod(MINUTES_PER_HOUR)
  format('%02d:%02d', hours, minutes)
end


# further_exploration
# Problem 1
# The % operator's interaction with negative values is confusing and difficult to remember, as described in the Introduction to Programming with Ruby Book. Because of that, we recommend not using % with negative numbers, but that you should first convert the negative values to positive numbers so you can write more explicit code. This problem is one such place where it's probably easier to take this approach.

# However, that doesn't mean you can't use % at all. In fact, it's possible to write a single calculation with % that performs the entire normalization operation in one line of code. Give it a try, but don't spend too much time on it.

# Problem 2
# How would you approach this problem if you were allowed to use ruby's Date and Time classes?

# Problem 3
# How would you approach this problem if you were allowed to use ruby's Date and Time classes and wanted to consider the day of week in your calculation? (Assume that delta_minutes is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a delta_minutes value of -4231 would need to produce a return value of Thursday 01:29.)