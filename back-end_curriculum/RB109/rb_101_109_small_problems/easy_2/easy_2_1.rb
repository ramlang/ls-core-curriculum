# Build a program that randomly generates and prints Teddy's age. To get the age, you should generate a random number between 20 and 200.

# my_answer =>

# PEDAC

# Problem ---
# input is none
# output is a string with a randomly generated number
# problem domain = randomly generating number btwn 20 and 200, print a string including the number that was generated.
# explicit requirements = number is between 20 and 200, chosen randomly, string is included in output
# implicit requirments = numbers are integers only, does not include floats, return is a string with the number included, not including 20 and 200 within range?

# mental_model = define the method, initilaize a variable number, generate a random number between 20 and 200, set number equal to random number, print a string including the number generated.

# Example/ Test Case ---
# Example Output:
# Teddy is 69 years old!

# Data Structure ---
# Rand method and range will be used. String interpolation will also be needed.

# Algorithm ---
# initialize number
# SET to Random between 20 and 200
# PRINT string with number included

# Code with Intent ---
def age
  age = rand(20..200)
  puts "Teddy is #{age} years old!"
end


# further exploration =>
# Modify this program to ask for a name, and then print the age for that person. For an extra challenge, use "Teddy" as the name if no name is entered.
puts "Please enter your name => "
user_name = gets.chomp
user_name = 'Teddy' if user_name.empty?

def age_modified(name)
  age = rand(20..200)
  puts "#{name} is #{age} years old!"
end

# or without method...
puts "Please enter your name => "
user_name = gets.chomp
user_name.empty? ? user_name = 'Teddy' : user_name = user_name # most student solutions used ternary operator
age = rand(20..200)

puts "#{name} is #{age} years old!"
