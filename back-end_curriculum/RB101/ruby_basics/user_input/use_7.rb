# In the previous exercise, you wrote a program to solicit a password. In this
# exercise, you should modify the program so it also requires a user name. The
# program should solicit both the user name and the password, then validate both,
# and issue a generic error message if one or both are incorrect; the error
# message should not tell the user which item is incorrect.

# my_answer =>

PASSWORD = "widward"
USER = "Master Control Program"

loop do
  puts "Enter username: "
  user = gets.chomp
  puts "Enter password: "
  password = gets.chomp
  break if password == PASSWORD && user == USER
  puts "Invalid input. Please try again..."
end 
puts "Welcome #{USER}!"
