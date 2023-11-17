# Write a method that takes a string, and then returns a hash that contains 3 entries: one represents the number of characters in the string that are lowercase letters, one the number of characters that are uppercase letters, and one the number of characters that are neither.
# letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# my_answer =>

# PEDAC

# Problem ---
# input is a string
# output is a hash
# problem domain = creating counter for three different characters, identifying the three types of characters, looking at each character in the string, storing and returning results in a hash
# explicit reqs = string input, lowercase, uppercase, and neither categories
# implicit reqs = no data validation, empty string returns zeros, numerical characters, spaces and punctuation count as neither

# mental model = create a hash to store the categories and counter, look at each character in the string, detmerine whether is it an upper, lower, or neither, move onto next character and repeat, increment the correct categories depending on result, return the hash once all characters in the string have been looked at

# Examples/ Test Cases ---
# letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
# letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
# letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
# letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# Data Structures ---
# input = string
# inbetween = array
# output = hash
# methods = String#count

# Algorithms ---
# Create hash with categories
# Use the count method to look at characters within the string
# Increment the correct category
# return the hash

# Code with Intent ---
def letter_case_count(string)
  categories = { lowercase: 0, uppercase: 0, neither: 0 }
  categories[:lowercase] = (string.count "a-z")
  categories[:uppercase] = (string.count "A-Z")
  categories[:neither] = (string.count "^A-Z","^a-z")
  categories
end
  
p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }


# example_of_answer =>
UPPERCASE_CHARS = ('A'..'Z').to_a
LOWERCASE_CHARS = ('a'..'z').to_a

def letter_case_count(string)
  counts = { lowercase: 0, uppercase: 0, neither: 0 }

  string.chars.each do |char|
    if UPPERCASE_CHARS.include?(char)
      counts[:uppercase] += 1
    elsif LOWERCASE_CHARS.include?(char)
      counts[:lowercase] += 1
    else
      counts[:neither] += 1
    end
  end

  counts
end

# example_of_answer =>
def letter_case_count(string)
  counts = {}
  characters = string.chars
  counts[:lowercase] = characters.count { |char| char =~ /[a-z]/ }
  counts[:uppercase] = characters.count { |char| char =~ /[A-Z]/ }
  counts[:neither] = characters.count { |char| char =~ /[^A-Za-z]/ }
  counts
end