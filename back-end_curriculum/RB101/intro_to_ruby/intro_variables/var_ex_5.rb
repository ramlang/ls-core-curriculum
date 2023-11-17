# Differences between this...

x = 0
3.times do
  x += 1
end
puts x

# and this...

y = 0
3.times do
  y += 1
  x = y
end
puts x

# my_answer =>

# Both output 3 and return nil.


# correct_answer =>

# The first prints 3 to the screen. The second gives an error undefined
# local variable because x is only within the do/end. It was not declared
# outside the loop.

