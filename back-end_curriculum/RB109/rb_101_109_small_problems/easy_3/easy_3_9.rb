# Write another method that returns true if the string passed as an argument is a palindrome, false otherwise. This time, however, your method should be case-insensitive, and it should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the palindrome? method you wrote in the previous exercise.

# my_answer =>
def palindrome_string_array?(object)
  object == object.reverse
end

def real_palindrome?(string)
  string_array = string.gsub(/[[:punct:]]/, '').split.join.downcase
  palindrome_string_array?(string_array)
end

p real_palindrome?('madam') == true
p real_palindrome?('Madam') == true           # (case does not matter)
p real_palindrome?("Madam, I'm Adam")# == true # (only alphanumerics matter)
p real_palindrome?('356653') == true
p real_palindrome?('356a653') == true
p real_palindrome?('123ab321') == false


# example_of_answer =>
def real_palindrome?(string)
  string = string.downcase.delete('^a-z0-9')
  palindrome?(string)
end

# further_exploration =>
# Read the documentation for String#delete, and the closely related String#count (you need to read count to get all of the information you need for delete.)

# delete([other_str]+) → new_str
# Returns a copy of str with all characters in the intersection of its arguments deleted. Uses the same rules for building the set of characters as String#count.

# count([other_str]+) → integer
# Each other_str parameter defines a set of characters to count. The intersection of these sets defines the characters to count in str. Any other_str that starts with a caret ^ is negated. The sequence c1-c2 means all characters between c1 and c2. The backslash character \ can be used to escape ^ or - and is otherwise ignored unless it appears at the end of a sequence or the end of a other_str.