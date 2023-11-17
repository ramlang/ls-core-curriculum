# Get rid of duplicates without specifically removing any one value.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.push(11)
array.unshift(0)
array.pop
array.push(3)

# my_answer =>
#does not modify the calling object
p array.uniq

# example_of_answer =>
#modifies the calling object
p array.uniq!