# ***Problem was challenging; did not have a completed attempt before viewing answer***

# Write a method that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with st, nd, rd, or th as appropriate for that number.

# New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.

# my_answer =>

# PEDAC

# Problem ---
# input is year as an integer
# output is century as a string
# problem domain = converting year to century, adding a year if needed, determining which suffix to add based on last integers
# explicit reqs = ending value must be a string with suffix, year provided is an integer
# implicit reqs = no validation needed, what to do if zero is entered?

# mental model = 

# Examples/ Test Cases ---
# century(2000) == '20th'
# century(2001) == '21st'
# century(1965) == '20th'
# century(256) == '3rd'
# century(5) == '1st'
# century(10103) == '102nd'
# century(1052) == '11th'
# century(1127) == '12th'
# century(11201) == '113th'

# Data Structure ---


# Algorithm ---


# Code with Intent ---


# correct_answer =>
def century(year)
  century = year / 100 + 1
  century -= 1 if year % 100 == 0
  century.to_s + century_suffix(century)
end

def century_suffix(century)
  return 'th' if [11, 12, 13].include?(century % 100)
  last_digit = century % 10

  case last_digit
  when 1 then 'st'
  when 2 then 'nd'
  when 3 then 'rd'
  else 'th'
  end
end