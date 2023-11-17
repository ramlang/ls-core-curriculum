# Write a method that takes a String as an argument, and returns a new String that contains the original value using a staggered capitalization scheme in which every other character is capitalized, and the remaining characters are lowercase. Characters that are not letters should not be changed, but count as characters when switching between upper and lowercase.
# staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# staggered_case('ALL_CAPS') == 'AlL_CaPs'
# staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a string with cases alternating on each character
# problem domain = changing all the letters to upcase, then downcase everyother letter, skip over non letter characters
# explicit reqs = returns a new string, characters that are not letter unchanged, they do count as iterations, string to remain unchanged otherwise
# implicit reqs = 

# mental model = upcase the string, break string into characters, for everyother character change it to downcase based on index being odd or even, if not a letter then skip

# Examples/ Test Cases ---
# staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# staggered_case('ALL_CAPS') == 'AlL_CaPs'
# staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# Data Structures ---
# input = string
# inbetween = array
# output = string
# methods = String#upcase, String#downcase, Array#each_index, Array#map, conditional

# Algorithm ---
# break string into characters
# if the index is odd change to downcase
# if the index is 0 or even change to upcase
# else skip the iteration
# join the string
# return new string

# Code with Intent ---

def staggered_case(string)
  modified_string = string.chars.each_with_index do |char, ind|
    char.upcase! if ind.even?
    char.downcase! if ind.odd?
  end
  modified_string.join
end

# could have used a ternary operator instead of two if statements

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'


# example_of_answer =>
def staggered_case(string)
  result = ''
  need_upper = true
  string.chars.each do |char|
    if need_upper
      result += char.upcase
    else
      result += char.downcase
    end
    need_upper = !need_upper
  end
  result
end

# further_exploration =>
# Can you modify this method so the caller can request that the first character be downcased rather than upcased? If the first character is downcased, then the second character should be upcased, and so on.

# Hint: Use a keyword argument.