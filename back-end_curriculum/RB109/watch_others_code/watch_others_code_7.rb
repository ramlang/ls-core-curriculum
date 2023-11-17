# Question 7
# Write function scramble(str1, str2) that returns true if a porition of str1 characters can be rearraned to match str2, otherwise return false.
# For example:
# str1 is 'rkqodlw' and str2 is 'world' the output should return true
# str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true
# str1 is 'katas; and str2 is 'steak' should return false

# Only lowercase letters will be used (a-z). No punctuation or digits will be included.

# p scramble('javaass', 'jjss') == false
# p scramble('rkqodlw', 'world') == true
# p scramble('cedewaraaossoqqyt', 'codewars') == true
# p scramble('katas', 'steak') == false
# p scramble('scriptjava', 'javascript') == true
# p scramble('scriptingjava', 'javascript') == true

# PROBLEM:
# input = two strings
# output = boolean

# >> rules:
# - only lowercase letters
# - no punctuation or digits
# - return true if the characters of str1 can be rearranged to form str2

# >> tasks:
# - iterate over characters of string
# - count the number of characters
# - count the total size of the string
# - keep running total of the number of characters left

# EXAMPLES:
# - see above

# DATA STRUCTURE:
# - array, string, counter

# ALGORITHM:
# HIGH LEVEL
# Get the size of both strings. Take the letters in an array from the first string and count how many of each are present in both words. Subtract that number from their respective sizes. If str2 does not equal zero by the end of the iterating then return false, or if it is negative then return false.

# PSUEDOCODE
# SET letters variable to str1 turned into an array and use uniq
# GET str1 length
# GET str2 length
# iterate over letters array
# count how many letters are in str1 and str2 for every iteration
# SUBTRACT the number from the total
# IF str2 is greater than or less than zero then return false

def scramble(str1, str2)
  letters = str1.chars.uniq
  str1_length = str1.length.to_i
  str2_length = str2.length.to_i
  
  letters.each do |letter|
    return false if str1.count(letter) < str2.count(letter)
    str2_length -= str2.count(letter)
  end
  str2_length == 0 ? true : false
end

p scramble('javaass', 'jjss') == false
p scramble('rkqodlw', 'world') == true
p scramble('cedewaraaossoqqyt', 'codewars') == true
p scramble('katas', 'steak') == false
p scramble('scriptjava', 'javascript') == true
p scramble('scriptingjava', 'javascript') == true