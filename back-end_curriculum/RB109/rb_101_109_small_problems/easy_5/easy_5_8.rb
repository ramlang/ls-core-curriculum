# Write a method that takes an Array of Integers between 0 and 19, and returns an Array of those Integers sorted based on the English words for each number:

# zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

# my_answer =>

# PEDAC

# Problem ---
# input is an array of integers
# output is another array with the integers in a different order
# problem domain = converting each number to english equivalent, taking the english words and sorting them aplhabetically, converting the array back into integers, returning an array of sorted integers
# explicit reqs = integer is between 0 - 19, return an array of integers
# implicit reqs = array of integers is always provided, several words start with the same letters so the next character would need to be anaylzed as well

# mental model = convert each number to english equivalent, sort the words aplhabetically, convert the words back into integers, return the array
# use a hash to find the integer key and its associated value an english string
# create a new array made of the hash values
# use the sort method to sort the english words aplhanetically
# iterate through the array again and replace each word with its key, keeping the current order the same
# return the integer array

# Examples/ Test Cases ---
# alphabetic_number_sort((0..19).to_a) == [
#   8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
#   6, 16, 10, 13, 3, 12, 2, 0
# ]

# Data Structures ---
# input = range turned a array
# inbetween = hash, array
# output = array
# iterator or loop = iterator 
# methods = Array#sort String#to_i

# Algortihms ---
# given an array
# iterate over the array whilst creating a new array
# fill the new array with values from the original array
# Once ordered conver the new array back into inetegers while maintaining the order
# return the new array

# Code with Intent ---
NUMBERS_TO_WORDS = {
  0 => 'zero', 1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four', 5 => 'five',
  6 => 'six', 7 => 'seve', 8 => 'eight', 9 => 'nine', 10 => 'ten', 11 => 'eleven',
  12 => 'twelve', 13 => 'thirteen', 14 => 'fourteen', 15 => 'fifteen',
  16 => 'sixteen', 17 => 'seventeen', 18 => 'eighteen', 19 => 'nineteen'
}

def alphabetic_number_sort(array)
  words_array = array.map { |num| NUMBERS_TO_WORDS[num] }.sort
  numbers_array = words_array.map { |num| NUMBERS_TO_WORDS.key(num) }
end

p alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]


# correct_answer =>
NUMBER_WORDS = %w(zero one two three four
                  five six seven eight nine
                  ten eleven twelve thirteen fourteen
                  fifteen sixteen seventeen eighteen nineteen)

def alphabetic_number_sort(numbers)
  numbers.sort_by { |number| NUMBER_WORDS[number] }
end