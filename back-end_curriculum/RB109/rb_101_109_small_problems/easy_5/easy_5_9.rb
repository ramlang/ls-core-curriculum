# Write a method that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character. You may not use String#squeeze or String#squeeze!.

# my_answer =>

# PEDAC

# Problem ---
# input is a string with duplicate characters
# output is a string with duplicate characters removed
# problem domain = identify the duplicate characters in a string, remove the duplicate characters except one, return the new string
# explicit reqs = cannot use squeeze or squeeze!, returns a new string
# implicit reqs = words with duplicate characters in a row are excluded, single characters will return the character, and empty string will return an empty string

# mental model = separate the individual characters in the string, look at each character in the array and compare it to the previous character, if the characters are the same then delete the first character until the next character is different, repeat this for every character in the array, change the array back into a string, return the new string

# Examples/ Test Cases ---
# crunch('ddaaiillyy ddoouubbllee') == 'daily double'
# crunch('4444abcabccba') == '4abcabcba'
# crunch('ggggggggggggggg') == 'g'
# crunch('a') == 'a'
# crunch('') == ''

# Data Structures ---
# input = string
# inbetween = array
# output = new string
# methods = Array#join, Array#split, Array#each or #map

# Algorithms ---
# given string
# split string into an array
# iterate over the string
# set a new string variable
# if the value at an index is the same as the last value added to new string vraiable then skip
# else add the character to the new string variable
# repeat for entire string
# return the new string variable

# Code with Inent ---
def crunch(string)
  clean_string = ''
  string.chars.map do |chr|
    if clean_string.end_with?(chr)
      next
    else
      clean_string << chr
    end
  end
  clean_string
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''


# example_of_answer =>
def crunch(text)
  index = 0
  crunch_text = ''
  while index <= text.length - 1
    crunch_text << text[index] unless text[index] == text[index + 1]
    index += 1
  end
  crunch_text
end

# further_exploration =>
# You may have noticed that we continue iterating until index points past the end of the string. As a result, on the last iteration text[index] is the last character in text, while text[index + 1] is nil. Why do we do this? What happens if we stop iterating when index is equal to text.length?

# Can you determine why we didn't use String#each_char or String#chars to iterate through the string? How would you update this method to use String#each_char or String#chars?

# You can solve this problem using regular expressions (see the Regexp class documentation). For a fun challenge, give this a try with regular expressions. If you haven't already read our book, Introduction to Regular Expressions, you may want to keep it handy if you try this challenge.

# Can you think of other solutions besides regular expressions?