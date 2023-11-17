def none?(collection, &block)
  !any?(collection, &block)
end

def any?(array)
  array.each do |elem|
    return true if yield(elem)
  end
  false  
end

p none?([1, 3, 5, 6]) { |value| value.even? } == false
p none?([1, 3, 5, 7]) { |value| value.even? } == true
p none?([2, 4, 6, 8]) { |value| value.odd? } == true
p none?([1, 3, 5, 7]) { |value| value % 5 == 0 } == false
p none?([1, 3, 5, 7]) { |value| true } == false
p none?([1, 3, 5, 7]) { |value| false } == true
p none?([]) { |value| true } == true

# solution
def none?(collection)
  collection.each { |item| return false if yield(item) }
  true
end

