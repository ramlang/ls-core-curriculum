password = nil

def set_password
  puts 'What would you like your password to be?'
  new_password = gets.chomp
  password = new_password  # <= could technically return new_password; reassignment serves no purpose here
end

def verify_password(password)  # <= added parameter so the password argument can be passed in
  puts '** Login **'
  print 'Password: '
  input = gets.chomp

  if input == password
    puts 'Welcome to the inside!'
  else
    puts 'Authentication failed.'
  end
end

if !password
  password = set_password  # <= the set_password method does not affect the local vairable, must reassign 
end

verify_password(password)

# The program throws an error. What is the problem and how can you fix it? Once you get the program to run without error, does it behave as expected? Verify that you are able to log in with your new password.

# my_answer =>
# The method verify_password does not have the variable password defined within the method itself. You would have to pass the object the variable is referencing by allowing the method to have a parameter. 