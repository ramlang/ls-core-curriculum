# Given a string that consists of some words (all lowercased) and an assortment of non-alphabetic characters, write a method that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (the result should never have consecutive spaces).

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string with all non-aplhabetic characters replaced with spaces
# problem domain = removing characters other than A-Z and a-z, replacing the removed characters with spaces, removing multiple spaces in a row and preserving single spaces within the string
# explicit reqs = the strings provided will contain lowercase characters only, result should never have consecutive spaces
# implicit reqs = spaces should exist at the beginning or end of strings if there are characters present there as well

# mental model = separate into an array, replace characters that are not a-z with spaces. Use the uniq method to delete any duplicate spaces, use join to rejoin the string back together

# Examples/ Test Cases ---
# cleanup("---what's my +*& line?") == ' what s my line '

# Data Structures ---
# array
# between
# range

# Algorithm ---
# split the string into an array
# iterate over the array
# if chars are not included in ['a'..'z'] then replace with whitespace ' '
# iterate over the array again
# if chars is a space
#  if char index + 1 does not equal ['a'-'z'] then delete the char at index + 1
# if the char is a - z return value
# after extra spaces are deleted then join array back together.

# Code with Intent ---
def cleanup(string)
  new_array = []
  index = 0
  char_array = string.chars.map! do |chr|
    if chr.between?('a', 'z')
      new_array << chr
    else
      new_array << ' '
    end
  end
  new_array.join('').squeeze(' ')
end

p cleanup("---what's my +*& line?") == ' what s my line '


# correct_answer =>
ALPHABET = ('a'..'z').to_a

def cleanup(text)
  clean_chars = []

  text.chars.each do |char|
    if ALPHABET.include?(char)
      clean_chars << char
    else
      clean_chars << ' ' unless clean_chars.last == ' '
    end
  end

  clean_chars.join
end

# unless statement takes care of the consecutive spaces if the last character << to the clean chars is a space then no new spaces will be added. It is using the last method on the new array not the old array

# example_of_answer =>
def cleanup(text)
  text.gsub(/[^a-z]/, ' ').squeeze(' ')
end

# selects characters that are NOT tha alphabet and replaces them with string, squeeze method takes care of the consecutive strings

