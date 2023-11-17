# Using a while loop, print 5 random numbers between 0 and 99. 

# my_answer =>

numbers = []
count = 1
ind = 0

while count <= 5
  numbers[ind] = Kernel.rand(99)
  ind += 1
  count += 1
end
puts numbers


# correct_answer =>

numbers = []

while numbers.size < 5
  numbers << rand(100)
end

puts numbers
