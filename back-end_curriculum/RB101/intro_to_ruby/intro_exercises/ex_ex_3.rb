# Now using the same array from #2, use the select method
# to extract all odd numbers into a new array.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# my_answer =>
new_array = array.select { |num| num.odd? }
puts new_array

#example_of_answer =>
new_array2 = array.select { |num| num % 2 != 0 }
puts new_array2
