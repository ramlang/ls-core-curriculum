# Take a look at the following code:
name = 'Bob'
save_name = name
name = 'Alice'
puts name, save_name

# What does this code print out? Think about it for a moment before continuing.

# my_answer => Alice Alice

# correct_answer => ALice Bob

name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

# What does this print out? Can you explain these results?

# my_answer => BOB, BOB; because the caller is mutated by upcase!