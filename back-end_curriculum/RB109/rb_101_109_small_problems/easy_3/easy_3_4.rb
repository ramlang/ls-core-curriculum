# Create a method that takes two arguments, multiplies them together, and returns the result

# my_answer =>

def multiply(num_1, num_2)
  num_1 * num_2
end

puts multiply(3, 5)
puts multiply(5, 3) == 15

# further_exploration =>
# For fun: what happens if the first argument is an Array? What do you think is happening here?
print multiply([3, 4, 5], 5)
# my_answer =>
# The array elements are duplicated by the number of times you multiply the array by. It is maybe duplicating the array and merging them together?

# from_documentation =>
# ary * int → new_ary
# ary * str → new_string

# Repetition — With a String argument, equivalent to ary.join(str).
# Otherwise, returns a new array built by concatenating the int copies of self.

