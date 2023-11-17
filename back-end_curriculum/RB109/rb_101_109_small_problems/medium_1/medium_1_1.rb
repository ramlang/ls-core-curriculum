# Write a method that rotates an array by moving the first element to the end of the array. The original array should not be modified.

# Do not use the method Array#rotate or Array#rotate! for your implementation.

# my_answer =>
def rotate_array(array)
  new_array = []
  array.each_with_index do |elem, ind|
    next if ind == 0
    new_array << elem
  end
  last_elem = array[0]
  new_array << last_elem
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']
p 
p x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]


# correct_answer =>
def rotate_array(array)
  array[1..-1] + [array[0]]
end

# this method separates the array into two parts
# the first part if everything after index 0 to -1 of the index which is the very end
# the second part is the array at index 0 which is the first value in the array
# the values are added and value at index 0 is added to the end of the other array


# further_exploration
# Write a method that rotates a string instead of an array. Do the same thing for integers. You may use rotate_array from inside your new method.