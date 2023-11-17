# Write a method that takes an array of strings, and returns an array of the same string values, except with the vowels (a, e, i, o, u) removed.
# remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# my_answer =>

# PEDAC

# Problem ---
# input is an array of strings
# output is an array of strings with vowels removed
# problem domain = identifying where the vowels are in the strings of the array, deleteing the vowels, return the array
# explicit reqs =  array contains strings only, return is also an array, the vowels to be removed are a e i o u (y is not included) 
# implicit reqs = is a new array or the same array being returned, no data validation needed, format using %w with two or more elements and those no empty strings

# mental model = look at every element within the array. Within that element examine every character to identify the vowels that are present. Delete any vowels. Return the element, and then return the array. If the array contains an empty string or less than two elements must return using #[] method instead of %w

# Examples/ Test Cases ---
# remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# Data Structures ---
# input = array
# inbetween = array within an array
# output = array
# methods = #select or #map to itertate, String#chars to separate the strings into characters of an array, Array#join to rejoin the character back together, #scan to examine the string, #keep_if

# Algorithms ---
# Given array
# Use select to iterate over the array
# for each element in the array, scan to find all characters that are not vowels
# join the array
# if the array contains empty string or less than two elements
# return array #[]
# else return
# %w

# Code with Intent ---
def remove_vowels(array)
  array.map do |string|
    string.scan(/[^AEIOUaeiou]/).join
  end
end

puts remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
puts remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
puts remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']


# example_of_answer =>
def remove_vowels(strings)
  strings.map { |string| string.delete('aeiouAEIOU') }
end
