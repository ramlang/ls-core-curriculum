# Using the multiply method from the "Multiplying Two Numbers" problem, write a method that computes the square of its argument (the square is the result of multiplying a number by itself).

def multiply(num_1, num_2)
  num_1 * num_2
end

# my_answer =>

def square(num)
  multiply(num, num)
end

puts square(5) == 25
puts square(-8) == 64

# further_exploration =>
# What if we wanted to generalize this method to a "power to the n" type method: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply method?

def power(num, pow)
  
# peer_answer =>
def exponentiation(base, power)
  multiply(base, 1) ** power
end