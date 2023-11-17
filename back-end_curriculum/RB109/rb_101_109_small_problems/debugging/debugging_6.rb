
def move(n, from_array, to_array)
  to_array << from_array.shift
  move(n - 1, from_array, to_array)
end

todo = ['study', 'walk the dog', 'coffee with Tom']
done = ['apply sunscreen', 'go to the beach']

move(2, todo, done)

p todo # should be: ['coffee with Tom']
p done # should be: ['apply sunscreen', 'go to the beach', 'study', 'walk the dog']

# Invoking move on line 11 results in a SystemStackError. What does this error mean and why does it happen?

# my_answer =>
# This means that the System Stack couldn't hold all of the commands being executed, or rather that there was an infinite loop going on. This occured because there was no break condition within the method.

def move(n, from_array, to_array)
  return if n < 1
  to_array << from_array.shift
  move(n - 1, from_array, to_array)
end

todo = ['study', 'walk the dog', 'coffee with Tom']
done = ['apply sunscreen', 'go to the beach']

move(2, todo, done)

p todo # should be: ['coffee with Tom']
p done # should be: ['apply sunscreen', 'go to the beach', 'study', 'walk the dog']


# example_of_answer =>
# Causing stack overflow; each method call is stored in a stack, but we never stop calling the method so it keeps growing until the limit is exceeded.

def move(n, from_array, to_array)
  return if n == 0
  to_array << from_array.shift
  move(n - 1, from_array, to_array)
end

todo = ['study', 'walk the dog', 'coffee with Tom']
done = ['apply sunscreen', 'go to the beach']

move(2, todo, done)

p todo #=> ['coffee with Tom']
p done #=> ['apply sunscreen', 'go to the beach', 'study', 'walk the dog']

# further_exlporation =>
# The method will loop begin adding nil to the array if the size of todo is smaller than n. This is because once the array is empty the shift method will return nil, until n is zero.