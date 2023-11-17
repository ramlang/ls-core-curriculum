def missing(sorted_array)
  range = (sorted_array[0]..sorted_array[-1])
  range.to_a - sorted_array
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

# solution
def missing(array)
  result = []
  array.each_cons(2) do |first, second|
    result.concat(((first + 1)..(second - 1)).to_a)
  end
  result
end


=begin
Problem
input = sorted array of integers
output = new sorted array of missing values
problem domain = take sorted array, return an array that includes all of the missing integers in order between first and last element.
implicit/explicit = n/a

mental model = identify first and last element, using loop increment and add value to new array, do not add if value is included in given array, return new array.

Examples
missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]) == []
missing([1, 5]) == [2, 3, 4]
missing([6]) == []

Data Structure
Array

Algorithm
define method that takes sorted array argument
assign first element to variable
assign second element to variable
create a new array object
create a loop until the counter is equal to last element
increment number and add to new array if not present in given
return new array
=end