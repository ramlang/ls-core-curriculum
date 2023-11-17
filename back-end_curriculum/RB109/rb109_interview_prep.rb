# --- Medium 1 ---

# Write a method that rotates an array by moving the first element to the end of the array. The original array should not be modified.

# Do not use the method Array#rotate or Array#rotate! for your implementation.

# Problem ---
# input is an array
# output is an array
# problem domain = removing first element of array, adding first element to end of array, adding element to end of array, returning a new array, not modifying original array
# explicit reqs = do not use #rotate or #rotate!, do not modify original
# implicit reqs = array can be made up of strings or integers

# mental model = create an empty array, iterate over original and add values starting at index 1 to new array. When complete add element at index 0 to array. Return the new array.

# Algorithm ---
# create an empty array object
# use iterator to iterate over original array
# starting at the second element add all elements to the new array
# once finished add the first element to the end of the array
# return the new array

def rotate_array(array)
  rotated_array = []
  array.each do |elem|
    next if elem == array[0]
    rotated_array << elem
  end
  rotated_array << array[0]
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']
p 
x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]                 # => true
# problem finish: 20m 0s

# further_exploration =>
# Write a method that rotates a string instead of an array. Do the same thing for integers. You may use rotate_array from inside your new method.

def rotate_string(string)
  string_array = string.chars
  rotate_array(string_array)
end

def rotate_integer(integer)
  integer_array = integer.to_s.chars.map(&:to_i)
  rotate_array(integer_array)
end

p rotate_integer(12345)
p rotate_string("hello")

# ----------
