# Write a method that takes two sorted Arrays as arguments, and returns a new Array that contains all elements from both arguments in sorted order.

# You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

# Your solution should not mutate the input arrays.

# my_answer =>

# PROBLEM:
# input = two sorted arrays
# output = combined sorted array

# >> rules:
# - cannot sort a results array within method
# - build result one element at a time
# - do NOT mutate the input arrays

# >> tasks:
# - iterate over both arrays possibly at the same time
# - pick a starting value from first array
# - compare to starting value of other array
# - if first array value less then second, add first to array
# - otherwise add value from second array and compare second array to first array

# EXAMPLES: 
# merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
# merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
# merge([], [1, 4, 5]) == [1, 4, 5]
# merge([1, 4, 5], []) == [1, 4, 5]

# DATA STRUCTURE:
# array, iterator, possibly case statement, if/else

# ALGORITHM: 
# check if array1 or array2 is empty
# return results with arr1 and arr2 added and flattened

# take first array and compare against second array
# if arr1[ind] < arr2[ind] then add the value at arr1[ind]
# if arr1[ind + 1] < arr2[ind] then add the value at arr1[ind+1]
# else if arr1[ind + 1] > arr2[ind] add arr2[ind]
# keep repeating until compelte



def sort(arr1, arr2, result)
  ind1 = 0
  ind2 = 0
  
  while result.size < (arr1 + arr2).size
    case arr1[ind1] <=> arr2[ind2]
    when nil
      result << arr2[ind2..-1] if arr1[ind1] == nil
      result << arr1[ind1..-1] if arr2[ind2] == nil
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

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]

# *** time: ~2-3 hours ***


# correct_answer =>
def merge(array1, array2)
  index2 = 0
  result = []

  array1.each do |value|
    while index2 < array2.size && array2[index2] <= value
      result << array2[index2]
      index2 += 1
    end
    result << value
  end

  result.concat(array2[index2..-1])
end

# Understanding the answer =>
# The variable `index2` is initialied and assigned the value of `0` on `line 1` of the method. Below the variable `result` is assigned to an empty array `[]`. The argument `array1` is iterated over using the `#each` method. `#each` is passed a block with the parameter `value` which represents the elements within `array1`. A `while` loop is made that reamins in effect as long as `index2` is less than the size of `array2` and `array2[index2]` is less than or equal to the `value` argument. While those conditions are true `array2[index2]` (elements of `array2` at the current `index2`) are added to the object `results` references. The `index2` value is then incremented by 1. If the `value` of array1 is greater or if the `index2` count has reached the end of `array2` the loop will end. After that the `value` argument wil be added to the `result` object. Then the `each` method will move on to the next iteration. So basically we are comparing different elements within array2 to the same element in array1. As long as array2 values are less than the array1 values we keep adding from array2. Once array2 is greater than array1, we then add the value from array1, and then move on to the next element of array1. After the each method is complete the last values within array2 are concatenated to the result array object.