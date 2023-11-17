# What will the following code print and why? Don't run it until you have
# tried to answer.

a = 7

def my_value(b)
  b += 10
end

my_value(a)
puts a

# my_answer =>

# 7; my_value(a) returns 17 but does not change the value of a so a = 7.
