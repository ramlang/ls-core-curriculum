# Sort an array of passed in values using merge sort. You can assume that this array may contain only one type of data. And that data may be either all numbers or all strings.

# Merge sort is a recursive sorting algorithm that works by breaking down the array elements into nested sub-arrays, then recombining those nested sub-arrays in sorted order. It is best shown by example. For instance, let's merge sort the array [9,5,7,1]. Breaking this down into nested sub-arrays, we get:


# PROBLEM:
# input = array
# output = array sorted

# >> rules:
# - array only contains one type of data
# - all numbers or all strings
# - recursive method
# - break down into sub arrays, merge each sub array before combining back to flattened array

# >> tasks:
# - take number of elements and break up into subarrays
# - take the elements within the subarrays until the size of the subarray is 1
# - need to be able to have two arguments to pass into the merge method
# - keep merging until array is flattened
# - come up with the recursive part of the method which is repeated spliting the array into two

# >> mental model:
# - split the array into two separate arrays
# - nest the two arrays within an array
# - split the array within the array into two separate arrays
# - check the size of each array before splitting, if 1 then stop splitting array
# - pass the split arrays into the merge method
# - continue until flatten array is achieved


# EXAMPLES:
# [9, 5, 7, 1] ->
# [[9, 5], [7, 1]] ->
# [[[9], [5]], [[7], [1]]]
# We then work our way back to a flat array by merging each pair of nested sub-arrays:

# [[[9], [5]], [[7], [1]]] ->
# [[5, 9], [1, 7]] ->
# [1, 5, 7, 9]

# merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
# merge_sort([5, 3]) == [3, 5]
# merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
# merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
# merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# DATA STRUCTURE:
# -recursion, slice, array, iteration

# ALGORITHM:
# recursively split array into two
#  - get size of half of thea array
#  - split array
#  - pass values into split method
# when array size of the nested arrays are 1, stop
# return the broken down array

# iterate through the nested array and pass values into the merge method
#  - maybe use first and last to access methods without an index
#  - number of splits and elements will be different each time
#  - combine using another recursive method this time to combine arrays
#  - pass into merge method as well?

# keep merging until the one dimensional array is achieved 

# CODE:

# merge method from previous exercise =>
def sort(arr1, arr2, result)
  ind1 = 0
  ind2 = 0

  while result.size < (arr1 + arr2).size
    case arr1[ind1] <=> arr2[ind2]
    when nil

      result.concat(arr2[ind2..-1]) if arr1[ind1] == nil # concat will add individual elements
      result.concat(arr1[ind1..-1]) if arr2[ind2] == nil # shovel operator will add as an array
    when -1
      result << arr1[ind1]
      ind1 += 1
    when 0
      result << arr1[ind1] << arr2[ind2]
      ind1 += 1
      ind2 += 1
    when 1
      result << arr2[ind2]
      ind2 += 1
    else
      result 
    end
  end
  result.flatten
end
  
def merge(arr1, arr2)
  result = []
  
  if arr1.empty? || arr2.empty?
    return (result << arr1 << arr2).flatten
  end
  
  sort(arr1, arr2, result)
end

# merge_sort method =>
def merge_sort(array)
  return [array[0]] if array.size == 1
  half = (array.size - 1) / 2

  array1 = array[0..half]
  array2 = array[(half + 1)..-1]

  array1 = merge_sort(array1)
  array2 = merge_sort(array2)

  return merge(array1, array2)
end

p merge_sort([9, 5, 7, 1]) == [1, 5, 7, 9]
p merge_sort([5, 3]) == [3, 5]
p merge_sort([6, 2, 7, 1, 4]) == [1, 2, 4, 6, 7]
p merge_sort(%w(Sue Pete Alice Tyler Rachel Kim Bonnie)) == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
p merge_sort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) == [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

# *** time = ~2 hrs ***

# exmaple_of_answer =>
def merge_sort(array)
  return array if array.size == 1

  sub_array_1 = array[0...array.size / 2]
  sub_array_2 = array[array.size / 2...array.size]

  sub_array_1 = merge_sort(sub_array_1)
  sub_array_2 = merge_sort(sub_array_2)

  merge(sub_array_1, sub_array_2)
end
