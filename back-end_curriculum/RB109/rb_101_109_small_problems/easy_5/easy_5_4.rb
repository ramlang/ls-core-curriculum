# Given a string of words separated by spaces, write a method that takes this string of words and returns a string in which the first and last letters of every word are swapped.

# You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string where the first and last letters of each word are swapped
# problem domain = separating each word in the string, possibly spliting the word into a character array, identifying the first and last letters of the word, swtiching the two characters, joining the word back together, joining the string back together, return the string
# explicit reqs = every word contains one letter, string will always contain one word, a string will be provided, return a string
# implicit reqs = 

# mental model = given string, split string using spaces into an array, store the string reversed, replaced the old string with the new values using gsub or based on index, repeat this for every word by iterating over the array, return the array, join the words into a string

# Examples/ Test Cases ---
# swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# swap('Abcde') == 'ebcdA'
# swap('a') == 'a'

# Data Structures ---
# array, iterator, reverse method

# Algorithms ---
# GET string
# split string into an array
# iterate over the string using map or collect
# SET a reversed word variable
# replaced the character at index[0] of the word with index[0] of reversed word
# repeat for chracter at index[word.length -1]
# make sure the elements of the array are mutated
# rejoin the words together
# return string

# Code with Intent ---
def swap(string)
  array = string.split(' ').map! do |word|
    reversed_word = word.reverse
    word[0] = reversed_word[0]
    word[word.length - 1] = reversed_word[word.length - 1]
    word
  end
  array.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'


# example_of_answer =>
def swap_first_last_characters(word)
  word[0], word[-1] = word[-1], word[0]
  word
end

def swap(words)
  result = words.split.map do |word|
    swap_first_last_characters(word)
  end
  result.join(' ')
end

# further_exploration =>
def swap_first_last_characters(a, b)
  a, b = b, a
end

def swap(words)
  result = words.split.map do |word|
    swap_first_last_characters(word[0], word[-1])
  end
  result.join(' ')
end

# p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# p swap('Abcde') == 'ebcdA'
# p swap('a') == 'a'