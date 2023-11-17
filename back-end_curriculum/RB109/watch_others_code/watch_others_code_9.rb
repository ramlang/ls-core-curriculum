# Question 9
# You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum, of the integers to the right of N . If there is no index that would make thhis happen return -1.
# For example:
# Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
# Your method will return the index 3, because at the 3rd position of the array, the sum of the left side of the index [1, 2, 3] and the sum of the right side of the index [3, 2, 1] both equal 6.

# Another one:
# You are given the array [20, 10, -80, 10, 10, 15, 35]
# At index 0 the left side is [] and the right side is [10, -80, 10, 10, 15, 35]
# They are both equal to 0 when added. Empty arrays are equal to 0 in this problem. Index 0 is the place where the lefft side and right side are equal.

# PROBLEM:
# input = array of integers
# output = integer (represents index)

# >> rules:
# - empty array equals 0
# - right and left sides do not include the index of the split

# >> tasks:
# - iterate over the array
# - take the sum of the left side and right side as the array is iterated through
# - return index when both sides equal eachother
# - sum sides of array
# - create ranges of the index

# EXAMPLES:
# - see above

# DATA STRUCTURE:
# - array

# ALGORTIHM:
# HIGH LEVEL
# Use an index variable to keep track of the middle point while iterating through the array. Iterate and find the sum of each side using ranges from 0 to the middle point and the middle point to the end of the array. Repeat until both sides are equal to one another and return the index. If no sides are equal to eachother then return -1.

# PSUEDOCODE  
# Initialize an index variable or use #each_index method
# Iterate through the array
# Take the index from 0 to index variable (But not including) and sum
# take the index from the index variable but not including to -1 and sum
# compare the results
# increment index variable and repeat

def find_even_index(array)
  array.each_index do |index|
    return index if array[0...index].sum == array[(index + 1)..-1].sum
  end
  -1
end
  
p find_even_index([1, 2, 3, 4, 3, 2, 1]) == 3
p find_even_index([1, 100, 50, -51, 1, 1]) == 1
p find_even_index([20, 10, 30, 10, 10, 15, 35]) == 3
p find_even_index([20, 10, -80, 10, 10, 15, 35]) == 0
p find_even_index([10, -80, 10, 10, 15, 35, 20]) == 6
p find_even_index([-1, -2, -3, -4, -3, -2, -1]) == 3