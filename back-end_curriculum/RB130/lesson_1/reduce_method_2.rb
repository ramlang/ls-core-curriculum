def reduce(array, value= array[0])
  counter = 1
  
  while counter < array.size
    elem = array[counter]
    value = yield(value, elem)
    counter += 1
  end
  
  value
end


p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']