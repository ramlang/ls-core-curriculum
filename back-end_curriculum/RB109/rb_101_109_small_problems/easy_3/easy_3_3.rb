# Write a program that will ask a user for an input of a word or multiple words and give back the number of characters. Spaces should not be counted as a character.

# my_answer =>

# PEDAC

# Problem ---
# input string
# output integer; count of characters in string
# problem domain = counting words
# explicit reqs = accept multiple words, do not count spaces as characters
# implicit reqs = no validation of characters needed, count puncuation

# mental model = get string from user. Split string into an array based on spaces, then split the strings into characters array, or join the string and then count the length? return the integer and print the result.

# Examples/ Test Cases ---
# Please write word or multiple words: walk
# There are 4 characters in "walk".

# Please write word or multiple words: walk, don't run
# There are 13 characters in "walk, don't run".

# Data Structure ---
# possible use of an array, join method, and length method

# Algorithm ---
# GET string from user
# SET string to variable
# split string into array without including spaces
# join string back together
# count characters
# PRINT results

# Code with Intent ---
print "Please write a word or sentence >> "
words = gets.chomp
character_count = words.split.join.length
puts "There are #{character_count} characters in \"#{words}\"."


# example_of_answer =>
print 'Please write word or multiple words: '
input = gets.chomp
number_of_characters = input.delete(' ').size
puts "There are #{number_of_characters} characters in \"#{input}\"."
