# Write a method that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers that can be formed between the elements of the two Arrays. The results should be sorted by increasing value.

# You may assume that neither argument is an empty Array.
# multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# my_answer =>

# PEDAC

# Problem ---
# input is two arrays
# output is one array
# problem domain = multiply each value of the first array with every value of the second array, store results in a new array, sort the elements in increasing order
# explicit reqs = return a new array, sorted by increasing value
# implicit reqs = no floats, the arrays do not have to be of the same size

# mental model = for each element of the first array, multiply the value by all the elements in the second array, store in a new array, repeat for the next element of the first array and multiply by all values of the second array, store in a new array, repeat, sort the array when there are no more values left in the first array, return the sorted array

# Examples/ Test Cases ---
# multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# Data Structure ---
# input = array (2)
# inbetween = new array
# output = sorted new array
# methods = Array#sort, iterator, Array#push

# Algorithm ---
# create an index variable
# create a loop
# loop increments after the iterator is completed
# loop breaks when the index variable is equal to the array size
# use an iterator on the larger array
# multiply the first index of the first array by first index of the second array
# store result in new array
# multiply the first index of the first array by second index of the second array
# store result in new array
# repeat until the first index of the first array has been multiplied by all the elements of the second array
# multiply the second index of the first array by the first index of the second array
# repeat until all values have been multiplied
# return the new array after sorting in increasing order

# Code with Intetn ---
def multiply_all_pairs(array_1, array_2)
  index = 0
  result = []
  loop do
    break if index == array_1.size
    array_2.each { |num| result << (array_1[index] * num) }
    index += 1
  end
  result.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]


# example_of_answer =>
def multiply_all_pairs(array_1, array_2)
  products = []
  array_1.each do |item_1|
    array_2.each do |item_2|
      products << item_1 * item_2
    end
  end
  products.sort
end

# example_of_answer =>
def multiply_all_pairs(array_1, array_2)
  array_1.product(array_2).map { |num1, num2| num1 * num2 }.sort
end

