# Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string, with two different options
# problem domain = adding a name to a string and changing a string to all uppercase.
# explicit reqs = accepts a string, mutates string if ! is entered after name
# implicit reqs = what if the exclaimation point was in the middle of the name? Or just an exclaimation was entered? Assume only strings are entered, no validation.

# mental model = accept a string, analyze string to determine if '!' is present. If not then return a greeting to the user. If it is present then return a greetig in all caps

# Examples/ Test Cases ---
# What is your name? Bob
# Hello Bob.

# What is your name? Bob!
# HELLO BOB. WHY ARE WE SCREAMING?

# Data Structures
#possibly no data structures used
# include method? or separate into an array? analyze the last element?

# Algorithm
# GET user name
# turn name into an array of characters
# IF last character in the array is '!' then return message in all uppercase
# ELSE return normal greeting

# Code with Intent ---
print "What is your name? "
user_name = gets.chomp

if user_name.end_with?("!")
  puts "HELLO #{user_name.upcase.delete("!")}! WHY ARE WE SCREAMING?"
else
  puts "Hello #{user_name}"
end


# example_of_answer =>
print 'What is your name? '
name = gets.chomp

if name[-1] == '!'
  name = name.chop
  puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING?"
else
  puts "Hello #{name}."
end

# further_exploration =>
# Try modifying our solution to use String#chomp! and String#chop!
print 'What is your name? '
name = gets.chomp!

if name[-1] == '!'
  name = name.chop!
  puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING?"
else
  puts "Hello #{name}."
end