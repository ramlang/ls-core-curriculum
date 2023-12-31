# Write a method that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as it does backwards. The return value should be arranged in the same sequence as the substrings appear in the string. Duplicate palindromes should be included multiple times.

# You may (and should) use the substrings method you wrote in the previous exercise.

# For the purposes of this exercise, you should consider all characters and pay attention to case; that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters are not palindromes.
# palindromes('abcd') == []
# palindromes('madam') == ['madam', 'ada']
# palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is an array of palindromes
# problem domain = break each string/word into substrings, substrings should be of varying lengths and iterate through the entire word, should iterate and end in the middle, select substrings that are the same forwards and backwards, return array
# explicit reqs = the return value should be arranged in the same sequence the substrings appear in the sentence, duplicate palindromes should be included, consider all characters and pay attention to case
# implicit reqs = no palindromes returns an empty array

# mental model = compare index 0 of the substring to index -1 of the substring and if the are equal keep creating substrings otherwise skip to next index, next look at index 1 and index -2 if they are equal return the value each iteration until they no longer become equal, store values in array

# Examples/ Test Cases ---
# palindromes('abcd') == []
# palindromes('madam') == ['madam', 'ada']
# palindromes('hello-madam-did-madam-goodbye') == [
#   'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
#   'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
#   '-madam-', 'madam', 'ada', 'oo'
# ]
# palindromes('knitting cassettes') == [
#   'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
# ]

# Data Structures ---
# input = string
# inbetween = array
# output = ordered array
# methods = previous problem methods, equality opertors, conditional statements

# Algorithms ---
# iterate over the array generated by substrings method
# compare each substring to the reversed version of itself
# if they are equal and larger than a single character, add the word to the array
# return the array



def leading_substrings(string)
  result = []
  substring = ''
  string.chars.each do |char|
    result << substring += char
  end
  result
end

def substrings(string)
  array_of_substrings = []
  0.upto(string.size - 1) do |index|
    substring = string[index..string.size]
    array_of_substrings << leading_substrings(substring)
  end
  array_of_substrings.flatten
end

def palindromes(string)
  words = []
  substrings(string).select do |substring|
    if substring == substring.reverse && substring.size > 1
      words << substring
    end
  end
  words
end

# did not need the empty array? Because select method returns a new collection. Could refactor to just include the conditional statement and the substrings that meet that condition will be included in the method return

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]


# example_of_answer =>
def palindromes(string)
  all_substrings = substrings(string)
  results = []
  all_substrings.each do |substring|
    results << substring if palindrome?(substring)
  end
  results
end

def palindrome?(string)
  string == string.reverse && string.size > 1
end

# further_exploration =>
# Can you modify this method (and/or its predecessors) to ignore non-alphanumeric characters and case? Alphanumeric characters are alphabetic characters(upper and lowercase) and digits.