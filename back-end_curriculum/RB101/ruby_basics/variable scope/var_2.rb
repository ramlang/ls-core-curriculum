# What will the following code print, and why? Don't run the code until you
# have tried to answer.

a = 7

def my_value(a)
  a += 10
end

my_value(a)
puts a

# my_answer =>

# 7; my_value(a) will be 17 but will not change the value of a. The parameter
# also being called a is unrelated to the declared a varaible. 

# example_of_answer =>

# Local variables outside the method are not visible inside the method definition.
# Likewise the variable a inside the my_value method is a local variable within 
# the method itself.