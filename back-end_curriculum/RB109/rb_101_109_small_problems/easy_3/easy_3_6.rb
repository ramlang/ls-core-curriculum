# The || operator returns a truthy value if either or both of its operands are truthy. If both operands are falsey, it returns a falsey value. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

# In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.

# my_answer =>

# PEDAC

# Problem ---
# input is two arguments
# output is a boolean
# problem domain = return true if one argument is true
# explicit reqs = return must be a boolean
# implicit reqs = ?

# mental model = accpet two arguments, if one argument is true return true, if both arguments are false, return false.

def xor?(arg1, arg2)
  if ((!!arg1 == true) && (!!arg2 == false)) || ((!!arg1 == false) && (!!arg2 == true))
    true
  else
    false
  end
end

p xor?(true, nil)
p xor?(1, 1)
p xor?(false, false)
p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false


# example_of_answer =>
def xor?(value1, value2)
  return true if value1 && !value2
  return true if value2 && !value1
  false
end

# example_of_answer =>
def xor?(value1, value2)
  !!((value1 && !value2) || (value2 && !value1))
end


# further_exploration =>
# Can you think of a situation in which a boolean xor method would be useful? Suppose you were modeling a light at the top of a flight of stairs wired in such a way that the light can be turned on or off using either the switch at the bottom of the stairs or the switch at the top of the stairs. This is an xor configuration, and it can be modeled in ruby using the xor method. Think of some additional examples.

# || and && are so-called short circuit operators in that the second operand is not evaluated if its value is not needed. Does the xor method perform short-circuit evaluation of its operands? Why or why not? Does short-circuit evaluation in xor operations even make sense?

# my_answer =>
# No, it does not make sense because in order for one value to only be true both arguments must be evaluated. 