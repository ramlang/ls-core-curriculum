# Question 5
# Write a method to find the longest common prefix string amongst an array.
# If there is no common prefix, return an empty string "".

# Example 1:
# Input: ['flower', 'flow', 'flight']
# Output: "fl"

# Example 2:
# Input: ['dog', 'racecar', 'car']
# Output: ""
# Explaination: There is no common prefix among the input strings

# Note: All given inputs are in lowercase letters a-z

# PROBLEM:
# input = an array of strings
# output = a strign (common prefix)

# >> rules:
# - to return an empty string if no common prefix
# - lowercase characters only

# >> tasks:
# - iterate over the array
# - iterate over the string
# - compare characters or use an all method to see if every element meets the criteria
# - keep track of the common prefix characters
# - return an empty string if there is no common characters

# EXAMPLES:
# - see above

# DATA STRUCTURE:
# - Array

# ALGORITHM
# HIGH LEVEL
# Take the first element of the array and make it into an array of letters. Iterate over the array of letters and check if each letter added to the previously checked letters are a pattern that all the elements with the array start with.

# PSUEDOCODE
# Initialize first element variable
# initialize a prefix variable
# use #chars to turn into an array of letters
# Iterate over the array of letters
# Set the prefix variable value to the prefix plus the current iteration
# check if all the elements within the array start with those characters
# if all are false then return an empty array
# otherwise return the prefix

def common_prefix(array)
  letters = array[0].chars
  prefix = ''
  
  letters.select do |letter|
    prefix += letter
    array.all? { |word| word.start_with?(prefix) }
  end.join
end

p common_prefix(['flower', 'flow', 'flight'])# == "fl"
p common_prefix(['dog', 'racecar', 'car']) == ""
p common_prefix(['interspecies', 'interstellar', 'interstate']) == "inters"
p common_prefix(['throne', 'dungeon']) == ""
p common_prefix(['throne', 'throne']) == "throne"