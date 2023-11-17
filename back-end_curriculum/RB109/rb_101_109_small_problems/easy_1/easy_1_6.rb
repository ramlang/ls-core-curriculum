# Write a method that takes one argument, a string containing one or more words,
# and returns the given string with words that contain five or more characters
# reversed. Each string will consist of only letters and spaces. Spaces should
# be included only when more than one word is present.

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string with words of 5 OR MORE characters reversed
# problem domain = separate the words, count number of characters, reverse the
# characters of the words that are 5 characters or more
# implicit requirements = no punctuation
# explicit requirements = only include spaces when more than one word is present,
# returns variable does not print anything

# mental_model = Given a string split the words into an array. Iterate over the
# array and if the word length is greater than 5 reverse the word permanently.
# Join the array with spaces and print the new string.

# Examples/Test Cases ---
=begin
puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS
=end

# Data Strcuture ---
# Array, if/else, iterator, join

# Algorithm ---
# START
# Split string into an array of words
# IF word length >= 5
#   reverse the word
# Join the array with spaces
# END

# Code with intent ---
def reverse_words(string)
  array = string.split
  array.each do |word|
    if word.length >= 5
      word.reverse!
    end
  end
  array.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS

# example_of_answer =>
def reverse_words(string)
  words = []

  string.split.each do |word|
    word.reverse! if word.size >= 5
    words << word
  end

  words.join(' ')
end