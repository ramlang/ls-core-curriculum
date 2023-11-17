# Question 1
# Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need you include that character three times in the final answer.
 
# common_chars(['bella', 'label', 'roller']) == ['e', 'l', 'l']
# common_chars(['cool', 'lock', 'cook']) == ['c', 'o']
# common_chars(['hello', 'goodbye', 'random']) == ['o']
# common_chars(['aabbaaaa', 'ccddddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) == []

# return an array of numbers from return count
# use smallest number and multiply by character and add to array

# PROBLEM:
# input = array of strings
# output = array of characters

# >> rules:
# - lowercase characters only
# - duplicates needs to be included
# - if there are no common characters return an empty array

# >> task:
# - count the characters in a string
# - count how many element include the character in the array
# - store results in an array
# - iterating
# - turning string into an array

# EXAMPLES: 
# see above

# DATA STRUCTURE:
# - Array, Strings

# ALGORITHM:
# HIGH LEVEL:
#  Using the first string element iterate through the characters of the string using map. Count the occurences of the character in each string and return as an array. Examine the array after sorting and use the first element of the array as the number of characters present in all strings. Take the count add the characters to the results array that many times. Repeat for next character, until complete. Return the array

# PSUEDOCOD:
# define the method and parameter
# Take the first string element of the array and turn into an array
# iterate through that array and iterate through the array object
# return an array that gives the count of the character for each string
# take the array and sort it
# take the first element and assign it to the count variable
# multipy that by the single character array and add to result.
# repeat

def common_chars(array)
  result = []
  
  array[0].chars.each do |chr|
    next if result.last == chr 
    
    occurences = array.map { |string| string.count(chr) }
    max_count = occurences.sort[0]
    
    result.concat([chr] * max_count)
  end
  
  result
end

p common_chars(['bella', 'label', 'roller']) #== ['e', 'l', 'l']
p common_chars(['cool', 'lock', 'cook']) #== ['c', 'o']
p common_chars(['hello', 'goodbye', 'random']) #== ['o']
p common_chars(['aabbaaaa', 'ccddddddd', 'eeffee', 'ggrrrrr', 'yyyzzz']) #== []

# TIME: 17 min


# watch_others_code answer =>
def common_chars(array)
  array = array.map { |word| word.dup }
  chars = array.shift.chars
  
  chars.select do |char|
    array.all? { |word| word.sub!(char, "") }
  end
end
  

  