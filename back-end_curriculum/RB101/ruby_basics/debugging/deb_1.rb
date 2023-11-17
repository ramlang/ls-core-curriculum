# You come across the following code. What errors does it raise for the given
# examples and what exactly do the error messages mean?

def find_first_nonzero_among(numbers)
  numbers.each do |n|
    return n if n.nonzero?
  end
end

# Examples

find_first_nonzero_among(0, 0, 1, 0, 2, 0)
find_first_nonzero_among(1)

# my_answer =>

# Traceback (most recent call last):
#         1: from deb_1.rb:12:in `<main>'
# deb_1.rb:4:in `find_first_nonzero_among': wrong number of arguments (given 6,
# expected 1) (ArgumentError)

# This error message means that 6 arguments were provided but only one
# parameter was declared.

# If that is fixed another error is raised regarding the .each method not being 
# a valid method for Integer. The each method is used on arrays or hashes.

# correct_answer =>

# This method is expecting an array of integers to be passed in as the argument.

find_first_nonzero_among([0, 0, 1, 0, 2, 0])
find_first_nonzero_among([1])

#ArgumentError
# NoMethodError