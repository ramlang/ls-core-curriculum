# Question 8
# Find the length of the longest substring in the given string that is the same in reverse.
# As an example, if the input was "I like racecars that go fast", the substring (racecar) length would be 7.

# Example:
# "a" => 1
# "aab" => 2
# "abcde" => 1
# "zzbaabcd" => 4
# "" => 0
# p longest_palindrome("a") == 1
# p longest_palindrome("aa") == 2
# p longest_palindrome("baa") == 2
# p longest_palindrome("aab") == 2
# p longest_palindrome("baabcd") == 4
# p longest_palindrome("baablkj12345432133d") == 9

# PROBLEM:
# input = string
# output = integer (length of longest substring that is the same in reverse)

# >> rules:
# - substring must be the longest
# - lowercase only based on testcase arguments
# - includes numerical characters

# >> tasks:
# - get substrings
# - compare substrings to reversed self
# - organize by size
# - return longest substring
# - store substrings or sort as obtaining

# EXAMPLES:
# - see above

# DATA STRUCTURE:
# - String, Array

# ALGORITHM:
# HIGH LEVEL 
# Turn string into an array. Obtain the substring by iterating of the range of the index from 0 to the last element and then from that iterator to the last element. Check if the substring is the same reverse, add to substrings array. Sort the substrings array by size and return the largest substring size.

# PSUEDOCODE
# CALL chars to turn string into an array
# SET largest substring variable
# GET substrings
# >> iterate over range 0 to array size - 1
# >> iterate using the iterator to the array.size - 1
# check if the substring is the same reversed
# if true then reassign largesst substring 

def longest_palindrome(string)
  chr_array = string.chars
  length = chr_array.size - 1
  longest = 0
  
  (0..length).each do |index1|
    (index1..length).each do |index2|
      substring = string[index1..index2]
      if substring == substring.reverse && longest < substring.length
        longest = substring.length
      end
    end
    
  end
  longest
end
  
p longest_palindrome("a") == 1
p longest_palindrome("aa") == 2
p longest_palindrome("baa") == 2
p longest_palindrome("aab") == 2
p longest_palindrome("baabcd") == 4
p longest_palindrome("baablkj12345432133d") == 9