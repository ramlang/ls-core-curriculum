# What is the error for the follwoing code mean?

def equal_to_four(x)
  if x == 4
    puts "yup"
  else
    puts "nope"
end

equal_to_four(5)

# Error message:
# exercise.rb:8: syntax error, unexpected end-of-input, expecting keyword_end

# my_answer =>
# The code is missing an additional 'end' keyword to close the if/else.
