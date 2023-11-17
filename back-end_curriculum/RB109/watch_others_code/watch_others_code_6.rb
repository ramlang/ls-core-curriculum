# Question 6
# Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.


# p substring_test('Something', 'Fun') == false
# p substring_test('Something', 'Home') == true
# p substring_test('Something', '') == false
# p substring_test('', 'Something') == false
# p substring_test('BANANA', 'banana') == false
# p substring_test('test', 'lllt') == false
# p substring_test('', '') == false
# p substring_test('1234567', '541265') == true
# p substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') == true

# PROBLEM:
# input = two strings
# output = boolean

# >> rules:
# - return true if substring is found in both strings
# - return false if no substrings match both strings
# - substrings must be longer than a single character
# - case matters

# >> tasks:
# - iterate through a string
# - obtain substrings of word
# - see if substring is included in other string
# - return true or false
# - account for case

# EXAMPLES:
# - see above

# DATA STRUCTURES:
# - Arrays

# ALGORITHMS:
# HIGH LEVEL
# Use ranges to iterate over the string and obtain substring values. Get the size of the string to determine the index. Use the #times method to iterate through a range of values that represent index1. From index1 to the size of the string use #times again to iterate through the index values. Then initialize a substring variable and use the string with the new index values to create a substring at the current iteration. Look at the substring and determine if it is bigger than 1 character and also if it is included in the other substring. Return true otherwise return false

# PSUEDOCODE
# GET size of string using #length
# SET range between 0 and string_size
# TIMES method to iterate over numerical values that represent index1
# SET range between index1 and string_size
# TIMES method to iterate over numerical values that represent index 2
# GET the range of characters from string using #[]
# determine if the substring is greater than 1
# determine if the substring is included in the second string
# return true
# otherwise return false


def substring_test(string1, string2)
  length = string1.length - 1
  
  (0..length).each do |index1|
    (index1..length).each do |index2|
      substring = string1[index1..index2]
      if substring.length > 1 && string2.include?(substring)
        return true
      end
    end  
  end
  false
end


p substring_test('Something', 'Fun') == false
p substring_test('Something', 'Home') == true
p substring_test('Something', '') == false
p substring_test('', 'Something') == false
p substring_test('BANANA', 'banana') == false
p substring_test('test', 'lllt') == false
p substring_test('', '') == false
p substring_test('1234567', '541265') == true
p substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') == true