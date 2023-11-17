# Write a method that takes a string as an argument and returns a new string in which every uppercase letter is replaced by its lowercase version, and every lowercase letter by its uppercase version. All other characters should be unchanged.

# You may not use String#swapcase; write your own version of this method.
# swapcase('CamelCase') == 'cAMELcASE'
# swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string
# problem domain = switch the case of each character in a given string
# explicit reqs = cannot use #swapcase method, all other characters should be unchanged, returns a new string
# implicit reqs = 

# mental model = break up the string into individual characters, look at each character, determine if it is in upper or lowercase then change to the opposite, repeat until all characters have been changed, do not change non alpha characters

# Examples/ Test Cases ---
# swapcase('CamelCase') == 'cAMELcASE'
# swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# Data Structures ---
# input = string
# inbetween = array
# output = string
# methods = iterator, conditional, uppercase, downcase

# Algorithms ---
# separate the characters of the string
# examine each character to determine the case
# if the case is uppercase change to downcase
# else if the case is downcase change to uppercase
# join the array back together
# return the string

# Code with Intent ---
LOWERCASE_ALPHABET = ('a'..'z').to_a
UPPERCASE_ALPHABET = ('A'..'Z').to_a

def swapcase(string)
  word_array = string.split.map do |word|
    char_array = word.chars.map do |letter|
      if LOWERCASE_ALPHABET.include?(letter)
        letter.upcase
      elsif UPPERCASE_ALPHABET.include?(letter)
        letter.downcase
      else
        letter
      end
    end
    char_array.join
  end
  word_array.join(' ')
end

# Could have used chars by itself? Why use spit and chars? Be careful of methods and nested iterators next time. Redunant code.

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'


# example_of_answer =>
def swapcase(string)
  characters = string.chars.map do |char|
    if char =~ /[a-z]/
      char.upcase
    elsif char =~ /[A-Z]/
      char.downcase
    else
      char
    end
  end
  characters.join
end