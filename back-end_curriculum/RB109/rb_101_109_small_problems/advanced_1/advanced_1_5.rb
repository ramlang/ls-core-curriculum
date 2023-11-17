# Write a method that takes an arbitrary matrix and rotates it 90 degrees clockwise as shown above.

# This program should print "true" three time

# PROBLEM:
# input = array matrix
# output = rotated array matrix

# >> rules:
# - be able to handle non-square matrices
# - rotation is 90 degree clockwise

# >> tasks:
# - iterating in reverse through the given matrix
# - accessing the elements within the nested array
# - use a range to allow for arguments not 3x3
# - store the result array

# >> notes:
# - taking last element of the array and the first element of that array and assigning it to be the in the first element of the first array in the new matrix

# >> mental model:
# iterate over the nested array
# start with last index
# obtain the first element of the last array within the nested array
# move on to the next to last array (move up a row)
# obtain the first element of the second to last array
# move on to the next row...
# then go back to the last array and obtain the second element
# move up a row and obtain the second element
# for each iteration add the three elements to different nested arrays within the results array


# EXAMPLES

# matrix1 = [
#   [1, 5, 8],
#   [4, 7, 2],
#   [3, 9, 6]
# ]

# matrix2 = [
#   [3, 7, 4, 2],
#   [5, 1, 0, 8]
# ]

# new_matrix1 = rotate90(matrix1)
# new_matrix2 = rotate90(matrix2)
# new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

# p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
# p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
# p new_matrix3 == matrix2

# DATA STRUCTURE:
# - reverse iteration, results array

# ALGORITHM:
# find number of columns and rows
# initialize the results array 
# iterate over range (represents column index)
# iterate over range (represents row index) using map and return
# obtain needed values
# returns as array, move onto next column


# CODE:
def rotate90(matrix)
  rows = matrix.size
  columns = matrix[0].size
  
  (0...columns).map do |column|
    (0...rows).to_a.reverse.map do |row|
       matrix[row][column]
    end
  end
end

matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

new_matrix1 = rotate90(matrix1)
new_matrix2 = rotate90(matrix2)
new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
p new_matrix3 == matrix2

# *** time = ~ 1 hr 30 min ***


# example_of_answer =>
def rotate90(matrix)
  result = []
  number_of_rows = matrix.size
  number_of_columns = matrix.first.size
  (0...number_of_columns).each do |column_index|
    new_row = (0...number_of_rows).map do |row_index|
      matrix[row_index][column_index]
    end
    result << new_row.reverse
  end
  result
end

