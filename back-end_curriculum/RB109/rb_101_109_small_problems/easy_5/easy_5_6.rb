# Write a method that takes a string with one or more space separated words and returns a hash that shows the number of words of different sizes.

# Words consist of any string of characters that do not include a space.

# my_answer =>

# PEDAC

# Problem ---
# input is a string of words
# output is a hash
# problem domain = determining each indiviudal word, determining length of each individual word and storing the varying lengths, incrementing a hash values correlated to those legnths, only returning a hash with the relevant lengths OR only populating a hash with relevant lengths from the beginning, return hash
# explicit reqs = word is a string without spaces, returns a hash
# implicit reqs = no data validation is needed

# mental model = split the string into an array, set as a new array, iterate over the new array and convert the strings into sub arrays comprised of string#length and 0. Get rid of duplicates. Convert to hash set as new variable. Iterate over the original array, and if the string length is equal to a key within the hash, increment the value by 1.

# Examples/ Test Cases ---
# word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# word_sizes('') == {}

# Data Structures ---
# array, hash, iterator

# Algorithms ---
# given string split into an array
# SET array words
# iterate over the array using map to get the legnth of each word
# delete duplicates
# use the Array#to_h method and use legnth of values as the key and 0 as the value
# iterate back over the original array if the length of the words in the string is a key in the hash then increment the value of the key by one
# return the new hash

# Code with Intent ---
def word_sizes(string)
  word_array = string.split.map { |word| word.length }.uniq
  word_size_hash = word_array.to_h { |key| [key, 0] }
  string.split.each do |word|
    if word_size_hash.has_key?(word.length)
      word_size_hash[word.length] += 1
    end
  end
  word_size_hash
end
  
p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}


# example_of_answer =>
def word_sizes(words_string)
  counts = Hash.new(0)
  words_string.split.each do |word|
    counts[word.size] += 1
  end
  counts
end

# further_exploration =>
# Take some time to read about Hash::new to learn about the different ways to initialize a hash with default values.