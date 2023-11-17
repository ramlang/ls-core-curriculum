# In the previous exercise, you wrote a method to transpose a 3 x 3 matrix as represented by a ruby Array of Arrays.

# Matrix transposes aren't limited to 3 x 3 matrices, or even square matrices. Any matrix can be transposed by simply switching columns with rows.

# Modify your transpose method from the previous exercise so it works with any matrix with at least 1 row and 1 column.

# PROBLEM:
# input = nested array
# output = nested array transposed

# >> rules:
# - must work with at least one row
# - must work with any other number of rows or columns
# - modify previous solution to adapt to new conditions

# >> tasks:
# - determine the size of the overall array
# - determine how many elements each nested arrat has
# - use these values to manipulate the array

# EXAMPLES:
# transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
# transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
# transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
#   [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
# transpose([[1]]) == [[1]]

# DATA STRUCTURE:
# - previous solution

# ALGORITHM 
# get number of arrays within nested array
# get number of elements within the arrays
# substitute for ranges given


def transpose(matrix)
  columns = matrix[0].size - 1
  rows = matrix.size - 1
  
  result = []
  (0..columns).each do |column_index|
    new_row = (0..rows).map { |row_index| matrix[row_index][column_index] }
    result << new_row
  end
  result
end

p transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
  [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
p transpose([[1]]) == [[1]]

# *** time = 15 min ***


# example_of_answer =>
def transpose(matrix)
  result = []
  number_of_rows = matrix.size
  number_of_columns = matrix.first.size
  (0...number_of_columns).each do |column_index| 
    new_row = (0...number_of_rows).map { |row_index| matrix[row_index][column_index] }
    result << new_row
  end
  result
end
# **NOTES: uses "..." for range so "size - 1" is not needed

# **NOTES: my method cannot be changed to handle different sized matrices because block parameters cannot be passed in as a variable because of scope rules. No way to alter the amount of parameters for the given block. Altered the LS solution instead...

# def transpose(nested_array)
#   result = [[],[],[]]
  
#   nested_array.map do |a, b, c|
#     result[0] << a
#     result[1] << b
#     result[2] << c
#   end
#   result
# end