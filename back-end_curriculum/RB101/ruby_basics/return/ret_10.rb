# What will the following code print? Why? Don't run it until you've attempted
# to answer.

def tricky_number
  if true
    number = 1
  else
    2
  end
end

puts tricky_number

# my_answer =>

# The code will print 2 because nothing was initialized to true and the if
# statement will return the last value.


# correct_answer =>

# The code will print 1.

# It has a conditional of true which means that the if clause will be evaluated
# every time.
# Since we know that the else clause was ignored, we can safely determine that
# the return value will be 1 because it's the only evaluated value in the if
# clause.
# If true was changed to false, then the else statement would be executed and
# the printed result would be 2.