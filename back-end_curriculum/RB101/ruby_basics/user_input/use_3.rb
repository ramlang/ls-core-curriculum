# Write a program that asks the user whether they want the program to print
# "something", then print it if the user enters y. Otherwise, print nothing.

# my_answer =>

puts "Would you like me to print something? (y/n) "
answer = gets.chomp

if answer == 'y'
  puts "...something"
end


# example_of_answer =>

puts '>> Do you want me to print something? (y/n)'
choice = gets.chomp
puts 'something' if choice == 'y'

# to ignore case of letter

puts '>> Do you want me to print something? (y/n)'
choice = gets.chomp.downcase
puts 'something' if choice == 'y' # or you can add logical operator || choice == 'Y'