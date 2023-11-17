# In the code below, an array containing the numbers 1 through 5 is assigned
# to numbers.

numbers = [1, 2, 3, 4, 5]

# Use Array#map to iterate over numbers and return a new array with each number
# doubled. Assign the returned array to a variable named doubled_numbers and
# print its value using #p.

# my_answer =>

doubled_numbers = numbers.map { |number| number * 2 }
p doubled_numbers


# example_of_answer =>

doubled_numbers = numbers.map do |number|
                    number * 2
                  end

p doubled_numbers


