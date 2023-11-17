# What will the following code print, and why? Don't run the code until you
# have tried to answer.

a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a

# my_answer =>

# 7; nondestructive method; Reassignment.

# correct_answer =>

# Even though a is defined before my_value is defined, it is not visible
# inside my_value