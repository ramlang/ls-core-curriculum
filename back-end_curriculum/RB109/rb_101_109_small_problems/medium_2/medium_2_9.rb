# Write a method that takes an Array as an argument, and sorts that Array using the bubble sort algorithm as just described. Note that your sort will be "in-place"; that is, you will mutate the Array passed as an argument. You may assume that the Array contains at least 2 elements.

# array = [5, 3]
# bubble_sort!(array)
# array == [3, 5]

# array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
# array == [1, 2, 4, 6, 7]

# array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
# bubble_sort!(array)
# array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)


# my_answer =>

# PEDAC

# Problem ---
# input is an array (integers or string)
# output is a sorted array
# problem domain = iterating through the array, sorting the first and second element, exhcnage places or leave as is, sorting the second and third element, repeat until the elements have been sorted until the end. Repeat the process until no changes are made to the array, then end the looping process
# explicit reqs = assume array contains 2 elements, mutate array passed in as an argument, bubble method only
# implicit reqs = strings and integers, do not use sort method?, array elements are mutated

# Algorithm
# loop over the array
# use an index counter
# keep tally of changes made
# compare the first element to the second element
# is the first element greater than the second element?
# if it is swap the spots of the elements increment changes_made
# else do not swap and move on to the next pair
# increment the index
# compare the second element and the third element
# repeat process until the entire array size has been complete.
# unless no changes were made to the array then keep looping over the entire array
# only return array if it is compeltely sorted. 

def bubble_sort!(array)
  loop do
    index = 0
    changes = false

    while index != array.size - 1
      value_1, value_2 = array[index], array[index + 1]
      if value_1 > value_2
        array[index], array[index + 1] = value_2, value_1
        index += 1
        changes = true
      else
        index += 1
      end
    end

    break if changes == false
  end
  array
end


p array = [5, 3]
p bubble_sort!(array)
p array == [3, 5]

p array = [6, 2, 7, 1, 4]
p bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

p array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
p bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)


# correct_answer =>
def bubble_sort!(array)
  loop do
    swapped = false
    1.upto(array.size - 1) do |index|
      next if array[index - 1] <= array[index]
      array[index - 1], array[index] = array[index], array[index - 1]
      swapped = true
    end

    break unless swapped # break if swapped is false, but if swapped if true don't break
  end
  nil
end

# further_exploration =>
# Note that we did not use the optimization suggested on the Wiki page that skips looking at tail elements that we know are already sorted. If your solution also skipped this optimization, try modifying your solution so it uses that optimization.
