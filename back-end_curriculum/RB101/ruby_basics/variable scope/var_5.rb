# What will the following code print, and why? Don't run the code until you have
# tried to answer.

a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a

# my_answer =>

# yzzyX; because the variable a is being set to equal another string value.


# correct_answer =>

# Xyzzy; the variable a is not changed because no destructive method is used.
# To summarize, assignment to a variable (an object) never mutates the object
# that is referenced


