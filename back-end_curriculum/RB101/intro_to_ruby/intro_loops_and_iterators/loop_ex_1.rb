# What does the each method return?

x = [1, 2, 3, 4, 5]
x.each do |a|
  a + 1
end

# my_answer =>
# The each method will return [2, 3, 4, 5, 6]

# correct_answer =>
# The each method will return [1, 2, 3, 4, 5]
# Each does not permanently modify the array so it will return the original