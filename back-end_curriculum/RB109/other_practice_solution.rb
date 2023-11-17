# Problem
# input = string
# output = longest substring in alphabetical order (duplicate char okay)

# problem domain =
# - create substrings from given string
# - compare substrings to sorted (alphabetic) version of substring
# - if equal store substring for later use otherwise skip
# - iterate over substrings array and identify the longest one
# - determine the length of a substring
# - return longest substring

# algorithm
# >> create a separate method to acquire alphabetical substrings
# >> intitialize a results array
# >> change the string into an array
# >> iterate over the array with index
# >> create substring variable with index 0 and index of iteration
# >> iterate over substrings to create sub-substring
# >> use index of iteration and -1 as range
# >> compare the sub-substring to itself sorted to determine if it is in the correct order
# >> if alphabetical store sub-substring in result array
# >> return array

# >> main method
# >> obtain substrings from separate method
# >> initialize longest substring to empty string
# >> iterate over substring array
# >> compare substring lengths and find longest one
# >> set longest_substring equal to substring if substring length is greater
# >> skip if not greater than
# >> return longest substring

def longest(string)
  substring_array = alphabetical_substrings(string)
  longest_substring = ''
  
  substring_array.each do |substring|
    if longest_substring.length < substring.length
      longest_substring = substring
    else
      next
    end
  end
  longest_substring
end


def alphabetical_substrings(string)
  result= []
  
  string.chars.each_with_index do |char, ind|
    substring = string[0..ind]
    
    substring.chars.each_with_index do |char2, ind2|
      if substring[ind2..-1].chars == substring[ind2..-1].chars.sort
        result << substring[ind2..-1]
      end
    end
  end
  result
end
  
  
p longest('asd') == 'as'
p longest('nab') == 'ab'
p longest('abcdeapbcdef') ==  'abcde'
p longest('asdfaaaabbbbcttavvfffffdf') == 'aaaabbbbctt'
p longest('asdfbyfgiklag') == 'fgikl'
p longest('z') == 'z'
p longest('zyba') == 'z'