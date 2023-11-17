=begin
Problem
input = array
output = array from false return onward (drop the values that return true but keep the values that return false)

mental model = determine where the false point is within the array, split the array or select the range within that array.

=end


def drop_while(array)
  array.each_with_index do |element, index|
    return array[index..-1] unless yield(element)
  end
  []
end

p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []

# solution
def drop_while(array)
  index = 0
  while index < array.size && yield(array[index])
    index += 1
  end
  
  array[index..-1]
end
