# Ask user their age and display how old they will be in 20, 30, 40 years.

# my_answer =>

puts "Please enter your current age: "
age = gets.chomp.to_i
puts "You are #{age} years old."
puts "In 10 years you will be #{age + 10}"
puts "In 20 years you will be #{age + 20}"
puts "In 30 years you will be #{age + 30}"
puts "In 40 years you will be #{age + 40}"


# example_of_answer =>

puts "How old are you?"
age = gets.chomp.to_i
puts "In 10 years you will be:"
puts age +  10
puts "In 20 years you will be:"
puts age +  20
puts "In 30 years you will be:"
puts age +  30
puts "In 40 years you will be:"
puts age +  40