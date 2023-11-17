def valid_series?(nums)
  return false if nums.sum != 47

  odd_count = nums.count { |n| n.odd? }
  odd_count = 3 ? true : false
end

p valid_series?([5, 6, 2, 7, 3, 12, 4, 8]) == true    # should return true
p valid_series?([1, 12, 2, 5, 16, 6])      == false   # should return false
p valid_series?([28, 3, 4, 7, 9, 14])      == false   # should return false
p valid_series?([20, 6, 9, 4, 2, 1, 2, 3]) == true    # should return true
p valid_series?([10, 6, 19, 2, 6, 4])      == false   # should return false

# Our last test case is not returning the expected result. Why is that?

# my_answer =>

# The last line of the method is assigning odd_count to 3 instead of comparing it to 3. This will always evaluate to true even. So all arrays that add to 47 will be true regardless of the number of odd values.

def valid_series?(nums)
  return false if nums.sum != 47

  odd_count = nums.count { |n| n.odd? }
  odd_count == 3 ? true : false
end
