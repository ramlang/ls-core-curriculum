# Question 2
# Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.
# Example 1:
# Input: 'abab'
# Output: True
# Explaination: It's the substring 'ab' twice

# Example 2:
# Input: 'aba'
# Output: False

`p repeated_substring_pattern("abab") == true`
`p repeated_substring_pattern("aba") == false`
`p repeated_substring_pattern("aabaaba") ==false`
`p repeated_substring_pattern("abaababaab") == true`
`p repeated_substring_pattern("abcabcabcabc") == true`

# PROBLEM
# input = string
# output = boolean

# >> rules:
# - lowercase english letters only
# - non empty string given

# >> tasks:
# - get substring list
# - check size of string
# - get size of substring
# - divde sizes to get factor
# - multiply substring by factor and compare to original string

# EXAMPLES
# -see above

# DATA STRUCTURE
# - Array

# ALGORITHM
# HIGH LEVEL:
# Create a substrigns array to store the substring values. Iterate over the original string. Create a substring variable that is a range from index 0 to the current index. Iterate over that range from the zero index to the current index to get the substring. If the substring already exists do no add to the results array. Get the size of the original string and the size of each substring. Multiple the substring by the factor needed to get original substring legnth and compare to original string. Return the result if true

def repeated_substring_pattern(string)
  substring_array = []
  string_array = string.chars
  
  string_array.each_with_index do |chr1, ind1|
    substrings = string_array[ind1..-1]
    substrings.each_with_index do |chr2, ind2|
      substring_array.push(substrings[0..ind2].join)
    end
  end
  
  string_length = string.length
  substring_array.uniq.each do |substring|
    substring_length = substring.length
    
    factor = string_length / substring_length
    
    return true if (substring * factor) == string unless substring == string
  end
  false
end

p repeated_substring_pattern("abab") == true
p repeated_substring_pattern("aba") == false
p repeated_substring_pattern("aabaaba") ==false
p repeated_substring_pattern("abaababaab") == true
p repeated_substring_pattern("abcabcabcabc") == true
