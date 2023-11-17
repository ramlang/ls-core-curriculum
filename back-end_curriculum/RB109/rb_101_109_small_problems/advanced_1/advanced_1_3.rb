# Write a method that takes a 3 x 3 matrix in Array of Arrays format and returns the transpose of the original matrix. Note that there is a Array#transpose method that does this -- you may not use it for this exercise. You also are not allowed to use the Matrix class from the standard library. Your task is to do this yourself.

# Take care not to modify the original matrix: you must produce a new matrix and leave the original matrix unchanged.

# my_answer =>

# PROBLEM:
# input = nested array (matrix)
# output = nested array transposed (new matrix)

# >> rules:
# - DO NOT mutate original array
# - can't use Array#transpose method or Matrix class

# >> task:
# - create a new return array
# - be able to acces the inner arrays within the array
# - access the first element of every array
# - reassign or push elements to another array
# - acces the second element of every array
# - reassign or push 
# - etc.
# - return the new array (needs to be a nested array)

# EXAMPLES: 
# matrix = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# new_matrix = transpose(matrix)

# p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
# p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
# This program should print "true" twice.

# DATA STRUCTURE:
# - Array#map (maybe access each nested element at once? Using multiple parameters???)
# - Array#each_with_index

# ALGORITHM:
# define my method
# iterate over the nested array
# use a block with three parameters (one to represent each nested array)
# return an array with all argument included
# iterate again, repeat
# return new array

def transpose(nested_array)
  result = [[],[],[]]
  
  nested_array.map do |a, b, c|
    result[0] << a
    result[1] << b
    result[2] << c
  end
  result
end

matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
# This program should print "true" twice.

# *** time = 25 min ***


# example_of_answer =>
def transpose(matrix)
  result = []
  (0..2).each do |column_index|
    new_row = (0..2).map { |row_index| matrix[row_index][column_index] }
    result << new_row
  end
  result
end

# further_exlporation =>
# Write a transpose! method that transposes a matrix in place. The obvious solution is to reuse transpose from above, then copy the results back into the array specified by the argument. For this method, don't use this approach; write a method from scratch that does the in-place transpose.