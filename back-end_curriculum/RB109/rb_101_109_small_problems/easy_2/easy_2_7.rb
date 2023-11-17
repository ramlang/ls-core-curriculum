# Print all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

# my_answer =>
(1..99).each { |num| puts num if false == num.odd?}
1.upto(99) { |num| puts num if (num % 2 == 0) }

# example_of_answer =>
value = 1
while value <= 99
  puts value if value.even?
  value += 1
end