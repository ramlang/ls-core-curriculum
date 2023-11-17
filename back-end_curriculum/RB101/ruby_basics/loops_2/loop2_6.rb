# Given the array below, use loop to remove and print each name. Stop the loop
# once names doesn't contain any more elements.

# my_answer =>

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  puts names[0]
  names.shift
  break if names[0] == nil
end


# example_of_answer =>

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  puts names.shift
  break if names.empty?
end

# to print out the array in reverse order

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  puts names.pop
  break if names.empty?
end