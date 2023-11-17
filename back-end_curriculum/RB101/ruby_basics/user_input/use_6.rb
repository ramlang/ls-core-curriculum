# Write a program that displays a welcome message, but only after the user
# enters the correct password, where the password is a string that is defined
# as a constant in your program. Keep asking for the password until the user
# enters the correct password.

# my_answer =>

PASSWORD = "widward"

loop do
  puts "Enter password: "
  password = gets.chomp.downcase
  break if password == PASSWORD
end 
puts "Welcome!"


# example_of_answer =>

PASSWORD = 'SecreT'

loop do
  puts '>> Please enter your password:'
  password_try = gets.chomp
  break if password_try == PASSWORD
  puts '>> Invalid password!'
end

puts 'Welcome!'