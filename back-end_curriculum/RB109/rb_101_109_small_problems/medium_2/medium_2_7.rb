# Write a method that returns the number of Friday the 13ths in the year given by an argument. You may assume that the year is greater than 1752 (when the United Kingdom adopted the modern Gregorian Calendar) and that it will remain in use for the foreseeable future.
# friday_13th(2015) == 3
# friday_13th(1986) == 1
# friday_13th(2019) == 2

# my_answer =>

# PEDAC

# Problem ---
# input is a intger representing a year
# output is an integer representing number of friday 13th days in that year
# problem domain = obtain days, months, and days of the week of each year, there are 12th months so 12 possiblites, each month has a 13th, figure out which day the 13th lands on each month, count if the day is a friday, skip if it is any other day, return the count
# explicit reqs = years after 1752
# implicit reqs = ?

# mental model = use a Time method, cycle through each month of the year and determine which day of the week the 13th landed on, count if friday, otherwise skip, 

def friday_13th(year)
  (1..12).to_a.select do |mm|
    Time.new(year, mm, 13).friday?
  end.size
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2


# example_of_answer =>
require 'date'

def friday_13th(year)
  unlucky_count = 0
  thirteenth = Date.civil(year, 1, 13)
  12.times do
    unlucky_count += 1 if thirteenth.friday?
    thirteenth = thirteenth.next_month
  end
  unlucky_count
end


# further_exploration =>
# An interesting variation on this problem is to count the number of months that have five Fridays. This one is harder than it sounds since you must account for leap years.