# Write a program that asks the user for their age in years, and then converts
# that age to months.

# my_answer =>

puts "How many years old are you? "

age = gets.chomp.to_i
months = age * 12

puts "You are #{months} months old."


