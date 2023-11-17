def zip(array1, array2)
  result = []
  array1.size.times do |index|
    result << [array1[index], array2[index]]
  end
  result
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]

# solution
def zipper(array1, array2)
  array1.each_with_index.with_object([]) do | (element, index), result|
    result << [element, array2[index]]
  end
end