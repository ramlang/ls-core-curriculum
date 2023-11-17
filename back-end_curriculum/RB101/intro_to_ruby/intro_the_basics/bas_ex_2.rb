# Use %, /, or both to take a 4 digit number and find the digit in the:
# thousands, hundreds, tens, and ones place.

# my_answer =>

thousands = 8674 / 1000
hundreds = 8674 % 1000 / 100
tens = 8674 % 100 / 10
ones = 8674 % 10

puts "thousands: #{thousands}"
puts "hundreds: #{hundreds}"
puts "tens: #{tens}"
puts "ones: #{ones}"
puts ""

# example_of_answer =>

thousands = 4936 / 1000
hundreds = 4936 % 1000 / 100
tens = 4936 % 1000 % 100 / 10
ones = 4936 % 1000 % 100 % 10