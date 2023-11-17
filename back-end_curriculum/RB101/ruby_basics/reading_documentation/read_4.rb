# Locate the documentation for break, and determine what value break sets
# the return value to for the while loop.

# my_answer =>

# Break will return the result of the expression it is breaking out of.


# correct_answer =>

# Break returns nil when no arguments are passed to break, or the value of
# the argument when an argument is provided.
# The while loop documentation says that while returns nil unless break
# receives a value. So, if break is not supplied a value, while still returns nil.
# test:

result = while true
  break
end
p result

# Returns nil