# Question 3
# You have to create a method that takes a positive integer number and returns the next bigger number formed by the same digits:
# 12 => 21
# 513 => 531
# 2017 => 2071

# If no bigger number can be compused using those digits return -1
# 9 => -1
# 111 => -1
# 531 => -1

`p next_bigger_num(9) == -1`
`p next_bigger_num(12) == 21`
`p next_bigger_num(513) == 531`
`p next_bigger_num(2017) == 2071`
`p next_bigger_num(111) == -1`
`p next_bigger_num(531) == -1`
`p next_bigger_num(123456789) == 123456798`

# PROBLEM
# input = integer
# output = next biggest integer using same digits or -1

# >> rules:
# - positive integers only
# - number must be formed by same digits
# - return -1 if no bigger number can be formed

# >> tasks:
# - get the number of digits within a number
# - increment the integer
# - if the number is greater than the current number and when sorted is the same as the number then I can return the number

# EXAMPLES
# -see above

# DATA STRUCTURES 
# - Array, Counter, Loop

# ALGORITHM 
# HIGH LEVEL
# - Set the highest value by sorting the number reversed and allow number to be equal to or less than that value. Increment the integer and check if the value sorted is equal to the original integer. If it is return otherwise keep going until max value is reached or no value is found. If the max value is equal to the original integer than return -1.

# PSUEDOCODE
# Set max number by sorting number greatest to leat
# convert integer to an array
# Allow result value to be equal to or less than this value
# if the max number is equal to the original number return -1
# Increment the integer
# Check if each value sorted is equal to the orignal number sorted, if it is then return that number
# Otherwise return the max number

def next_bigger_num(num)
  num_array = num.to_s.chars.map(&:to_i)
  max_num = num_array.sort { |a, b| b <=> a }.join('').to_i
  
  return -1 if max_num == num
  
  loop do
    num += 1
    return num if num.to_s.chars.map(&:to_i).sort == num_array.sort
  end
  max_num
end

p next_bigger_num(9) == -1
p next_bigger_num(12) == 21
p next_bigger_num(513) == 531
p next_bigger_num(2017) == 2071
p next_bigger_num(111) == -1
p next_bigger_num(531) == -1
p next_bigger_num(123456789) == 123456798

# TIME 15 min