# Write a method that takes a string, and returns a new string in which every consonant character is doubled. Vowels (a,e,i,o,u), digits, punctuation, and whitespace should not be doubled.
# double_consonants('String') == "SSttrrinngg"
# double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# double_consonants("July 4th") == "JJullyy 4tthh"
# double_consonants('') == ""

# my_answer =>

# PEDAC

# Problem ---
# input os a string
# output is a new string
# problem domain = double every consonant, exclude all other characters including numbers, vowels, whitespace and puncutation
# explicit reqs = returns a new string, only consonants are doubled
# implicit reqs = empty string returns an empty string

# mental model = examine each character within the string, if it is a consonant double it, if it is not a consonant then skip to the next iteration, repeat until entire string has been examined

# Examples/ Test Cases ---
# double_consonants('String') == "SSttrrinngg"
# double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
# double_consonants("July 4th") == "JJullyy 4tthh"
# double_consonants('') == ""

# Data Structures ---
# input = string
# inbetween = array 
# output = new string
# methods = iterator, conditional, CONSTANT for alphabet, Array#join

# Algorithm ---
# separate string into characters
# iterate over characters
# if a character is not included in the alphabet return it
# if a character is included and is not a vowel then double it
# otherwise return it
# join the string
# return new string

ALPHABET = ('A'..'Z').to_a + ('a'..'z').to_a
VOWELS = ['a', 'e', 'i', 'o', 'u']

def double_consonants(string)
  new_string = string.chars.map do |char|
    if ALPHABET.include?(char.downcase)
      VOWELS.include?(char.downcase) ? char : char * 2
    else
      char
    end
  end
  new_string.join
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""


# example_of_answer =>
CONSONANTS = %w(b c d f g h j k l m n p q r s t v w x y z)

def double_consonants(string)
  result = ''
  string.each_char do |char|
    result << char
    result << char if CONSONANTS.include?(char.downcase)
  end
  result
end