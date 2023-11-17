# Find and fix the bug, then explain why the buggy program printed the results it did.

def my_method(array)
  if array.empty?
    []
  elsif array.size > 1 # BUG => added missing conditional expression
    array.map do |value|
      value * value
    end
  else
    [7 * array.first]
  end
end

p my_method([])
p my_method([3])
p my_method([3, 4])
p my_method([5, 6, 7])

# Ruby took the array.map method call as the conditional expression, which meant that there was no return value for that elsif branch. Since the array would always return truthy it would be executed as long as the array wasn't empty. Because there was no conditional statement provided and it took the return value as the conditional instead the method returned nil.
