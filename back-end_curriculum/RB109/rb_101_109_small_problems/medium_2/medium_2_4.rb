# Write a method that takes a string as an argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

# Note that balanced pairs must each start with a (, not a ).

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a nothing
# return is boolean
# problem domain = return a boolean, identify the parenthesis '(' and identify the ')' parenthesis and count each pair, must find the ( parenthesis first before finding the additional ). if the parenthesis starts with ) then it will return false
# implicit reqs = no data validation
# explicit reqs = returns boolean, balanced pairs must start with (, 

# mental model = identify the first parenthesis in the string, next identify the pair, repeat process until string is completly looped over, if no match is found or the starting parenthese is wrong then return false

# Examples/ Test Cases ---
# balanced?('What (is) this?') == true
# balanced?('What is) this?') == false
# balanced?('What (is this?') == false
# balanced?('((What) (is this))?') == true
# balanced?('((What)) (is this))?') == false
# balanced?('Hey!') == true
# balanced?(')Hey!(') == false
# balanced?('What ((is))) up(') == false

# Data Structure ---
# input = string
# inbetween = array
# output = nothing
# return = boolean
# methods = # chars, #each, #if/else

# Algorithm ---
# define method with single string parameter
# separate string to only include the parentheses.

# Code with Intent ---
def balanced?(string)
  parentheses_array = string.chars.select do |char|
    char == '(' || char == ')'
  end

end


p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false

# correct_answer =>
def balanced?(string)
  parens = 0
  string.each_char do |char|
    parens += 1 if char == '('
    parens -= 1 if char == ')'
    break if parens < 0
  end

  parens.zero?
end

# further_exploartion =>
# There are a few other characters that should be matching as well. Square brackets and curly brackets normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be balanced. Can you expand this method to take into account those characters?
