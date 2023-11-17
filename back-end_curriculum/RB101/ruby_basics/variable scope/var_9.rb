# What will the following code print, and why? Don't run the code until you
# have tried to answer.


a = 7
array = [1, 2, 3]

array.each do |a|
  a += 1
end

puts a

# my_answer =>

# 7

# example_of_answer =>

# Shadwoing effect where a block argument hides a local variable that is defined
# outside the block. Since the a is shadowed the statement within the block has
# no effect on it.