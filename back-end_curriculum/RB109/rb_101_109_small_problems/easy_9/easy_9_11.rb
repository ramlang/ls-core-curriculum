# Given the array...
# words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
#           'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
#           'flow', 'neon']
# # Write a program that prints out groups of words that are anagrams. Anagrams are words that have the same exact letters in them but in a different order. Your output should look something like this:
# ["demo", "dome", "mode"]
# ["neon", "none"]
# #(etc)

# my_answer =>

# PEDAC

# Problem ---
# input is an array
# ouput is multiple arrays
# problem domain = identifying anagrams, selecting words from the list is they meet criteria, returning multiple arrays
# explicit reqs = anagrams are words with the same letters but in different order
# implicit reqs = only this array is provided

# mental model = iterate over the array, split one word at a time into an array, determine whether other words within the array contain similar letters, create a new array and delete values included, repeat for remaining words within the array

# Examples/ Test Cases ---
# words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
#           'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
#           'flow', 'neon']
# Write a program that prints out groups of words that are anagrams. Anagrams are words that have the same exact letters in them but in a different order. Your output should look something like this:
# ["demo", "dome", "mode"]
# ["neon", "none"]
#(etc)

# Data Strcutures ---
# input = array
# inbetween = array
# output = multiple arrays
# methods = iterators, include?

# Algorithm ---
# take one word in the array at a time
# split it into characters
# compare other words within the array to the characters
# if they contain all the same characters then add to the array
# delete the word
# continue until all words have been examined
# select the next word in the array
# split into characters are repeat
# return all the different arrays of anagrams

# Code with Intent ---
def anagrams(array)
  counter = 0
  loop do
    break if counter >= array.size
    word = array[counter]
    list = is_word_anagram?(word, array)
    print "#{list}\n"
    array.delete_if { |string| list.include?(string) }
    counter += 1
  end
end
  
def is_word_anagram?(word, array)
  letter_array = word.chars.sort
  array.select { |string| letter_array == string.chars.sort }
end
  
  
  words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']
anagrams(words)


# correct_answer =>
result = {}

words.each do |word|
  key = word.split('').sort.join
  if result.has_key?(key)
    result[key].push(word)
  else
    result[key] = [word]
  end
end

result.each_value do |v|
  puts "------"
  p v
end

