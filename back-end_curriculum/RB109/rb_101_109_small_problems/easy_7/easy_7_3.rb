# Write a method that takes a single String argument and returns a new string that contains the original value of the argument with the first character of every word capitalized and all other letters lowercase.

# You may assume that words are any sequence of non-blank characters.
# word_cap('four score and seven') == 'Four Score And Seven'
# word_cap('the javaScript language') == 'The Javascript Language'
# word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string
# problem domain = downcasing all the words and then capitalizing the first letter of each word, how to deal with quotation marks in the thrid example, 
# explicit reqs = returns a new string, first character of everyword captialized and all others lowercase
# implicit reqs = if a word is surrounded by quotes the word is not captialized

# mental model = separate the words, identify that each word starts with an alphanumeric character, if it does not skip that word and go onto the next iteration, else downcase and captialize the word, join the words together, return the new string

# Examples/ Test Cases ---
# word_cap('four score and seven') == 'Four Score And Seven'
# word_cap('the javaScript language') == 'The Javascript Language'
# word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# Data Structures ---
# input = string
# inbetween = array
# output = new string
# methods = #capitalize, #downcase, #join, iterator, conditional

# Algorithm ---
# separate the words within the string
# look at each individual word
# if the word does not start with a A-Z or a-z character skip it
# else downcase each word and then captialize each word
# recombine the words together to form the string
# return the new string

# Code with Intent ---
ALPHABET = ('A'..'Z').to_a + ('a'..'z').to_a

def word_cap(string)
  new_string = string.split.map do |word|
    if ALPHABET.include?(word[0])
      word.downcase.capitalize!
    else
      word
    end
  end
  new_string.join(' ')
end

# Read method documentation! Capitalize lowercases everything but the first letter so validating the first letter was not a quote was not necessary. Downcase turned the quoted word into nil, but was not needed in the first place!!!

p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'


# example_of_answer =>
def word_cap(words)
  words_array = words.split.map do |word|
    word.capitalize
  end
  words_array.join(' ')
end

# example_of_answer =>
def word_cap(words)
  words.split.map(&:capitalize).join(' ')
end

# further_exploration =>
# Ruby conveniently provides the String#capitalize method to capitalize strings. Without that method, how would you solve this problem? Try to come up with at least two solutions.