# Write a recursive method that computes the nth Fibonacci number, where nth is an argument to the method.

# F(n) = F(n - 1) + F(n - 2) where n > 2

# def sum(n)
#   return 1 if n == 1
#   n + sum(n - 1)
# end

# PEDAC

# Problem ---
# input is an integer
# output is an integer
# problem domain = using recursion, using conditionals if input is a certain value, adding numbers
# explicit reqs = must use recursion
# implicit reqs = 

# mental model =

# Examples/ Test Cases ---
# fibonacci(1) == 1
# fibonacci(2) == 1
# fibonacci(3) == 2
# fibonacci(4) == 3
# fibonacci(5) == 5
# fibonacci(12) == 144
# fibonacci(20) == 6765

# Data Structures ---
def fibonacci(n)
  return n if n < 2
  fibonacci(n - 2) + fibonacci(n - 1)
end

p fibonacci(1) == 1
p fibonacci(2) == 1
p fibonacci(3) == 2
p fibonacci(4) == 3
p fibonacci(5) == 5
p fibonacci(12) == 144
p fibonacci(20) == 6765

# further_exploration =>
# We will revisit Fibonacci numbers in the next exercise, and, in particular, we will discuss some problems with our recursive solution. Before you move on, take some time to think about our solution (not the tail recursive solution). Can you identify any faults with it? Not bugs, but problems that impact its usability. How might you try to repair the issues you identify? Don't do any coding right now.