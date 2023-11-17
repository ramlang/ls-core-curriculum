# In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

# Assume this rule is good for any year greater than year 0. Write a method that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

# my_answer =>

# PEDAC

# Problem ---
# input is a year which is an integer
# output is a boolean (true or false)
# problem domain = figure out if the year is divisble by 4. If it is also divisible by 100 then check if divisble by 400. If it is then it is a leap year. If the year is only divisible by 4 then it is a leap year.
# explicit reqs = year must be greater than 0, return boolean
# implicit reqs = integer validation or only greater than zero? 

# mental model = year modulus 4. If remainder when modulus 100 return true, else modulus 400. If remainder then return false

# Examples/ Test Cases ---
# leap_year?(2016) == true
# leap_year?(2015) == false
# leap_year?(2100) == false
# leap_year?(2400) == true
# leap_year?(240000) == true
# leap_year?(240001) == false
# leap_year?(2000) == true
# leap_year?(1900) == false
# leap_year?(1752) == true
# leap_year?(1700) == false
# leap_year?(1) == false
# leap_year?(100) == false
# leap_year?(400) == true

# Data Structure ---
# conditional if/else

# Algorithm ---
# GET year
# if year modulus 4 is equal to zero
#   check year modulus 100 is equal to zero
#     if year modulus 100 is equal to zero
#       check year modulus 400 is equal to zero
#          if year modulus 400 is equl to zero
#            return true
#          else
#            return false
#     else
#       return true
# else
#   return false

# Code with Intent ---
def leap_year?(year)
  if (year % 4) == 0
    if (year % 100) == 0
      if (year % 400) == 0
        return true
      else
        return false
      end
    else
      return true
    end
  else
    return false
  end
end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true


# example_of_answer =>
def leap_year?(year)
  if year % 400 == 0
    true
  elsif year % 100 == 0
    false
  else
    year % 4 == 0
  end
end

# example_of_answer =>
def leap_year?(year)
  (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)
end

# further_exploration =>
# Can you rewrite leap_year? to perform its tests in the opposite order of the above solution? That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by 400. Is this solution simpler or more complex than the original solution?
def leap_year?(year)
  if year % 100 == 0
    false
  elsif year % 400 == 0
    true
  else
    year % 4 == 0
  end
end

# see my_answer above